import * as React from 'react'
import './styles.scss'

interface ISmoothCarouselProps extends React.PropsWithChildren<any> {
  speed?: number;
}

const SmoothCarousel: React.FC<ISmoothCarouselProps> = ({
  speed = 200, // Default props
  children
}) => {
  return (
    <div className="slide-container">
      <div style={{ ['--speed' as string]: `${speed}s` }} className="slider">
        {children}
      </div>
    </div>
  )
}

export default SmoothCarousel