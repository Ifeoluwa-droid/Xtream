import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import classes from "./MovieCarousel.module.css"
import { useMediaQuery } from "@mui/material"

const MovieCarousel = ({ children }) => {
	const mediaMatchesMaxWidth510 = useMediaQuery("(max-width: 510px)");

	return (
		<Carousel
			width="100%"
			className={classes["carousel"]}
			ariaLabel="Carousel"
			autoFocus={true}
			autoPlay={true}
			emulateTouch={true}
			infiniteLoop={true}
			interval={5000}
			showThumbs={false}
			transitionTime={500}
			useKeyboardArrows={true}
			showStatus={false}
			showIndicators={mediaMatchesMaxWidth510 ? false : true}
		>
			{children}
		</Carousel>
	);
};

export default MovieCarousel;
