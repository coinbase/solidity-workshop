import React from "react";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import Cat from "./components/Cat";

class App extends React.Component {
  constructor() {
    super();

    const CryptoKats = window.web3.eth.contract([
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
          {
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "newOwner",
            type: "address"
          }
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "owner",
            type: "address"
          },
          {
            indexed: false,
            name: "kittyId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "matronId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "sireId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "genes",
            type: "uint256"
          }
        ],
        name: "Birth",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "from",
            type: "address"
          },
          {
            indexed: false,
            name: "to",
            type: "address"
          },
          {
            indexed: false,
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        constant: true,
        inputs: [
          {
            name: "owner",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "ownerOf",
        outputs: [
          {
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            name: "katId",
            type: "uint256"
          }
        ],
        name: "getKat",
        outputs: [
          {
            name: "color",
            type: "uint32"
          },
          {
            name: "generation",
            type: "uint16"
          },
          {
            name: "motherId",
            type: "uint256"
          },
          {
            name: "fatherId",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "to",
            type: "address"
          },
          {
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "color",
            type: "uint32"
          }
        ],
        name: "birth",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "katId",
            type: "uint256"
          }
        ],
        name: "purchase",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      }
    ]);

    this.state = {
      cryptoKats: CryptoKats.at("0xddbff0c124f8e896ad9a4e1ab6f426d52668d761"),
      loading: true,
      cats: []
    };
  }

  componentDidMount = async () => {
    const { cryptoKats } = this.state;
    for (let i = 0; i < 30; i++)
      cryptoKats.getKat(i, (err, cat) =>
        cryptoKats.ownerOf(i, (err, owner) =>
          this.setState(state => ({
            cats: [
              ...state.cats,
              {
                color: `#${cat[0].toString(16).padStart(6, "0")}`,
                id: i,
                generation: cat[1].toString(),
                owner
              }
            ]
          }))
        )
      );
  };

  handlePurchase = id => {
    this.state.cryptoKats.purchase(id, (err, result) => {
      alert("success!");
    });
  };

  render() {
    const { cats } = this.state;
    return (
      <div>
        <HeaderBar>
          <h1>
            CryptoKats{" "}
            <span role="img" aria-label="Smiling emoji">
              😺
            </span>
          </h1>
        </HeaderBar>
        <main>
          <CatWrapper>
            {cats.map(cat => (
              <Cat {...cat} onClick={this.handlePurchase} />
            ))}
          </CatWrapper>
        </main>
      </div>
    );
  }
}

const CatWrapper = styled.div`
  display: flex;
  margin: -8px;
  flex-wrap: wrap;
`;

export default App;
