import React from "react";
import ImageColumn from "../../assets/img/column-3.jpg";
const Column = () => {
  const listColumnBox = [
    {
      id: "1",
      title: "RECOMMENDED COLUMN",
      des: "オススメ",
    },
    {
      id: "2",
      title: "RECOMMENDED COLUMN",
      des: "オススメ",
    },
    {
      id: "3",
      title: "RECOMMENDED COLUMN",
      des: "オススメ",
    },
    {
      id: "4",
      title: "RECOMMENDED COLUMN",
      des: "オススメ",
    },
  ];

  const listDataCard = [
    {
      id: "1",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "2",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "3",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "4",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "5",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "6",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "7",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
    {
      id: "8",
      img: ImageColumn,
      title: "#魚料理  #和食  #DHA",
      des: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      date: "2021.04.20",
      time: "10:00",
    },
  ];
  return (
    <div className="column__page d-flex flex-column  align-items-center">
      <div
        className="column__box__list d-flex justify-content-center align-items-center"
        style={{
          marginBottom: "56px",
        }}
      >
        {listColumnBox.map((columnBox, index) => (
          <div className="column__box__item" key={index}>
            <div className="column__box__item__title">{columnBox.title}</div>
            <hr
              style={{
                width: "30%",
                height: "3px",
                backgroundColor: "#fff",
                margin: "0 auto",
                marginBottom: "10px",
              }}
            />
            <div className="column__box__item__des">{columnBox.des}</div>
          </div>
        ))}
      </div>
      <div
        className="column__card__list d-flex flex-wrap justify-content-center"
        style={{
          gap: "4px",
          maxWidth: "1000px",
        }}
      >
        {listDataCard.map((dataCard, index) => (
          <div className="column__card__item" key={index}>
            <div
              className="column__card__item__inner"
              style={{
                position: "relative",
                marginBottom: "7.5px",
              }}
            >
              <img
                src={dataCard.img}
                alt=""
                className="column__card__item__img"
              />
              <div className="column__card__item__time ">
                {dataCard?.date} {dataCard?.time}
              </div>
            </div>

            <div className="column__card__item__des">{dataCard.des}</div>
            <div className="column__card__item__title">{dataCard.title}</div>
          </div>
        ))}
      </div>
      <button className="btn__loadmore">
        <span>自分の日記をもっと見る</span>
      </button>
    </div>
  );
};

export default Column;
