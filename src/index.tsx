import * as React from 'react'
import './styles.scss'

interface ISmoothCarouselProps extends React.PropsWithChildren<any> {
  speed?: number;
  style?: React.CSSProperties;
}

const SmoothCarousel: React.FC<ISmoothCarouselProps> = ({
  speed = 200, // Default props
  style,
  children
}) => {
  return (
    <div style={style} className="slide-container">
      <div style={{ ['--speed' as string]: `${speed}s` }} className="slider">
        {[children].map((child: any, key: number) => {
          return <div className="slide" key={key}>{child}</div>
        })}
      </div>
    </div>
  )
}

export default SmoothCarousel