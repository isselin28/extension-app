import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Minutes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 12px;

  margin: 4px;
  border-radius: 50%;
  background-color: #ee6532;
  border: 1px solid #ee6352;
  color: white;
`;

function SessionBar(props) {
  const { onClick } = props;

  const sessionsArray = [5, 10, 15, 20, 25];
  const sessionsArray2 = [30, 40, 50, 60, 90];
  return (
    <>
      <Wrapper>
        {sessionsArray.map((session) => {
          return <Minutes onClick={() => onClick(session)}>{session}</Minutes>;
        })}
      </Wrapper>
      <Wrapper>
        {sessionsArray2.map((session) => {
          return <Minutes onClick={() => onClick(session)}>{session}</Minutes>;
        })}
      </Wrapper>
    </>
  );
}

export default SessionBar;
