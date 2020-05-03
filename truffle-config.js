require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'pet picture naive easy primary crucial awful vote myth act thumb meat';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://kovan.infura.io/v3/1c28dfc5a0b7401dbb0e5a0b860035e8")
      },
      network_id: 42,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
