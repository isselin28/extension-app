import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import "./App.css";
import SessionBar from "./Components/SessionBar";

const Container = styled.div`
  width: 350px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`;

const DefaultWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

const DynamicWrapper = styled(DefaultWrapper)`
  border: solid 0.5px #a7a7a7;
  border-radius: 4px;
  margin: 4px 0;
`;

const TextWrapper = styled(DefaultWrapper)`
  font-size: 12px;
  border: solid 0.5px #a7a7a7;
  border-radius: 4px;
  margin: 4px 0;
`;

const DefaultButton = styled.button`
  display: flex;
  height: 32px;
  width: 300px;
  justify-content: center;
  align-items: center;

  border: solid 0.5px #ee6352;
  background-color: #ee6352;
  color: white;
  border-radius: 4px;
  margin: 4px 0;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  border: solid 0.5px #ee6352;
  border-radius: 50%;
  background-color: #ee6352;
  color: white;
  margin: 4px 0;
`;

function App() {
  const [sessionTime, setSessionTime] = useState(25);
  const [timeLeft, setTimeLeft] = useState(0);
  const [onSession, setOnSession] = useState(false);

  const handleClickMinute = (value) => {
    setSessionTime(value);
  };

  const handleStartSession = () => {
    const seconds = Number(sessionTime) * 60;
    setTimeLeft(seconds);
    setOnSession(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sessionTime > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    if (timeLeft === 0) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, sessionTime]);

  const handleStopSession = () => {
    setTimeLeft(0);
    setOnSession(false);
  };

  return (
    <Container>
      <TextWrapper>How many minutes your session will take?</TextWrapper>
      <SessionBar onClick={handleClickMinute} />
      <Timer>{onSession ? timeLeft : sessionTime}</Timer>
      {!onSession && (
        <DefaultButton onClick={handleStartSession}>
          Start Pomodoro
        </DefaultButton>
      )}
      {onSession && (
        <DefaultButton onClick={handleStopSession}>Stop Pomodoro</DefaultButton>
      )}
    </Container>
  );
}

export default App;
