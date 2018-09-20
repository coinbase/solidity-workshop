var CryptoKats = artifacts.require("./CryptoKats.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoKats);
};
