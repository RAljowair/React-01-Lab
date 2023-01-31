import React from "react";

interface Services {
  service: string;
  price: number;
}

function Services(props: Services) {
  return (
    <div className="services">
      <p>Servives: {props.service}</p>
      <p>Price: {props.price}$</p>
    </div>
  );
}

export default Services;
