import * as React from "react";
import { ICard } from "../interfaces/card";

export const SlimCard: React.FC<{ data: ICard }> = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  return (
    <div className="slim-card">
      <img src={data.image} />
      <h4>{data.title}</h4>
      <div>{data.description}</div>
      <div>{data.tags?.join(", ")}</div>
    </div>
  );
};
