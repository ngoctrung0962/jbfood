import React from "react";
import mainPhoto from "../../assets/img/main_photo.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GraphBodyFat } from "./components/GraphBodyFat";
import IconCup from "../../assets/img/icon_cup.png";
import IconKnife from "../../assets/img/icon_knife.png";
import ImgProduct from "../../assets/img/l01.jpg";
const TopPage = () => {
  const data = [
    {
      id: 1,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.20.Morning",
    },
    {
      id: 2,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 3,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 4,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 5,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 6,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 7,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
    {
      id: 8,
      name: "ハンバーグ",
      img: ImgProduct,
      des: "04.21.Morning",
    },
  ];

  const category = [
    {
      id: 1,
      name: "Morning",
      img: IconKnife,
    },
    {
      id: 2,
      name: "Lunch",
      img: IconKnife,
    },
    {
      id: 3,
      name: "Dinner",
      img: IconKnife,
    },
    {
      id: 4,
      name: "Snack",
      img: IconCup,
    },
  ];
  return (
    <div className="toppage">
      <div className="toppage__report d-flex">
        <div
          className="toppage__report__left"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={mainPhoto} alt="" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "181px",
              height: "181px",
            }}
          >
            <CircularProgressbar
              value={75}
              strokeWidth={2}
              backgroundPadding={0}
              text={`5/20 ${75}%`}
              styles={{
                path: {
                  stroke: `#Fff`,
                  strokeLinecap: "butt",
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  transformOrigin: "center center",
                  boxShadow: "0px 0px 6px #FC7400",
                },
                trail: {
                  stroke: "transparent",
                  strokeLinecap: "butt",
                  transformOrigin: "center center",
                },
                background: {
                  fill: "#3e98c7",
                  boxShadow: "0px 0px 6px #FC7400",
                },
                text: {
                  fill: "#fff",
                  fontSize: "12px",
                  textShadow: "0px 0px 6px #FCA500",
                },
              }}
            />
          </div>
        </div>
        <div
          className="toppage__report__right d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            background: "#2E2E2E",
          }}
        >
          <div
            style={{
              width: "auto",
              maxWidth: "590px",
            }}
          >
            <GraphBodyFat />
          </div>
        </div>
      </div>

      <div className="toppage__content d-flex align-items-center flex-column">
        <div
          className="category__list d-flex justify-content-center align-items-center"
          style={{
            margin: "25px 0px",
          }}
        >
          {category.map((item, index) => {
            return (
              <div
                key={index}
                className="category__item hex__box d-flex justify-content-center align-items-center flex-column"
              >
                <img src={item?.img} alt="" className="category__img" />
                <div className="category__text">{item?.name}</div>
              </div>
            );
          })}
        </div>

        <div
          className="toppage__productlist d-flex justify-content-center align-items-center flex-wrap"
          style={{
            maxWidth: "1000px",
          }}
        >
          {data.map((item, index) => {
            return (
              <div className="toppage__product__item" key={index}>
                <img src={ImgProduct} alt="" className="product__img" />

                <div className="product__des">{item?.des}</div>
              </div>
            );
          })}
        </div>

        <button className="btn__loadmore">
          <span>記録をもっと見る</span>
        </button>
      </div>
    </div>
  );
};

export default TopPage;
