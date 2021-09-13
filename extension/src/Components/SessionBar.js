import React from "react";
import styled from "styled-components/macro";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 40px;
`;

const Minutes = styled(Button)`
  width: 36px;
  height: 36px;
  font-size: 12px;
  margin: 4px;
  border-radius: 50%;
`;

function SessionBar(props) {
  const { onClick, disabled, primary } = props;

  const sessionsArray = [5, 10, 15, 20, 25];
  const sessionsArray2 = [30, 40, 50, 60, 90];
  return (
    <>
      <Wrapper>
        {sessionsArray.map((session) => {
          return (
            <Minutes
              primary={primary}
              onClick={() => onClick(session)}
              disabled={disabled}
            >
              {session}
            </Minutes>
          );
        })}
        {sessionsArray2.map((session) => {
          return (
            <Minutes
              primary={primary}
              onClick={() => onClick(session)}
              disabled={disabled}
            >
              {session}
            </Minutes>
          );
        })}
      </Wrapper>
    </>
  );
}

export default SessionBar;
