Orbion Wallet
Orbion Wallet is a simple, client-side cryptocurrency wallet generator and viewer built with React. It allows users to generate and display both Ethereum (ETH) and Solana (SOL) wallets deterministically from a mnemonic seed. Wallet data (public and private keys) is persisted in the browser's local storage for convenience.

Disclaimer: This project is intended for educational and demonstration purposes only. It stores sensitive information (mnemonic seeds and private keys) directly in your browser's local storage, which is NOT secure for real funds. DO NOT use this application to manage real cryptocurrency assets.

✨ Features
Multi-Chain Support: Generate wallets for both Ethereum (ETH) and Solana (SOL) networks.

Deterministic Generation: Wallets are derived deterministically from a single mnemonic seed.

Mnemonic Seed Management: Input and store your mnemonic seed in local storage.

Key Display: View the public address and private key for generated wallets.

Private Key Toggle: Hide or show private keys for privacy.

Local Storage Persistence: Mnemonic seed and the last generated wallet are saved in your browser's local storage for convenience across sessions.

Basic Wallet Deletion: Remove a displayed wallet from the interface and local storage.

🚀 Technologies Used
React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Ethers.js: (Implied by Wallet import) A complete, compact, and high-performance library for Ethereum blockchain interaction.

Solana Web3.js: (Implied by GenSolWallet) A JavaScript library for interacting with the Solana blockchain.

🛠️ Getting Started
Follow these steps to get Orbion Wallet up and running on your local machine.

Prerequisites
Make sure you have the following installed:

Node.js (LTS version recommended)

npm or Yarn

Installation
Clone the repository:

git clone [https://github.com/DASH544/orbion-wallet.git](https://github.com/DASH544/orbion-wallet.git)
cd orbion-wallet

Install dependencies:

npm install
# or
yarn install

Running the Application
Start the development server:

npm start
# or
yarn start

This will open the application in your browser at http://localhost:3000 (or another available port).

💡 Usage
Set Mnemonic Seed: Upon first load, you'll likely need to input or generate a mnemonic seed. This is handled by the SecretSeed component. Ensure your mnemonic is correctly saved in your browser's local storage.

Select Wallet Type: Use the provided controls (likely part of WalletContext) to switch between Ethereum and Solana wallet generation.

View Wallet: The application will automatically generate and display a wallet based on your mnemonic and selected type.

Toggle Private Key: Click the eye icon next to the private key field to reveal or hide the private key.

Delete Wallet: Click the trash can icon to remove the currently displayed wallet from the interface and local storage.

📂 Project Structure
orbion-wallet/
├── public/
├── src/
│   ├── App.js             # Main application component
│   ├── components/
│   │   ├── SecretSeed.jsx # Component for mnemonic seed input/management
│   │   └── Wal.jsx        # Component to display individual wallet details
│   ├── context/
│   │   └── WalletContext.js # React Context for managing wallet type
│   ├── utils/
│   │   ├── GenEthWallet.js  # Utility for Ethereum wallet generation
│   │   └── GenSolWallet.js  # Utility for Solana wallet generation
│   └── index.js           # Entry point for the React application
├── package.json
├── README.md              # This file
└── ...

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Commit your changes (git commit -m 'feat: Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Open a Pull Request.

📄 License
This project is open-source and available under the MIT License.
