import React from "react";
import style from "./FirstSection.module.scss";
import Welcome from "../../common/Welcome/Welcome";
import ImgPrzemek from "../../common/ImgPrzemek/ImgPrzemek";
const FirstSection = () => {
  return (
    <section className={style.container}>
      {/*<Welcome />*/}
      <div className={style.content}>
        <div className={style.img}></div>
        <ImgPrzemek />
        <div className={style.desc}>
          <p>
            <p className={style.descWelcome}>
              Hi! My name is Przemek and I am 21 years old.
            </p>
            I have been programming for about a year now, and it has become my
            true passion. In my free time, I play the piano, create music, go to
            the gym, and design and develop websites. I love to enhance my
            skills and explore new technologies, combining creativity with
            technology in my daily life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
