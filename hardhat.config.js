require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks: {
    // for mainnet
    // 'optimism': {
    //   url: "https://mainnet.optimism.io",
    //   accounts: [privateKey1, privateKey2]
    // },
    // for testnet
    'optimism-kovan': {
      url: "https://kovan.optimism.io",
      accounts: [process.env.KOVAN_PRIV_KEY]
    },
    // for the local dev environment
    // 'optimism-local': {
    //   url: "http://localhost:8545",
    //   accounts: [privateKey1, privateKey2]
    // },
  },
}
