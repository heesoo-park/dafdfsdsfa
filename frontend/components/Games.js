import React, { Component } from 'react'
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import slide from "../img/slide01.jpg"

export class Games extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="slider">
                <h2>Connected Games</h2>
                <Slider {...settings}>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋ
                        </div>
                    </div>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋㅋ
                        </div>
                    </div>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋㅋㅋ
                        </div>
                    </div>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋㅋㅋㅋ
                        </div>
                    </div>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>
                    <div>
                        <img src={slide} alt="1" />
                        <div className="desc">
                            ㄹㅇㅋㅋㅋㅋㅋㅋㅋ
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Games
