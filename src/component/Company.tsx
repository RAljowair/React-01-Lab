import React from "react";

interface Company {
  companyName: string;
  employees: number;
  foundingDay: number;
}

function Company(props: Company) {
  return (
    <div className="company">
      <p>Company Name:{props.companyName}</p>
      <p>Employees number: {props.employees}</p>
      <p>Founding Day: {props.foundingDay}</p>
    </div>
  );
}

export default Company;
