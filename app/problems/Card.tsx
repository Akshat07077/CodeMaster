import React from "react";

const Card = ({ title, description, buttonText }: any) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={title} alt="" className="rounded-md  h-[150px]" />
      </div>
    </div>
  );
};

export default Card;
