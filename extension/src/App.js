import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import SessionBar from "./Components/SessionBar";
import Button from "./Components/Button";

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

const TextWrapper = styled(DefaultWrapper)`
  font-size: 12px;
  border: solid 0.5px #a7a7a7;
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
  const [countSession, setCountSession] = useState(0);
  const [countTotalTime, setCountTotalTime] = useState(0);

  let formattedTimeLeft;

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
      return;
    }, 1000);

    if (timeLeft === 0) {
      clearTimeout(timer);

      if (onSession) {
        setOnSession(false);
        handleCountSessions(sessionTime);
      }
      return;
    }

    return () => clearTimeout(timer);
  }, [timeLeft, sessionTime, onSession]);

  const handleStopSession = () => {
    setTimeLeft(0);
    setOnSession(false);
    handleCountSessions(sessionTime - timeLeft / 60);
  };

  let hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor(timeLeft / 60 - hours * 60);
  let seconds = Math.floor(timeLeft - minutes * 60 - hours * 3600);

  let displayHours = hours < 10 ? `0${hours}` : hours;
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  formattedTimeLeft = `${displayHours}:${displayMinutes}:${displaySeconds}`;

  const handleCountSessions = (timeWorkedOut) => {
    setCountTotalTime(countTotalTime + timeWorkedOut);
    setCountSession(countSession + 1);
  };

  return (
    <>
      <Container>
        <TextWrapper>How many minutes your session will take?</TextWrapper>
        <SessionBar onClick={handleClickMinute} disabled={onSession} />
        <Timer>{onSession ? formattedTimeLeft : sessionTime}</Timer>
        <div>
          {!onSession && (
            <Button onClick={handleStartSession} width={300}>
              Start Pomodoro
            </Button>
          )}
          {onSession && (
            <Button onClick={handleStopSession} width={300}>
              Stop Pomodoro
            </Button>
          )}
          <TextWrapper>
            Today you have done: {countSession} sessions,{" "}
            {countTotalTime.toFixed(1)} minutes
          </TextWrapper>
        </div>
      </Container>
    </>
  );
}

export default App;
