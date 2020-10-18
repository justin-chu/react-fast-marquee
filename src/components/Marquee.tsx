import * as React from "react";
import "./Marquee.scss";

const Color = require("color");

interface IMarqueeProps {
  /**
   * Inline styling for the container
   * Value: React inline style object
   * Default: {}
   */
  style?: React.CSSProperties;
  /**
   * Class name to optionally style the container
   * Value: string
   * Default: ""
   */
  className?: string;
  /**
   * Whether to play or pause the marquee
   * Value: boolean
   * Default: true
   */
  play?: boolean;
  /**
   * Whether to pause the marquee when hovered
   * Value: boolean
   * Default: false
   */
  pauseOnHover?: boolean;
  /**
   * Whether to pause the marquee when clicked
   * Value: boolean
   * Default: false
   */
  pauseOnClick?: boolean;
  /**
   * The direction the marquee is sliding
   * Value: "left" or "right"
   * Default: "left"
   */
  direction: "left" | "right";
  /**
   * Speed calculated as pixels/second
   * Value: number
   * Default: 20
   */
  speed?: number;
  /**
   * Duration to delay the animation, in seconds
   * Value: number
   * Default: 0
   */
  delay?: number;
  /**
   * Whether to show the gradient or not
   * Value: boolean
   * Default: true
   */
  gradient?: boolean;
  /**
   * The color of the gradient
   * Value: string
   * Default: "white"
   */
  gradientColor?: string;
  /**
   * The width of the gradient, in pixels
   * Value: number
   * Default: "white"
   */
  gradientWidth?: number;
  /**
   * The children rendered inside the marquee
   * Value: ReactNode
   * Default: null
   */
  children?: React.ReactNode;
}

const Marquee: React.FC<IMarqueeProps> = ({
  style = {},
  className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 20,
  delay = 0,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  children,
}) => {
  const color = Color(gradientColor);

  /* React Hooks */
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [marqueeWidth, setMarqueeWidth] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    /* Find width of container and width of marquee */
    if (marqueeRef.current && containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setMarqueeWidth(marqueeRef.current.offsetWidth);
    }

    /* Set duration of animation based off speed */
    setDuration(marqueeWidth / speed);
  });

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
        ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
      }}
      className={className + " marquee-container"}
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
            direction === "left" ? "normal" : "reverse",
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
        style={{
          ["--play" as string]: play ? "running" : "paused",
          ["--direction" as string]:
            direction === "left" ? "normal" : "reverse",
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

export default Marquee;
