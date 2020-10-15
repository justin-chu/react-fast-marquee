import React from "react";
import "./Slider.css";
import { SliderItems } from "./SliderItems"

function Slider() {
  return (
		<div className="slider">
			<div className="slide-track">	
				{SliderItems.map((item, index) => {
					return (
						<div className="slide" key={index}>
							<img height="100%" src={require(`../../assets/images/${item.src}`)} alt={item.alt} />
						</div>
					);
				})}
				{SliderItems.map((item, index) => {
					return (
						<div className="slide" key={index}>
							<img height="100%" src={require(`../../assets/images/${item.src}`)} alt={item.alt} />
						</div>
					);
				})}
		</div>
	</div>
	);
}

export default Slider;
