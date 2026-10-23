import React from "react";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;