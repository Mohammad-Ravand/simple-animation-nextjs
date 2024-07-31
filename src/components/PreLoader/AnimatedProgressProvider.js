import React, { useState, useEffect, useRef } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (repeat) {
      intervalRef.current = window.setInterval(() => {
        setIsAnimated((prev) => !prev);
      }, duration * 1000);
    } else {
      setIsAnimated(true);
    }

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [repeat, duration]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
