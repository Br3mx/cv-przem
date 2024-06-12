import React from "react";
import "./ImgPrzemek.module.scss";
import { useSelector } from "react-redux";
import { getFirstSetion } from "../../../redux/informationRedux";
const ImgPrzemek = () => {
  const firstSection = useSelector(getFirstSetion);
  return (
    <>
      <img src={firstSection.image} />
    </>
  );
};

export default ImgPrzemek;
