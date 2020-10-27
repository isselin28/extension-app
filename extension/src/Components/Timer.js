import React from "react";
import styled from "styled-components/macro";
import TimerIcon from "@material-ui/icons/Timer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clock = styled.div`
  font-size: 12px;
  padding: 4px;
`;

const StyledTimerIcon = styled(TimerIcon)`
  color: salmon;
`;

function Timer() {
  return (
    <Wrapper>
      <StyledTimerIcon />
      <Clock>1:15:21</Clock>
    </Wrapper>
  );
}

export default Timer;
