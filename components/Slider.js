import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './Slider.module.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        partialVisibilityGutter: 40

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};

const images = [
    "https://images.unsplash.com/photo-1544786178-7d8003382c54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
    "https://images.unsplash.com/photo-1534791548804-ccf7e66bc710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
]

function Slider({ deviceType }) {
    return (
            <Carousel
                partialVisible
                responsive={responsive}
                ssr
                swipeable
                deviceType={deviceType}
            >

                {images.map(image => {
                    return(
                        <div className={styles.imagediv}>
                        <img className={styles.img} src={image} />
                        </div>
                    )
                })}

            </Carousel>
    )
}

export default Slider