import React from "react";
import ImgRecord1 from "../../assets/img/MyRecommend-1 (image).png";
import ImgRecord2 from "../../assets/img/MyRecommend-2 (image).png";
import ImgRecord3 from "../../assets/img/MyRecommend-3 (image).png";
import { ChartBodyFat } from "./components/ChartBodyFat";
import DiaryItem from "./components/DiaryItem";
import ExerciseItem from "./components/ExerciseItem";
const MyRecord = () => {
  const listrecord = [
    {
      id: 1,
      name: "Body record",
      img: ImgRecord1,
      des: "自分のカラダの記録",
    },
    {
      id: 2,
      name: "My exercise",
      img: ImgRecord2,
      des: "自分の運動の記録",
    },
    {
      id: 3,
      name: "My diary",
      img: ImgRecord3,
      des: "自分の日記の記録",
    },
  ];
  // Tạo list exercise gồm 10 phần tử, mỗi phần tử là 1 object gồm các thuộc tính: id, name, time, energy
  const listExercise = [
    { id: 1, name: "家事全般（立位・軽い）", time: 30, energy: 250 },
    { id: 2, name: "家事全般（立位・軽い）", time: 60, energy: 500 },
    { id: 3, name: "家事全般（立位・軽い）", time: 45, energy: 400 },
    { id: 4, name: "家事全般（立位・軽い）", time: 60, energy: 450 },
    { id: 5, name: "家事全般（立位・軽い）", time: 60, energy: 200 },
    { id: 6, name: "家事全般（立位・軽い）", time: 45, energy: 250 },
    { id: 7, name: "家事全般（立位・軽い）", time: 30, energy: 350 },
    { id: 8, name: "家事全般（立位・軽い）", time: 60, energy: 500 },
    { id: 9, name: "家事全般（立位・軽い）", time: 30, energy: 300 },
    { id: 10, name: "家事全般（立位・軽い）", time: 45, energy: 350 },
    { id: 1, name: "家事全般（立位・軽い）", time: 30, energy: 950 },
    { id: 2, name: "家事全般（立位・軽い）", time: 60, energy: 500 },
    { id: 3, name: "家事全般（立位・軽い）", time: 45, energy: 400 },
    { id: 4, name: "家事全般（立位・軽い）", time: 60, energy: 450 },
    { id: 5, name: "家事全般（立位・軽い）", time: 60, energy: 200 },
    { id: 6, name: "家事全般（立位・軽い）", time: 45, energy: 250 },
    { id: 7, name: "家事全般（立位・軽い）", time: 30, energy: 350 },
    { id: 8, name: "家事全般（立位・軽い）", time: 60, energy: 500 },
    { id: 9, name: "家事全般（立位・軽い）", time: 30, energy: 300 },
    { id: 10, name: "家事全般（立位・軽い）", time: 45, energy: 350 },
    { id: 10, name: "家事全般（立位・軽い）", time: 45, energy: 777 },
  ];

  const listDiary = [
    {
      id: 1,
      date: "2023-03-22",
      time: "10:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 2,
      date: "2023-03-23",
      time: "14:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 3,
      date: "2023-03-24",
      time: "09:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 4,
      date: "2023-03-25",
      time: "11:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 5,
      date: "2023-03-26",
      time: "15:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 6,
      date: "2023-03-27",
      time: "10:30",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 7,
      date: "2023-03-28",
      time: "13:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 8,
      date: "2023-03-29",
      time: "16:00",
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];
  return (
    <div className="myRecord__page wrapper d-flex flex-column justify-content-center align-items-center">
      <div className="list__box__nav d-flex ">
        {listrecord.map((item, index) => (
          <div className="box__nav__item " key={index}>
            <div
              className="box__nav__item__inner d-flex flex-column justify-content-center align-items-center"
              // Đặt ảnh nền cho div
              style={{
                backgroundImage: `url("${item.img}")`,
                width: "240px",
                height: "240px",
                backgroundBlendMode: "luminosity",
              }}
            >
              {/* <img src={item.img} alt="" className="box__nav__item__img" /> */}
              <div className="box__nav__item__name">{item.name}</div>
              <div className="box__nav__item__des">{item.des}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="graph__bodyfat d-flex flex-column justify-content-center p-3"
        style={{
          width: "100%",
          background: "#414141",
          marginBottom: "56px",
        }}
      >
        <div className="chart__head  d-flex align-items-center ">
          <div className="chart__head__title">Body record</div>
          <div className="chart__head__des">2021.05.21</div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "236px",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <ChartBodyFat />
        </div>

        <div className="chart_button__list d-flex">
          <div className="chart_button__item ">日</div>
          <div className="chart_button__item">日</div>
          <div className="chart_button__item">日</div>
          <div className="chart_button__item active">日</div>
        </div>
      </div>

      <div
        className="graph__bodyfat d-flex flex-column justify-content-center p-3"
        style={{
          width: "100%",
          background: "#414141",
          marginBottom: "56px",
        }}
      >
        <div className="chart__head  d-flex align-items-center ">
          <div className="chart__head__title"> MY EXERCISE</div>
          <div className="chart__head__des">2021.05.21</div>
        </div>
        <div className="chart__content ">
          <div
            className="row chart__content__height"
            style={{
              maxHeight: "192px",
              overflowY: "auto",
            }}
          >
            <div className="col-12 col-md-6">
              <ul className="list__exercise ">
                {listExercise
                  .slice(0, Math.ceil(listExercise.length / 2))
                  .map((exercise, index) => {
                    return (
                      <li key={index}>
                        <ExerciseItem exercise={exercise} />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list__exercise ">
                {listExercise
                  .slice(Math.ceil(listExercise.length / 2))
                  .map((exercise, index) => {
                    return (
                      <li key={index}>
                        <ExerciseItem exercise={exercise} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* DIARY */}
      <div className="diary__box ">
        <div className="diary__title">
          <h3>my diary</h3>
        </div>
        <div
          className="list__diary d-flex flex-wrap justify-content-center"
          style={{
            gap: "12px",
          }}
        >
          {listDiary.map((diary, index) => {
            return <DiaryItem diary={diary} key={index} />;
          })}
        </div>
      </div>

      <button className="btn__loadmore">
        <span>自分の日記をもっと見る</span>
      </button>
    </div>
  );
};

export default MyRecord;
