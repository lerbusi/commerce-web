import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slideImages from "./slideImages/slideImages";
import styles from "./slider.module.css";

const span = ["1 / SUCCYULENTS AT LEAF & CLAY", "2 / AWESOME ECHEVERIA"];

export default function Slider() {
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>{span[index]}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
