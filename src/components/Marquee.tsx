import React, { Fragment, useEffect, useState, useRef } from "react";
import "./Marquee.scss";

interface MarqueeProps {
  /**
   * Inline style for the container div
   * Type: object
   * Default: {}
   */
  style?: React.CSSProperties;
  /**
   * Class name to style the container div
   * Type: string
   * Default: ""
   */
  className?: string;
  /**
   * Whether to play or pause the marquee
   * Type: boolean
   * Default: true
   */
  play?: boolean;
  /**
   * Whether to pause the marquee when hovered
   * Type: boolean
   * Default: false
   */
  pauseOnHover?: boolean;
  /**
   * Whether to pause the marquee when clicked
   * Type: boolean
   * Default: false
   */
  pauseOnClick?: boolean;
  /**
   * The direction the marquee is sliding
   * Type: "left" or "right"
   * Default: "left"
   */
  direction?: "left" | "right";
  /**
   * Speed calculated as pixels/second
   * Type: number
   * Default: 20
   */
  speed?: number;
  /**
   * Duration to delay the animation after render, in seconds
   * Type: number
   * Default: 0
   */
  delay?: number;
  /**
   * The number of times the marquee should loop, 0 is equivalent to infinite
   * Type: number
   * Default: 0
   */
  loop?: number;
  /**
   * Whether to show the gradient or not
   * Type: boolean
   * Default: true
   */
  gradient?: boolean;
  /**
   * The rgb color of the gradient as an array of length 3
   * Type: Array<number> of length 3
   * Default: [255, 255, 255]
   */
  gradientColor?: [number, number, number];
  /**
   * The width of the gradient on either side
   * Type: string
   * Default: 200
   */
  gradientWidth?: number | string;
  /**
   * A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
   * Type: Function
   * Default: null
   */
  onFinish?: () => void;
  /**
   * A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
   * Type: Function
   * Default: null
   */
  onCycleComplete?: () => void;
  /**
   * The children rendered inside the marquee
   * Type: ReactNode
   * Default: null
   */
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  style = {},
  className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 20,
  delay = 0,
  loop = 0,
  gradient = true,
  gradientColor = [255, 255, 255],
  gradientWidth = 200,
  onFinish,
  onCycleComplete,
  children,
}) => {
  // React Hooks
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMounted) return;

    const calculateWidth = () => {
      // Find width of container and width of marquee
      if (marqueeRef.current && containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
      }
    };

    calculateWidth();
    // Rerender on window resize
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Gradient color in an unfinished rgba format
  const rgbaGradientColor = `rgba(${gradientColor[0]}, ${gradientColor[1]}, ${gradientColor[2]}`;

  // Animation duration
  const duration =
    marqueeWidth < containerWidth
      ? containerWidth / speed
      : marqueeWidth / speed;

  return (
    <Fragment>
      {!isMounted ? null : (
        <div
          ref={containerRef}
          style={{
            ...style,
            ["--pause-on-hover" as string]: !play || pauseOnHover ? "paused" : "running",
            ["--pause-on-click" as string]: !play || (pauseOnHover && !pauseOnClick) || pauseOnClick ? "paused" : "running",
          }}
          className={className + " marquee-container"}
        >
          {gradient && (
            <div
              style={{
                ["--gradient-color" as string]: `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`,
                ["--gradient-width" as string]:
                  typeof gradientWidth === "number"
                    ? `${gradientWidth}px`
                    : gradientWidth,
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
              ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
            }}
            className="marquee"
            onAnimationIteration={onCycleComplete}
            onAnimationEnd={onFinish}
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
              ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
            }}
            className="marquee"
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Marquee;
