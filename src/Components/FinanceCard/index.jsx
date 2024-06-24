import React from "react";
import style from "../FinanceCard/style.module.scss";

export const FinanceCard = ({ item, onRemoveItem }) => {
  const handleRemoveClick = () => {
    onRemoveItem(item.id);
  };

  item.value = Number(item.value);
  return (
    <li>
      <div className={style.divContainer}>
        <div>
          <h3 className="title1">{item.description}</h3>
          <p className="subTitle2">{item.type}</p>
        </div>
        <div className={style.div}>
          <p className="subTitle1">
            {item.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button className="buttonRemove" onClick={handleRemoveClick}>
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
