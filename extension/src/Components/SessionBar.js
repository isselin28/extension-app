import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Minutes = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  font-size: 12px;

  margin: 4px;
  border-radius: 50%;
  background-color: #ee6532;
  border: none;
  color: white;

  &:hover,
  &:active {
    background-color: #cc2a14;
    cursor: pointer;
  }
`;

function SessionBar(props) {
  const { onClick, disabled } = props;

  const sessionsArray = [0.1, 10, 15, 20, 25];
  const sessionsArray2 = [30, 40, 50, 60, 90];
  return (
    <>
      <Wrapper>
        {sessionsArray.map((session) => {
          return (
            <Minutes onClick={() => onClick(session)} disabled={disabled}>
              {session}
            </Minutes>
          );
        })}
      </Wrapper>
      <Wrapper>
        {sessionsArray2.map((session) => {
          return (
            <Minutes onClick={() => onClick(session)} disabled={disabled}>
              {session}
            </Minutes>
          );
        })}
      </Wrapper>
    </>
  );
}

export default SessionBar;
