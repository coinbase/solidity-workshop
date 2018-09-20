# Solidity Workshop

> _Note_ This code is for educational purposes only.

This repo contains the code for a basic Ethereum Dapp written in Solidity
and React. The app is a remake of the wildly popular CryptoKitties, called
CryptoKats.

## Getting Started

Before you begin, make sure you have [Node](https://nodejs.org) installed on
your system. You'll also need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
to download this boilerplate.

Once you have these installed, clone this repo using the following command:

```
$ git clone https://github.com/coinbase/solidity-workshop
$ cd solidity-workshop
```

Next, install the dependencies using npm.

```
$ npm install
```

To compile the smart contracts, use truffle.

```
$ npm run compile
```

To get a test blockchain up and running open a new window and execute
the blockchain command.

```
$ npm run blockchain
```

Now back in the first window, we can deploy our smart contracts onto the test
network.

```
$ npm run migrate
```

Now we just need to hook up the frontend, start the server with the following
command

```
$ npm run start
```

All done! Open up your browser to http://localhost:3000 to check it out!

## License

MIT
