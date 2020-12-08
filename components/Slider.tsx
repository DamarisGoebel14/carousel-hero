import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Slider.module.css'
import { ResponsiveType, ArrowProps } from 'react-multi-carousel/lib/types';

interface Props {
    children: any
}

const responsive:ResponsiveType = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,

    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const CustomLeft= () => (
    <button disabled={true}>
    Prev
    </button>
)



const CustomRight = ({onClick}:ArrowProps) => (
    <button className={styles.right} onClick={onClick}>
        <div className={styles.kasten}>
    Next
    </div>
    </button>
)


const Slider: React.FC<Props> = ({children}) => {

    return (
            <Carousel
                responsive={responsive}
                ssr
                swipeable
                infinite
                arrows
                customRightArrow={<CustomRight/>}
                customLeftArrow={<CustomLeft/>}

            >

                {children}


            </Carousel>
    )
}

export default Slider