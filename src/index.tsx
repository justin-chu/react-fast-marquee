import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Slider } from './Slider/Slider';
import { SliderItems } from "./Slider/SliderItems"

ReactDOM.render(
	<React.StrictMode>
		<Slider>
			{SliderItems.map((item, index) => {
				return (
					<div className="slide" key={index}>
						<img height="100%" src={require(`./assets/images/${item.src}`)} alt={item.alt} />
					</div>
				);
			})}
			{SliderItems.map((item, index) => {
				return (
					<div className="slide" key={index}>
						<img height="100%" src={require(`./assets/images/${item.src}`)} alt={item.alt} />
					</div>
				);
			})}
		</Slider>
	</React.StrictMode>,
	document.getElementById('root')
);