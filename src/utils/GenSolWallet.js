import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import nacl from "tweetnacl";
export const GenSolWallet =async (mnemonic, currIndex) => {
  const seed = await mnemonicToSeed(mnemonic);
  const path = `m/44'/501'/${currIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);
  const newWallet = {
    publicKey: keypair.publicKey.toBase58(),
    privateKey: bs58.encode(secret),
    index: currIndex,
  };
  return newWallet
};
