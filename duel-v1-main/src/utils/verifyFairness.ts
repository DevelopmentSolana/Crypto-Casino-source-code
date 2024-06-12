import BigNumber from 'bignumber.js';
import { Candidate } from 'api/types/jackpot';

async function calculateOutCome(randomString: string, total: number) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(randomString);

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map(b => ('00' + b.toString(16)).slice(-2))
    .join('');

  // console.info(hashHex);

  var bn = new BigNumber('0x' + hashHex.slice(0, 16));
  // console.info(bn.toString());
  var result = bn.mod(total).toNumber();
  return result;
}

function compare(a: Candidate, b: Candidate) {
  // compiler error Property 'age' does not exist on type 'string | number | object'.
  return (a.percent ?? 0) < (b.percent ?? 0) ||
    ((a.percent ?? 0) === (b.percent ?? 0) && a.id > b.id)
    ? -1
    : 1;
}

async function byteGenerator(
  serverSeed: string,
  clientSeed: string,
  nonce: number,
  cursor: number
) {
  const currentRound = Math.floor(cursor / 32);
  const currentRoundCursor = cursor - currentRound * 32;
  const str =
    serverSeed +
    ':' +
    clientSeed +
    ':' +
    nonce.toString() +
    ':' +
    currentRound.toString();
  const msgBuffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.slice(currentRoundCursor, currentRoundCursor + 4);
}

function generateEvent(rows: number, starsInRow: number, shuffle: number[]) {
  var arr = [];
  // console.log(shuffle);
  for (var i = 0; i < rows; i++) {
    arr.push(i);
  }
  for (i = rows - 1; i > 0; i--) {
    const temp: number = arr[i];
    arr[i] = arr[shuffle[i]];
    arr[shuffle[i]] = temp;
  }
  return arr.slice(0, starsInRow);
}

export async function generateTower(
  serverSeed: string,
  clientSeed: string,
  nonce: number,
  rows: number,
  starsInRow: number,
  count: number
) {
  var tower = [];
  var cursor = 0;
  for (var i = 0; i < count; i++) {
    var shuffle = [];
    const bytes = await byteGenerator(serverSeed, clientSeed, nonce, cursor);
    for (var j = 1; j <= rows; j++) {
      const result = (bytes[j - 1] * j) / 256;
      shuffle.push(Math.floor(result));
    }
    tower.push(generateEvent(rows, starsInRow, shuffle));
    cursor += 4;
    // console.log(shuffle);
  }
  return tower;
}

export async function verifyFairness(
  candidates: Candidate[],
  randomString: string
) {
  candidates.sort((a: Candidate, b: Candidate) => {
    return compare(a, b);
  });
  var weights: number[] = [],
    totalWeight: number = 0;
  for (var i = 0; i < candidates.length; i++) {
    weights[i] = candidates[i].percent ?? 0;
    totalWeight += candidates[i].percent ?? 0;
  }

  const gcd = findGCD(weights);
  totalWeight = totalWeight / gcd;
  for (let i = 0; i < weights.length; i++) {
    weights[i] /= gcd;
  }

  var outCome = await calculateOutCome(randomString, totalWeight);
  var winnerIndex = 0;
  while (outCome >= weights[winnerIndex]) {
    outCome -= weights[winnerIndex];
    winnerIndex++;
  }
  if (winnerIndex === weights.length) {
    winnerIndex--;
  }
  return { outCome, winner: candidates[winnerIndex] };
}

export async function verifyCrashFairness(
  serverSeed: string,
  clientSeed: string
) {
  var randomNumber = await calculateRandomNumber(serverSeed, clientSeed);
  var hs = new BigNumber(20);
  if (randomNumber.mod(hs).toNumber() === 0) {
    return 1;
  }

  var h = randomNumber;
  var e = new BigNumber(2 ** 52);
  return (
    Math.floor(e.multipliedBy(100).minus(h).dividedBy(e.minus(h)).toNumber()) /
    100.0
  );
}

async function calculateRandomNumber(serverSeed: string, clientSeed: string) {
  const msgBuffer = new TextEncoder().encode(serverSeed + clientSeed);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => ('00' + b.toString(16)).slice(-2))
    .join('');

  return new BigNumber('0x' + hashHex.slice(0, 13));
}

function gcd(a: number, b: number): number {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

function findGCD(arr: number[]): number {
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    result = gcd(arr[i], result);

    if (result === 1) {
      return 1;
    }
  }
  return result;
}
