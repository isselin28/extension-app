import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  height: 32px;
  width: 300px;
  align-items: center;
`;

function InfoField() {
  return <Wrapper>How many minutes your session will take?</Wrapper>;
}

export default InfoField;
