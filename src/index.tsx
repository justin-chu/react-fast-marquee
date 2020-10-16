import * as React from "react";
import "./styles.scss";

const Color = require("color");

interface ISmoothCarouselProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  className?: string; // Possible; it could be an alternative to style
  play?: boolean;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction: "left" | "right"; // Possibly add "up" and "down" in the future
  speed?: number;
  // loop?: boolean;
  height?: number | string; // Height and width might be redundant because style covers them
  width?: number | string;
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: number; // Number or string in the future
  // swipeable?: boolean;
}

const SmoothCarousel: React.FC<ISmoothCarouselProps> = ({
  style = {},
  // className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 200, // Default props
  // loop = true,
  height = "auto",
  width = "100%",
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
        ["--height" as string]: typeof height === "string" ? height : `${height}px`,
        ["--width" as string]: typeof width === "string" ? width : `${width}px`,
      }}
      className="carousel-container"
    >
      {gradient && (
        <div
          style={{
            ["--gradient-color" as string]: `${color}, ${color.fade(1)}`,
            ["--gradient-width" as string]: `${gradientWidth}px`,
            ["--direction" as string]: direction,
          }}
          className="gradient"
        />
      )}
      <div
        style={{
          ["--play" as string]: play ? "running" : "paused",
          ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
          ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--direction" as string]:
            direction === "left" ? "-3930px" : "3930px", // 3930 is hard-coded width for now
          ["--speed" as string]: `${speed}s`,
        }}
        className="carousel"
      >
        {[children].map((child: any, key: number) => {
          return (
            <div className="slide" key={key}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmoothCarousel;
