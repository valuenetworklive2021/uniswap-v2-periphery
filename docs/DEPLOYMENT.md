# Deployment

ropsten
  - ValueswapV2Router02 0x6b90Fd39F68BE15eeB03792e23edD0Da70b94FAE
    - old ?


## Install Dependencies
```bash
yarn
```


## Compile Contracts
```bash
yarn compile
```


## Run Tests
```bash
yarn test
```


## Deployment
```bash
yarn deploy <network>
yarn verify <network> ValueswapV2Router02
```


### Deployment for Ropsten
```bash
yarn deploy ropsten
yarn verify ropsten ValueswapV2Router02
```


### Deployment for Mainnetwork
```bash
yarn deploy mainnet
yarn verify mainnet ValueswapV2Router02
```


### ROUTER_ADDRESS
Replace in `ROUTER_ADDRESS`
 - for `valueswap-interface/src/constants/index.ts`.
