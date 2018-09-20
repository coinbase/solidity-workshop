import React from "react";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import Cat from "./components/Cat";

import { cats } from "./utils/cryptoKats";

const App = () => (
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
          <Cat {...cat} />
        ))}
      </CatWrapper>
    </main>
  </div>
);

const CatWrapper = styled.div`
  display: flex;
  margin: -8px;
  flex-wrap: wrap;
`;

export default App;
