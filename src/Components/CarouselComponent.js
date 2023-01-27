import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Carousel.css'

const sxCarousel = {
    // backgroundColor: 'lightblue',
    height: 500,
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden'
}
// const sxCarouselItem = {
//     height: '27rem',
//     minWidth: '100%',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: '1s cubic-bezier(0.39, 0.575, 0.575, 1)'
// }


export default function CarouselComponent() {
    const data = ['Item 1', 'Item 2']
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        // console.log('data.length', data.length - 1)
        // console.log('currentIndex', currentIndex)
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        setCurrentIndex(currentIndex + 1)
    }
    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [currentIndex])

    return (
        <Box sx={sxCarousel}>
            <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
            {/* <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg" src="https://storagesp01.blob.core.windows.net/cea-webapp-blob/backgroundvideo.mp4" type="video/mp4" /> */}
            {data.map((item, itemIndex) => {
                if (currentIndex === 0) {
                    return <h1 key={itemIndex} className='carousel-item' style={{ transform: `translate(${currentIndex * 100}%)` }}>{item}</h1>
                } else {
                    return <h1 key={itemIndex} className='carousel-item' style={{ transform: `translate(-${currentIndex * 100}%)` }}>{item}</h1>
                }
            })}
        </Box>
    )
}
