import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import SessionBar from "./Components/SessionBar";
import Count from "./Components/Count";
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

const TextWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 300px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border: solid 0.5px #999999;
  color: #3b3b3b;
  border-radius: 4px;
  margin: 4px 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 300px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const DeepWorkButton = styled(Button).attrs({
  primary: true,
})`
  flex: 1;
  width: 100%;
  margin: 4px;
`;

const BreakButton = styled(Button)`
  flex: 1;
  width: 100%;
  background-color: #3f97b9;

  &:hover,
  &:active {
    background-color: #09688c;
    cursor: pointer;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;

  border-radius: 50%;
  background-color: ${(props) => (props.primary ? "#ee6352" : "#3f97b9")};
  color: white;
  margin: 4px 0;
  font-size: 20px;
`;

const PartyImage = styled.img.attrs({
  src: "https://img.icons8.com/emoji/48/000000/cupcake-emoji.png",
})`
  height: 20px;
  width: 20px;
  padding-left: 2px;
`;

function App() {
  const [sessionTime, setSessionTime] = useState(25);
  const [timeLeft, setTimeLeft] = useState(0);
  const [onSession, setOnSession] = useState(false);
  const [countSession, setCountSession] = useState(0);
  const [countTotalTime, setCountTotalTime] = useState(0);
  const [isDeepWorkSession, setIsDeepWorkSession] = useState(true);

  let formattedTimeLeft;

  const handleClickMinute = (value) => {
    setSessionTime(value);
  };

  const handleStartSession = () => {
    const seconds = Number(sessionTime) * 60;
    setTimeLeft(seconds);
    setOnSession(true);

    chrome.runtime.sendMessage({ cmd: "START_TIMER", when: time });
    startTimer(time);

    // chrome.browserAction.onClicked.addListener(function () {
    //   alert("Hello, World!");
    // });
  };

  useEffect(() => {
    var opt = {
      type: "list",
      title: "keep burning",
      message: "Primary message to display",
      priority: 1,
      items: [{ title: "", message: "" }],
      iconUrl: "./logo.svg",
    };

    chrome.runtime.sendMessage({ cmd: "GET_TIME" }, (response) => {
      if (response.time) {
        const time = new Date(response.time);
        startTimer(time);
      }
    });

    const timer = setTimeout(() => {
      if (sessionTime > 0) {
        setTimeLeft(timeLeft - 1);
      }
      return;
    }, 1000);

    if (timeLeft === 0) {
      clearTimeout(timer);

      if (onSession) {
        window.alert("You have done a deep work session");
        setOnSession(false);
        if (isDeepWorkSession) {
          handleCountSessions(sessionTime);
        }
      }
      // chrome.notifications.create("id", opt, function () {
      //   console.log("hello");
      // });
      return;
    }

    return () => clearTimeout(timer);
  }, [timeLeft, sessionTime, onSession]);

  const handleStopSession = () => {
    setTimeLeft(0);
    setOnSession(false);
    if (isDeepWorkSession) {
      handleCountSessions(sessionTime - timeLeft / 60);
    }
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
        <FlexWrapper>
          <DeepWorkButton primary onClick={() => setIsDeepWorkSession(true)}>
            Deep Work
          </DeepWorkButton>
          <BreakButton onClick={() => setIsDeepWorkSession(false)}>
            Break
          </BreakButton>
        </FlexWrapper>
        <SessionBar
          primary={isDeepWorkSession}
          onClick={handleClickMinute}
          disabled={onSession}
        />
        <Timer primary={isDeepWorkSession}>
          {onSession ? formattedTimeLeft : sessionTime}
        </Timer>
        <div>
          {!onSession && (
            <Button
              primary={isDeepWorkSession}
              onClick={handleStartSession}
              width={300}
            >
              Start Pomodoro
            </Button>
          )}
          {onSession && (
            <Button
              primary={isDeepWorkSession}
              onClick={handleStopSession}
              width={300}
            >
              Stop Pomodoro
            </Button>
          )}
          {isDeepWorkSession ? (
            <TextWrapper>
              Today you have done: {countSession} sessions,{" "}
              {countTotalTime.toFixed(1)} minutes
            </TextWrapper>
          ) : (
            <TextWrapper>
              Enjoy your break!
              <PartyImage />
            </TextWrapper>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
