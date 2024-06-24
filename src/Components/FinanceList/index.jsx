import React from "react";
import { FinanceCard } from "../FinanceCard";
import style from "../FinanceList/style.module.scss";

export const FinanceList = ({ listagem, onRemoveItem, active }) => {
  return (
    <div className={style.divWidth}>
      <h3 className="title1">Resumo financeiro</h3>
      {listagem.length === 0 ? (
        <h2 className={`${style.ulContainer} title3`}>
          Você ainda não possui nenhum lançamento
        </h2>
      ) : (
        <ul className={style.ulContainer}>
          {listagem.map((item) => (
            <li
              key={item.id}
              className={
                item.type.toLowerCase() === "entrada"
                  ? style.selectEntrada
                  : style.selectDespesa
              }
            >
              <FinanceCard
                item={item}
                onRemoveItem={onRemoveItem}
                active={active}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
