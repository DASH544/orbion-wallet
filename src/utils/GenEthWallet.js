import { HDNodeWallet, Wallet } from "ethers";
import {mnemonicToSeed } from "bip39";
export async function GenEthWallet(mnemonic, currIndex) {
  const seed = await mnemonicToSeed(mnemonic);
  const derivationPath = `m/44'/60'/${currIndex}'/0'`;
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  const privateKey = child.privateKey;
  const wallet = new Wallet(privateKey);
  const newWallet = {
    publicKey: wallet.address,
    privateKey: privateKey,
    index:currIndex
  };

  return newWallet;
}