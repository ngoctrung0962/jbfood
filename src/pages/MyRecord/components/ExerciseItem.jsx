import React from "react";

const ExerciseItem = ({ exercise }) => {
  return (
    <div className="exercise__item d-flex justify-content-between align-items-center">
      <div className="item__left d-flex">
        <div className="d-flex justify-content-center ">
          <div
            className="dot"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#fff",
              marginRight: "20px",
              marginTop: "10px",
            }}
          ></div>
          <div>
            <div className="exercise__item__name">{exercise?.name}</div>
            <div className="exercise__item__enegy">{exercise?.energy}kcal</div>
          </div>
        </div>
      </div>
      <div className="item__right">
        <div className="exercise__item__time">{exercise?.time} min</div>
      </div>
    </div>
  );
};

export default ExerciseItem;
