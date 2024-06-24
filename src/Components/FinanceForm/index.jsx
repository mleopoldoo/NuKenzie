import React, { useState } from "react";
import { FinanceList } from "../FinanceList/index.jsx";
import { Total } from "../Total/index.jsx";
import style from "../FinanceForm/style.module.scss";

export const FinanceForm = () => {
  const [listItens, setListItens] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  const typeChange = (e) => {
    setType(e.target.value);
  };

  const calculateAmount = () => {
    const entradas = listItens
      .filter((item) => item.type === "Entrada")
      .reduce((acc, item) => acc + parseFloat(item.value), 0);
    const despesas = listItens
      .filter((item) => item.type === "Despesa")
      .reduce((acc, item) => acc + parseFloat(item.value), 0);
    return entradas - despesas;
  };

  const AddToList = () => {
    const newItem =
      description && value && type
        ? {
            id:
              listItens.length > 0 ? listItens[listItens.length - 1].id + 1 : 1,
            description,
            value,
            type,
          }
        : null;

    newItem
      ? (setListItens([...listItens, newItem]),
        setDescription(""),
        setValue(""),
        setType(""))
      : alert("É obrigatório preencher todos os campos.");
  };

  const removeItem = (id) => {
    setListItens((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <section className={style.sectionContainer}>
      <div>
        <div className={style.container}>
          <label className="subTitle1" htmlFor="description">
            Descrição
          </label>
          <input
            className="input"
            type="text"
            id="description"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={descriptionChange}
            required
          />
          <label className="subTitleEx" htmlFor="description">
            Ex: Compra de roupas
          </label>

          <label className="subTitle1" htmlFor="value">
            Valor (R$)
          </label>
          <input
            className="input"
            type="number"
            id="value"
            name="value"
            placeholder="0"
            required
            value={value}
            onChange={valueChange}
          />

          <label className="subTitle1" htmlFor="type">
            Tipo de valor
          </label>
          <select
            className="inputSelect"
            id="type"
            name="type"
            required
            value={type}
            onChange={typeChange}
          >
            <option value="Selecione">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>

          <button className="buttonAdd" type="button" onClick={AddToList}>
            Inserir valor
          </button>
        </div>

        <div>
          <Total calculateAmount={calculateAmount} />
        </div>
      </div>

      <FinanceList listagem={listItens} onRemoveItem={removeItem} />
    </section>
  );
};
