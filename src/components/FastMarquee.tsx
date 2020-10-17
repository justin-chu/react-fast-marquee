import * as React from "react";
import "./FastMarquee.scss";

const Color = require("color");

interface IFastMarqueeProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  className?: string; // Possible; it could be an alternative to style
  play?: boolean;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction: "left" | "right"; // Possibly add "up" and "down" in the future
  duration?: number; // Duration to loop through marquee once
  loop?: boolean; // Doesn't work yet
  delay?: number;
  height?: number | string; // Height and width might be redundant because style covers them
  width?: number | string;
  slideWidth?: number;
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
  duration = 200, // Default props
  // loop = true, // Todo: Get width of marquee, repeat marquee until equal or greather than width of marquee-container
  delay = 0,
  height = "100%",
  width = "100%",
  // slideWidth = 100,
  // carouselRepeat = 2,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  // swipeable = false,
  children,
}) => {
  const color = Color(gradientColor);

  return (
    <div
      style={{
        ...style,
        ["--height" as string]:
          typeof height === "string" ? height : `${height}px`,
        ["--width" as string]: typeof width === "string" ? width : `${width}px`,
      }}
      className="marquee-container"
    >
      {gradient && (
        <div
          style={{
            ["--gradient-color" as string]: `${color}, ${color.fade(1)}`,
            ["--gradient-width" as string]: `${gradientWidth}px`,
            ["--direction" as string]: direction,
          }}
          className="overlay"
        />
      )}
      <div
        style={{
          ["--play" as string]: play ? "running" : "paused",
          ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
          ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--direction" as string]:
            direction === "left" ? "-8000px" : "3930px", // 3930 is hard-coded width for now
          ["--duration" as string]: `${duration}s`,
          ["--delay" as string]: `${delay}s`,
        }}
        className="marquee"
      >
        {children}
        {/* {[children].map((child: any, key: number) => {
          return (
            <div style={{["--slide-width" as string]: `${slideWidth}px`}} className="slide" key={key}>
              {child}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default FastMarquee;
