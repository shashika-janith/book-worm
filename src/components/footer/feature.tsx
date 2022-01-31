import React from "react";

interface IProps {
  icon: string,
  label: string,
  info: string,
}

const Feature = ({ icon, label, info }: IProps) => {

  return (
    <div className="feature">
      <i className={`feature-ic ${icon}`} />
      <div>
        <p className="label-main">{label}</p>
        <p className="label-more">{info}</p>
      </div>
    </div>
  );

}

export default Feature;