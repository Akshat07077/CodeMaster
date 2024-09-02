import React from "react";
import Card from "./Card";
import Study from "./Study";

type Props = {};

function ComapaniesCards({}: Props) {
  return (
    <div className={"container"}>
      <div className={"cardGrid flex w-[100%] justify-center"}>
        <Card title="/banner1.png" />
        <Card title="/banner1.png" />
        <Card title="/banner3.png" />
      </div>
      <Study />
    </div>
  );
}

export default ComapaniesCards;
