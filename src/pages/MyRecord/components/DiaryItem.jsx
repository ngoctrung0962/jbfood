import React from "react";

const DiaryItem = ({ diary }) => {
  return (
    <div className="diary__item">
      <div className="diary__item__date">{diary?.date}</div>
      <div className="diary__item__time">{diary?.time}</div>
      <div className="diary__item__title">{diary?.title}</div>
      <div className="diary__item__content">{diary?.content}</div>
    </div>
  );
};

export default DiaryItem;
