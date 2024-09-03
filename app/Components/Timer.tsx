import {
  AlarmClock,
  PauseIcon,
  PlayIcon,
  PauseCircle,
  StopCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false); // Added for pause state

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer && !isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer, isPaused]);

  const handleStartPause = () => {
    if (showTimer && !isPaused) {
      // Pause the timer
      setIsPaused(true);
    } else if (isPaused) {
      // Resume the timer
      setIsPaused(false);
    } else {
      // Start the timer
      setShowTimer(true);
    }
  };

  const handleStop = () => {
    // Stop the timer and reset everything
    setShowTimer(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="">
      {showTimer ? (
        <div className="flex gap-2 mt-2 items-center h-8 rounded-lg bg-red-700 p-2 justify-center">
          {isPaused ? (
            <PlayIcon
              className="hover:scale-110 cursor-pointer"
              onClick={handleStartPause}
            />
          ) : (
            <PauseIcon
              className="hover:scale-110 cursor-pointer"
              onClick={handleStartPause}
            />
          )}
          |<div>{formatTime(time)}</div>|
          <StopCircle
            className="hover:scale-110 cursor-pointer"
            onClick={handleStop}
          />
        </div>
      ) : (
        <div
          className="bg-neutral-700 p-2 rounded-xl cursor-pointer"
          onClick={handleStartPause}
        >
          <AlarmClock height={18} />
        </div>
      )}
    </div>
  );
};

export default Timer;
