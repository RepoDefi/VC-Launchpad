const reposwap = artifacts.require('reposwapFundsContract');

// test case to check the smartcontract deployed correctly or not.
contract("reposwapFund", async accounts => {
  it("is deployed correctly?", async () => {
    const reposwapInstance = await reposwap.deployed();
    //console.log(reposwapInstance.address);
    assert(reposwapInstance.address !== '');
  });
});

// test case written to start the token sale
contract('reposwapFund', async accounts => {
  it('is token sale is started?', async () => {
    const reposwapInstance = await reposwap.deployed();
    const StartTime = await reposwapInstance.saleStartTime();
    assert(Date.now() > StartTime);
  });
});

//Add and check the address in Whitelist tier One
contract("reposwapFund", async accounts => {
  it("Add and check the address in Whitelist tier One", async () => {
    const reposwapInstance = await reposwap.deployed();
    const accounts = await web3.eth.getAccounts();
    await reposwapInstance.addWhitelistOne(accounts[0]);
    const result = await reposwapInstance.getWhitelistOne(accounts[0]);
    assert(result != false);

  });
});

//Add and check the address in Whitelist tier two
contract("reposwapFund", async accounts => {
  it("Add and check the address in Whitelist tier two", async () => {
    const reposwapInstance = await reposwap.deployed();
    const accounts = await web3.eth.getAccounts();
    await reposwapInstance.addWhitelistOne(accounts[1]);
    const result = await reposwapInstance.getWhitelistOne(accounts[1]);
    assert(result != false);

  });
});

//Add and check the address in Whitelist tier three
contract("reposwapFund", async accounts => {
  it("Add and check the address in Whitelist tier three", async () => {
    const reposwapInstance = await reposwap.deployed();
    const accounts = await web3.eth.getAccounts();
    await reposwapInstance.addWhitelistOne(accounts[2]);
    const result = await reposwapInstance.getWhitelistOne(accounts[2]);
    assert(result != false);

  });
});

// To check the whitelist for tier one
contract('reposwapFund', async accounts => {
  it("Pay One BNB to Check In WhiteListOne, is first tier payment working correctly?", async () => {
    const instance = await reposwap.deployed();

    const value = 1;
    const accounts = await web3.eth.getAccounts();

    await instance.addWhitelistOne(accounts[0]);
    let result = await web3.eth.sendTransaction({ from: accounts[0], to: instance.address, value: value });
    assert(result != false);
  })
})

// To check the whitelist for tier two
contract('reposwapFund', async accounts => {
  it("Pay Two BNB to Check In WhiteListTwo, is second tier payment working correctly?", async () => {
    const instance = await reposwap.deployed();

    const value = 2;
    const accounts = await web3.eth.getAccounts();

    await instance.addWhitelistTwo(accounts[0]);
    let result = await web3.eth.sendTransaction({ from: accounts[0], to: instance.address, value: value });
    assert(result != false);
  })
})

// To check the whitelist for tier three
contract('reposwapFund', async accounts => {
  it("Pay Four BNB to Check In WhiteListThree, is third tier payment working correctly?", async () => {
    const instance = await reposwap.deployed();

    const value = 4;
    const accounts = await web3.eth.getAccounts();

    await instance.addWhitelistThree(accounts[0]);
    let result = await web3.eth.sendTransaction({ from: accounts[0], to: instance.address, value: value });
    assert(result != false);
  })
})
