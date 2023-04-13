const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694aa1769357215de4fac081bf1f309adc325306",
    },
}
const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 2000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}