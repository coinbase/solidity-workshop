import React from "react";
import styled from "styled-components";

const Cat = ({ color, id, generation, onClick }) => (
  <Card onClick={() => onClick(id)}>
    <svg version="1" width="120" height="120" viewBox="0 0 100 100">
      <g fill={color}>
        <path d="M28.9 3.7c-2.5 4-2.4 3.9-15.3 6.2C4.2 11.6 0 16.8 0 26.8 0 34.4 2.7 38.6 9.8 42l5.2 2.5V69c0 27.1.4 28.8 5.8 30.4 2.7.7 3.8.6 6-1.1l2.7-2 .3-16.9c.3-19.4.4-19.5 9-22C45.2 55.5 51.2 56 57 59l4 2v17.1c0 16.9 0 17 2.6 19.6 2 2 3.1 2.4 5.7 1.9 5.8-1.2 6.2-2.1 6.7-20.1.7-21.9 2.3-21.8 3 .1l.5 16.7 2.7 2c2.2 1.7 3.3 1.8 6 1.1 5.4-1.6 5.8-3.3 5.8-30.7 0-13.6-.2-24.7-.4-24.7s-2.3.7-4.6 1.5c-8.7 3.1-17.4 1-23.7-5.6C61.7 36.1 60 32.2 60 28c0-3.2-.8-3.5-11.5-4.5-7.5-.7-14.7.8-27.2 5.6-6.8 2.6-8.9 2.2-10.4-2-1.4-3.6 2.8-7.1 8.4-7.1C30.2 20 40 12.8 40 4.7 40 1.5 38.2 0 34.5 0c-2.6 0-3.6.7-5.6 3.7z" />
        <path d="M64.3 5.7c-2.1.7-1.8 24.5.4 29 3.1 6.7 12.7 10.6 21.8 8.9 4.8-.9 11.2-6.8 12.5-11.4.5-2.1 1-8.5 1-14.3C100 9.5 99.7 7 98.5 6c-1.4-1.1-2.2-.7-5.8 2.7-3.8 3.7-4.5 3.9-7.7 3.2-1.9-.4-5.2-.4-7.2 0-3.3.8-4 .5-6.5-2.1-3.3-3.5-5.3-4.7-7-4.1z" />
      </g>
    </svg>
    <Description>
      <Name>CryptoKat #{id}</Name>
      <Generation>Generation {generation}</Generation>
    </Description>
  </Card>
);

const Card = styled.div`
  cursor: pointer;
  padding: 16px;
  margin: 8px;
  width: fit-content;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Generation = styled.span`
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.5);
`;

export default Cat;
