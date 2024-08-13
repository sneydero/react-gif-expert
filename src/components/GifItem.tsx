import React from "react";

interface Props {
  title: string;
  url: string;
}

const GifItem = ({ title, url }: Props) => {
  return (
    <div className="card">
      <img src={url} alt={url} />
      <p>{title}</p>
    </div>
  );
};

export default GifItem;
