pragma solidity >=0.5.0;

interface IValueswapV1Factory {
    function getExchange(address) external view returns (address);
}
