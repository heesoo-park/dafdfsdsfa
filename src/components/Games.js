import React, { Component } from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import slide from "../img/slide01.jpg";

export class Games extends Component {
  render() {
    const games = this.props.details;
    const url = this.props.url;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider">
        <h2>Connected Games</h2>
        <img src={url} />

        {/* <Slider {...settings}>
          {games &&
            games.map((e, index) => (
              <div key={index}>
                <img
                  src={slide}
                  alt="1"
                  onClick={() => window.open(`${e.URL}`, "_blank")}
                />
                <div className="desc">{e.name}</div>
              </div>
            ))}
        </Slider> */}
        {/* <div>
          <img src={slide} alt="1" />
          <div className="desc">ㄹㅇㅋㅋ</div>
        </div> */}
      </div>
    );
  }
}

export default Games;
