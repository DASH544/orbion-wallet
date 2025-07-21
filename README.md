# Orbion Wallet

Orbion Wallet is a simple, client-side cryptocurrency wallet generator and viewer built with React. It allows users to generate and display both **Ethereum (ETH)** and **Solana (SOL)** wallets deterministically from a mnemonic seed.

⚠️ **Disclaimer**: This project is intended for educational and demonstration purposes only. It stores sensitive information (mnemonic seeds and private keys) directly in your browser's local storage, which is **NOT** secure for real funds. **DO NOT** use this application to manage real cryptocurrency assets.

---

## ✨ Features

- 🔁 **Multi-Chain Support**: Generate wallets for Ethereum (ETH) and Solana (SOL).
- 🔐 **Deterministic Generation**: Wallets are derived from a single mnemonic seed.
- 📋 **Mnemonic Seed Management**: Input and store your mnemonic seed in local storage.
- 🧾 **Key Display**: View public address and private key.
- 👁️ **Private Key Toggle**: Hide or show private keys.
- 💾 **Local Storage Persistence**: Automatically saves data for future sessions.
- 🗑️ **Basic Wallet Deletion**: Remove wallet data from the interface and storage.

---

## 🚀 Technologies Used

- **React.js** – User interface framework.
- **Tailwind CSS** – Utility-first CSS for styling.
- **Ethers.js** – Ethereum wallet and blockchain interaction.
- **Solana Web3.js** – Solana wallet and blockchain interaction.

---

## 🛠️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or Yarn

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DASH544/orbion-wallet.git
cd orbion-wallet

# Install dependencies
npm install
# or
yarn install
```
### ▶️ Running the Application
```bash
npm start
# or
yarn start
```
### 💡 Usage Guide

1.Set Mnemonic Seed
On first use, enter or generate a mnemonic seed via the UI (handled by SecretSeed component). It will be saved in your local storage.

2.Select Wallet Type
Switch between Ethereum and Solana using the wallet type selector (handled by WalletContext).

3.View Wallet
Once selected, a wallet is automatically generated and displayed based on your mnemonic.

4.Toggle Private Key Visibility
Click the eye icon to show or hide the private key.

5.Delete Wallet
Click the trash icon to remove the displayed wallet from view and local storage.

### 📂 Project Structure
```php
orbion-wallet/
├── public/
├── src/
│   ├── App.js                 # Main App component
│   ├── components/
│   │   ├── SecretSeed.jsx     # Mnemonic seed input/management
│   │   └── Wal.jsx            # Wallet display component
│   ├── context/
│   │   └── WalletContext.js   # Wallet type management with React Context
│   ├── utils/
│   │   ├── GenEthWallet.js    # Ethereum wallet generator
│   │   └── GenSolWallet.js    # Solana wallet generator
│   └── index.js               # App entry point
├── package.json
├── README.md
└── ...
```
