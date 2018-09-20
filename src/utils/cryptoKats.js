import Web3 from "web3";
import contract from "truffle-contract";

import contractAbi from "../../build/contracts/CryptoKats.json";

let web3;
let deployed;

export const cats = new Array(30).fill(0).map((generation, id) => ({
  id,
  generation,
  color: `#${((id + 3) * 78).toString(16)}`
}));

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
    var MyContract = contract({
      abi: contractAbi
    });
    MyContract.deployed().then(instance => {
      deployed = instance;
    });
  } catch (error) {
    // User denied account access...
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}
// Non-dapp browsers...
else {
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
}
