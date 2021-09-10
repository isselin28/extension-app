/*global chrome*/
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #ee6352;
  height: 28px;
  min-width: 40px;
  font-size: 12px;

  padding: 1px 0;
  border-radius: 4px;
`;

const DisplayCount = styled.div`
  display: flex;
  min-width: 40px;
  align-items: center;
  justify-content: center;
`;

const CountButton = styled(Button)``;

function Count() {
  return (
    <Container>
      <CountButton width={30}>-</CountButton>
      <DisplayCount>0</DisplayCount>
      <CountButton width={30}>+</CountButton>
    </Container>
  );
}

export default Count;
