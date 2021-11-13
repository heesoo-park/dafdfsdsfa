import React, { Component } from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import slide from "../img/slide01.jpg";

export class Games extends Component {
  render() {
    const games = this.props.steamURL;
    const url = this.props.url;
    //console.log(url);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider" style={{ height: "20%" }}>
        <h2>Related Games</h2>

        <Slider {...settings}>
          {games &&
            games.map((e, index) => (
              <div key={index}>
                <img
                  src={url[index]}
                  alt="1"
                  onClick={() => window.open(`${e}`, "_blank")}
                />
              </div>
            ))}
        </Slider>
        {/* <div>
          <img src={slide} alt="1" />
          <div className="desc">ㄹㅇㅋㅋ</div>
        </div> */}
      </div>
    );
  }
}

export default Games;
