import * as React from "react";
import "./FastMarquee.scss";

const Color = require("color");

interface IFastMarqueeProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  play?: boolean;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction: "left" | "right"; // Possibly add "up" and "down" in the future
  speed?: number; // Speed in pixels/second
  loop?: boolean; // Doesn't work yet
  delay?: number;
  height?: number | string; // Height and width might be redundant because style covers them
  width?: number | string;
  // carouselRepeat?: number;
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: number; // Number or string in the future
  // swipeable?: boolean;
}

const FastMarquee: React.FC<IFastMarqueeProps> = ({
  style = {},
  // className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 50,
  // loop = true, // Todo: Get width of marquee, repeat marquee until equal or greather than width of marquee-container
  delay = 0,
  height = "100%",
  width = "100%",
  // carouselRepeat = 2,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  // swipeable = false,
  children,
}) => {
  const color = Color(gradientColor);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [marqueeWidth, setMarqueeWidth] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Make sure refs are not null
    if (marqueeRef.current && containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
      setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
    }
    getDuration();
  });

  const getDuration = () => {
    setDuration(marqueeWidth / speed);
  };

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        ["--height" as string]:
          typeof height === "string" ? height : `${height}px`,
        ["--width" as string]: typeof width === "string" ? width : `${width}px`,
        ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
        ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
      }}
      className="marquee-container"
    >
      {gradient && (
        <div
          style={{
            ["--gradient-color" as string]: `${color}, ${color.fade(1)}`,
            ["--gradient-width" as string]: `${gradientWidth}px`,
          }}
          className="overlay"
        />
      )}
      <div
        ref={marqueeRef}
        style={{
          ["--play" as string]: play ? "running" : "paused",
          ["--direction" as string]:
            direction === "left"
              ? "calc(-100% - var(--margin-right))"
              : "calc(100% + var(--margin-right))",
          ["--duration" as string]: `${duration}s`,
          ["--delay" as string]: `${delay}s`,
          ["--margin-right" as string]: `${
            marqueeWidth < containerWidth ? containerWidth - marqueeWidth : 0
          }px`,
        }}
        className="marquee"
      >
        {children}
      </div>
      <div
        // ref={marqueeRef}
        style={{
          ["--play" as string]: play ? "running" : "paused",
          ["--direction" as string]:
            direction === "left"
              ? "calc(-100% - var(--margin-right))"
              : "calc(100% + var(--margin-right))",
          ["--duration" as string]: `${duration}s`,
          ["--delay" as string]: `${delay}s`,
          ["--margin-right" as string]: `${
            marqueeWidth < containerWidth ? containerWidth - marqueeWidth : 0
          }px`,
        }}
        className="marquee"
      >
        {children}
      </div>
    </div>
  );
};

export default FastMarquee;
