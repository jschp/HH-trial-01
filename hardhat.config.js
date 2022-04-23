require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks: {
    // for mainnet. Deployed contract: 0x8A366410E896fD5E46ADD02Ac5758682021D4124
    'optimism': {
      url: "https://mainnet.optimism.io",
      accounts: [process.env.PRIVATE_KEY]
    },
    // for testnet. Deployed contract: 0xf4f25078f0Ab1E6BEeAA7f074F0a6F93b91972cA
    // 'optimism-kovan': {
    //   url: "https://kovan.optimism.io",
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    // for the local dev environment
    // 'optimism-local': {
    //   url: "http://localhost:8545",
    //   accounts: [privateKey1, privateKey2]
    // },
  },
}
