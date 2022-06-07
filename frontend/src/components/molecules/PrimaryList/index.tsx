import React from "react";

import "./index.css";

export type primaryListProps = {
  text: string[];
};

const PrimaryList: React.FC<primaryListProps> = ({ text }) => {
  return (
    <div>
      <div className="primary-list1">{text[0]}</div>
      <div className="primary-list2">{text[1]}</div>
      <div className="primary-list3">{text[2]}</div>
    </div>
  );
};
export default PrimaryList;

