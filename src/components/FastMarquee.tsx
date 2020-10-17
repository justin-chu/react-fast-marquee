import * as React from "react";
import "./FastMarquee.scss";

const Color = require("color");

interface IFastMarqueeProps extends React.PropsWithChildren<any> {
  style?: React.CSSProperties;
  className?: string; // Possible; it could be an alternative to style
  play?: boolean;
  // pauseOnHover?: boolean;
  // pauseOnClick?: boolean;
  direction: "left" | "right"; // Possibly add "up" and "down" in the future
  speed?: number; // Speed in pixels/second
  loop?: boolean; // Doesn't work yet
  delay?: number;
  height?: number | string; // Height and width might be redundant because style covers them
  // width?: number | string;
  width?: number;
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
  // pauseOnHover = false,
  // pauseOnClick = false,
  direction = "left",
  speed = 0.8,
  // loop = true, // Todo: Get width of marquee, repeat marquee until equal or greather than width of marquee-container
  delay = 0,
  height = "100%",
  // width = "100%",
  width = 899,
  // slideWidth = 100,
  // carouselRepeat = 2,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  // swipeable = false,
  children,
}) => {
  const color = Color(gradientColor);
  const [marqueeWidth, setMarqueeWidth] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const marqueeRef1 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Make sure it's not null
    if (marqueeRef1.current) {
      setMarqueeWidth(marqueeRef1.current.getBoundingClientRect().width);
    }
    getDuration();
  });

  const getDuration = () => {
    setDuration(marqueeWidth / speed);
    console.log(speed + " = " + marqueeWidth + " / " + duration);
  };

  // const renderMarquees = () => {
  //   let marquees = []
  //   for(let i = 0; i < width/marqueeWidth; i++) {
  //     marquees.push(      <div
  //       ref={marqueeRef1}
  //       // {ref => ref && setMarqueeRef(ref)}
  //       style={{
  //         ["--play" as string]: play ? "running" : "paused",
  //         ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
  //         ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
  //         ["--direction" as string]: direction === "left" ? `-100%` : "100%",
  //         ["--duration" as string]: `${duration}s`,
  //         ["--delay" as string]: `${delay}s`,
  //       }}
  //       className="marquee"
  //     >
  //       {children}
  //     </div>)
  //   }
  //   return marquees;
  // }

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
        ref={marqueeRef1}
        style={{
          ["--play" as string]: play ? "running" : "paused",
          // ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
          // ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--direction" as string]: direction === "left" ? `-100%` : "100%",
          ["--duration" as string]: `${duration}s`,
          ["--delay" as string]: `${delay}s`,
        }}
        className="marquee"
      >
        {children}
      </div>
      <div
        ref={marqueeRef1}
        style={{
          ["--play" as string]: play ? "running" : "paused",
          // ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
          // ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
          ["--direction" as string]: direction === "left" ? `-100%` : "100%",
          ["--duration" as string]: `${duration}s`,
          ["--delay" as string]: `${delay}s`,
        }}
        className="marquee"
      >
        {children}
      </div>
      {/* {renderMarquees()} */}
    </div>
  );
};

export default FastMarquee;
