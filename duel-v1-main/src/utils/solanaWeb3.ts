import { Connection, PublicKey, Transaction } from '@solana/web3.js';

/**
 * @exported @async
 * Prepare, signs through provider, sends to chain, and confirm solana tx.
 * This function is used in the combination of provider handlers
 * to send rpc requests.
 *
 * @arg connection Solana cluster rpc connection object.
 * @arg transaction Not prepared transaction object.
 * @arg feePayer Signer's pubkey of provided transaction.
 * @arg signTxFn Callback function to sign transaction through provider.
 * @arg sendTxFn Callback function to send transaction through cluster connection.
 * @returns Transaction hash confirmed on the cluster.
 */
export const sendAndConfirmTransaction = async (
  connection: Connection,
  transaction: Transaction,
  feePayer: PublicKey,
  signTxFn: Function | undefined,
  sendTxFn: Function
) => {
  try {
    const signature = await sendTxFn(transaction, connection);
    await confirmTransaction(connection, signature);
    return signature;
  } catch (err: any) {
    if (isRawTransactionHandlingRequiredError(err)) {
      const signature = await sendAndConfirmRawTransaction(
        connection,
        transaction,
        feePayer,
        signTxFn!
      );
      await confirmTransaction(connection, signature);
      return signature;
    }
    throw err;
  }
};

/**
 * @async
 * Prepare, signs and sends raw transaction in case of main approach
 * to send transaction is failed. This function is for redundancy against
 * failure of provider's `SendTransaction` rpc request.
 *
 * @param connection Solana cluster rpc connection object.
 * @param transaction Not prepared transaction object.
 * @param feePayer Signer's pubkeyof provided transaction.
 * @param signTxFn Callback function to sign transaction through provider.
 * @returns Transaction hash confirmed on the cluster.
 */
const sendAndConfirmRawTransaction = async (
  connection: Connection,
  transaction: Transaction,
  feePayer: PublicKey,
  signTxFn: Function
) => {
  let latestBlockHash = await connection.getLatestBlockhash();
  transaction.recentBlockhash = latestBlockHash.blockhash;
  transaction.feePayer = feePayer;
  const tx = await signTxFn!(transaction);
  const rawTx = tx.serialize();
  return await connection.sendRawTransaction(rawTx);
};

/**
 * @async
 * Wait until commitment of transaction reached finalization with maximum confirmation.
 *
 * @param connection Solana cluster rpc connection object.
 * @param signature Transaction hash with `Confirmed` commitment on the cluster.
 * @returns Finalize result of the transaction.
 */
const confirmTransaction = async (
  connection: Connection,
  signature: string
) => {
  const latestBlockHash = await connection.getLatestBlockhash();

  return await connection.confirmTransaction({
    blockhash: latestBlockHash.blockhash,
    lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    signature: signature
  });
};

/**
 * Check whether the error requires additional handligh with raw transaction.
 *
 * @param err Error object catched through main approach of send transaction.
 * @returns Whether the error is for raw transaction handling or not.
 */
const isRawTransactionHandlingRequiredError = (err: any) => {
  return (
    err !== undefined &&
    err.message !== undefined &&
    err.name !== undefined &&
    typeof err.message === 'string' &&
    typeof err.name === 'string' &&
    err.message.includes('Missing or invalid parameters') &&
    err.name === 'WalletSendTransactionError'
  );
};
