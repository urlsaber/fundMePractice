const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("withdraw done")
    const deployerBalance = fundMe.provider.getBalance(deployer)
    const fundMeBalance = fundMe.provider.getBalance(fundMe.address)
    console.log(`deployer balance:${(await deployerBalance).toString()}`)
    console.log(`fundMe balance: ${(await fundMeBalance).toString()}`)
}

main().then(() =>
    process.exit(0).catch((error) => {
        console.error(error)
        process.exit(1)
    })
)
