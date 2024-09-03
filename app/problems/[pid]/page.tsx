import React from "react";
import Header from "../Header";
import Workspace from "@/app/Components/Workspace/Workspace";

type Props = {};

const ProblemPage = (props: Props) => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
