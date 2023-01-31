import React from "react";

interface programersProps {
  name: string;
  programing_lang: string;
  experince: number;
  company: string;
}

function Programmers(props: programersProps) {
  return (
    <div className="programmer">
      <p>Programmer name: {props.name}</p>
      <p>Programing languages: {props.programing_lang}</p>
      <p>Experince: {props.experince} years</p>
      <p>Company: {props.company}</p>
    </div>
  );
}

export default Programmers;
