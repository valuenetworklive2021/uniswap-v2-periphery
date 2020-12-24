const fs = require('fs');
const hre = require('hardhat');



async function main() {
  checkDir();
  let WETH;
  const { instance } = await deployWETH9();
  WETH = instance.address;
  if (hre.network.name === 'mainnet')
    WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

  const ValueswapV2Factory = '?!?'; //?!?
  const { name, arguments, instance, factory } = await deployValueswapV2Router02(
    ValueswapV2Factory,
    WETH
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


function checkDir() {
  const isExists = fs.existsSync('./cache/deployed');
  if (!isExists)
    fs.mkdirSync('./cache/deployed', { recursive: true });
}


async function deployWETH9() {
  const name = 'WETH9';
  const arguments = [];
  console.log('Deploying contract "%s"!', name);

  const factory = await hre.ethers.getContractFactory(name);
  const instance = await factory.deploy(...arguments);
  await instance.deployed();

  updateDeployedContractInfo(name, instance, arguments);

  return { name, arguments, instance, factory };
}


async function deployValueswapV2Router02(ValueswapV2Factory = '?!?', WETH = '?!?') {
  const name = 'ValueswapV2Router02';
  const arguments = [ValueswapV2Factory, WETH];
  console.log('Deploying contract "%s"!', name);

  const factory = await hre.ethers.getContractFactory(name);
  const instance = await factory.deploy(...arguments);
  await instance.deployed();

  updateDeployedContractInfo(name, instance, arguments);

  return { name, arguments, instance, factory };
}


function updateDeployedContractInfo(name, instance, arguments = []) {
  const newInfo = {
    [instance.provider.network.name]: {
      name: name,
      address: instance.address,
      signer: instance.signer.address,
      arguments: arguments,
    }
  };
  console.log(newInfo);

  const fileName = `./cache/deployed/${name}.json`;
  const isExists = fs.existsSync(fileName);
  if (!isExists) {
    fs.writeFileSync(fileName, JSON.stringify({}, null, 2));
  }

  const oldInfo = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8' }));
  const info = Object.assign({}, oldInfo, newInfo);
  fs.writeFileSync(fileName, JSON.stringify(info, null, 2));
}
