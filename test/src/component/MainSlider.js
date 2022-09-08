import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "1 슬라이드 제목", des: "1 슬라이드 내용", link: "/1", },
    { slideid: 2, content: "2 슬라이드 제목", des: "2 슬라이드 내용", link: "/2", },
    { slideid: 3, content: "3 슬라이드 제목", des: "3 슬라이드 내용", link: "/3", }
]


const MainSlider = () => {
    const [num, setNum] = useState();
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, [])

    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
        arrows: false,
    }
    return (
        <>

            <Slider {...slideSet} ref={slideRef} >
                {
                    SLIDE.map(
                        (slide, idx) =>
                            <figure className={`itm0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                                <div className="slide-box">
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href="{slide.link}">more</a>
                                </div>
                            </figure>
                    )
                }
            </Slider>
            {console.log(slideRef.current)}
            <div>{num + 1} / <span>0{SLIDE.length}</span></div>
            <ul className="arrows">
                <button onClick={() => slideRef.current.slickPrev()}>pre</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </ul>
            <ul className="dots">
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>
        </>
    )

}

export default MainSlider;