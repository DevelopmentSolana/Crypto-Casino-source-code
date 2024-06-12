import { FC, ReactNode, useCallback, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  GlowWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ModalProvider } from 'components/Modal';
import { dark } from './theme';
import { MatchBreakpointsProvider } from 'contexts/MatchBreakpoints/Provider';
import { SoundProvider } from 'contexts/Sound/Provider';
import { MainProvider } from 'contexts/Main/Provider';
import { ProSidebarProvider } from 'react-pro-sidebar';

// Redux Store
import store from './state';
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const StyledThemeProvider = (props: any) => {
  return <ThemeProvider theme={dark} {...props} />;
};

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.

  const network =
    process.env.REACT_APP_NETWORK === 'mainnet'
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => {
    if (process.env.REACT_APP_SOLANA_ENDPOINT) {
      return process.env.REACT_APP_SOLANA_ENDPOINT;
    } else return clusterApiUrl(network);
  }, [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SlopeWalletAdapter(),
      new BackpackWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter()
    ],
    [network]
  );

  const onError = useCallback((error: WalletError) => {
    // We must handle WalletNotSelectedError so, log other errors
    if (error.name !== 'WalletNotSelectedError') console.error(error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={true}>
        <WalletModalProvider>
          <Provider store={store}>
            <SoundProvider>
              <ProSidebarProvider>
                <StyledThemeProvider>
                  <SkeletonTheme
                    baseColor="#ffffff10"
                    highlightColor="#ffffff20"
                  >
                    <MatchBreakpointsProvider>
                      <ModalProvider>
                        <MainProvider>{children}</MainProvider>
                      </ModalProvider>
                    </MatchBreakpointsProvider>
                  </SkeletonTheme>
                </StyledThemeProvider>
              </ProSidebarProvider>
            </SoundProvider>
          </Provider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Providers;
