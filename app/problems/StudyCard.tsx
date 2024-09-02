import { AxeIcon, TvIcon } from "lucide-react";
import React from "react";

const StudyCard = ({ title, description, bgColor, source }: any) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md flex hover:scale-105 text-white ${bgColor}`}
    >
      <div>
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="bg-red">
        <img src={source} alt="" />
      </div>
    </div>
  );
};

export default StudyCard;
