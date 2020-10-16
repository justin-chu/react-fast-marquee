import * as React from "react";
import "./styles.scss";

const Color = require("color");

interface ISmoothCarouselProps extends React.PropsWithChildren<any> {
  speed?: number;
  style?: React.CSSProperties;
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: number; // Number or string in the future
  // loop?: boolean;
}

const SmoothCarousel: React.FC<ISmoothCarouselProps> = ({
  speed = 200, // Default props
  style,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  // loop = true,
  children,
}) => {
  const color = Color(gradientColor);
  console.log(color);

  return (
    <div style={style} className="slide-container">
      {gradient && (
        <div
          style={{
            ["--gradient-color" as string]: `${color}, ${color.fade(1)}`,
            ["--gradient-width" as string]: `${gradientWidth}px`,
          }}
          className="gradient"
        />
      )}
      <div style={{ ["--speed" as string]: `${speed}s` }} className="slider">
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
