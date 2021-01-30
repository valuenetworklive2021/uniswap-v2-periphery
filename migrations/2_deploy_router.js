const V2Router02 = artifacts.require('ValueswapV2Router02.sol');
const WETH9 = artifacts.require('WETH9.sol');



module.exports = async function (deployer, network, accounts) {
  const FACTORY_ADDRESS = '0xa8d200eaB94c77a98077c8e2631B2F2D00F2c1E7';
  let WETH_ADDRESS;
  switch (network) {
    case 'mainnet':
      WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
      break;
    case 'ropsten':
    case 'rinkeby':
      WETH_ADDRESS = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
      break;
    case 'goerli':
      WETH_ADDRESS = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
      break;
    case 'goerli':
      WETH_ADDRESS = '0xd0A1E359811322d97991E03f863a0C30C2cF029C';
      break;
    default:
      await deployer.deploy(WETH9);
      WETH_ADDRESS = WETH9.address;
      break;
  }

  const args = [FACTORY_ADDRESS, WETH_ADDRESS];
  await deployer.deploy(V2Router02, ...args);
};
