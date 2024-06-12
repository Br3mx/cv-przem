import React from "react";
import style from "./FirstSection.module.scss";
//import Welcome from "../../common/Welcome/Welcome";
import ImgPrzemek from "../../common/ImgPrzemek/ImgPrzemek";
import { useSelector } from "react-redux";
import { getFirstSetion } from "../../../redux/informationRedux";
const FirstSection = () => {
  const firstSection = useSelector(getFirstSetion);
  return (
    <section className={style.container} id="firstSection">
      {/*<Welcome />*/}
      <div className={style.content}>
        <div className={style.img}></div>
        <ImgPrzemek img={firstSection} />
        <div className={style.desc}>
          <p>
            <p className={style.descWelcome}>{firstSection.title}</p>
            {firstSection.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
