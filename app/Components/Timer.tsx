import { AlarmClock, Clock, PowerOff, TimerIcon, WifiOff } from "lucide-react";
import React, { useEffect, useState } from "react";

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

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

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  return (
    <div className="">
      {showTimer ? (
        <div className="flex gap-2 mt-2 items-center h-8 rounded-lg bg-red-700 p-2 justify-center">
          <div>{formatTime(time)}</div>|
          <TimerIcon
            className="hover:scale-110"
            onClick={() => {
              setShowTimer(false);
              setTime(0);
            }}
          />
        </div>
      ) : (
        <div
          className="bg-neutral-700 p-2 rounded-xl cursor-pointer"
          onClick={() => setShowTimer(true)}
        >
          <AlarmClock height={18} />
        </div>
      )}
    </div>
  );
};
export default Timer;
