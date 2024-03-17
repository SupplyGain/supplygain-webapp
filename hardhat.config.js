const { VECHAIN_URL_SOLO } = require("@vechain/hardhat-vechain")
require("@vechain/hardhat-ethers")

module.exports = {
  solidity: {
    version: "0.8.20",
  },
  networks: {
    vechain: {
      url: VECHAIN_URL_SOLO,
    },
  },
  paths: {
    artifacts: "src/artifacts",
  },
}
