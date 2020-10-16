import * as React from 'react';
import './styles.scss';
interface ISmoothCarouselProps extends React.PropsWithChildren<any> {
    speed?: number;
    style?: React.CSSProperties;
}
declare const SmoothCarousel: React.FC<ISmoothCarouselProps>;
export default SmoothCarousel;
