const HDWalletProvider = require('@truffle/hdwallet-provider');
const { mnemonic, apiKey } = require('./secrets.json');



module.exports = {
  contracts_directory: './contracts',
  contracts_build_directory: './build',
  compilers: {
    solc: {
      version: './node_modules/solc',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        },
        evmVersion: 'istanbul',
        outputType: 'all',
        outputSelection: {
          '*': {
            '*': [
              'evm.bytecode.object',
              'evm.deployedBytecode.object',
              'abi',
              'evm.bytecode.sourceMap',
              'evm.deployedBytecode.sourceMap',
              'metadata'
            ],
            '': ['ast']
          }
        },
      }
    }
  },

  mocha: {
    timeout: 12000,
    useColors: true,
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: apiKey.etherscan,
  },
  etherscan: {
    apiKey: apiKey.etherscan,
  },

  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
      production: false,
    },

    mainnet: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-mainnet.alchemyapi.io/v2/${apiKey.mainnet}`
      ),
      network_id: 1,
      gas: 5500000,
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      production: true,
    },

    ropsten: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-ropsten.alchemyapi.io/v2/${apiKey.ropsten}`
      ),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      production: true,
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${apiKey.rinkeby}`
      ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      production: true,
    },

    goerli: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-goerli.alchemyapi.io/v2/${apiKey.goerli}`
      ),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      production: true,
    },

    kovan: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-kovan.alchemyapi.io/v2/${apiKey.kovan}`
      ),
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      production: true,
    },
  },
};
