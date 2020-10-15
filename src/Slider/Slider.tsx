import React from "react";
import "./Slider.css";
import PropTypes, { InferProps } from 'prop-types';

export function Slider({ children, speed }: InferProps<typeof Slider.propTypes>) {
	return (
		<div className="slider">
			<div className="slide-track">
				{children}
			</div>
		</div>
	);
}

Slider.defaultProps = {
	speed: 100,
};

Slider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	speed: PropTypes.number,
	duration: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	opacity: PropTypes.number,
};