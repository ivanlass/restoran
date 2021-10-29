import React, { Component } from "react";
import Slider from "react-slick";
import CardWide from "../CardWide/CardWide";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './svakodnevnaJelaSlider.module.css'
import sharedStyles from '../../utils/sharedStyles.module.css'


export default class SvakodnevnaJelaSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles['slajder']}>
        <h2 className={sharedStyles['label-dim']}> Gotova jela </h2>
        <Slider {...settings}>
          <div>
            <CardWide />
          </div>

          <div>
            <CardWide />
          </div>

          <div>
            <CardWide />
          </div>

          <div>
            <CardWide />
          </div>

          <div>
            <CardWide />
          </div>
         
         
        </Slider>
      </div>
    );
  }
}