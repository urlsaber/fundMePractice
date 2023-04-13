const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding Contracting...")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("5"),
    })
    await transactionResponse.wait(1)
    console.log("funded")
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
