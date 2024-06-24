import style from "../Total/style.module.scss";

export const Total = ({ calculateAmount }) => {
  let amount = calculateAmount();
  return (
    <section className={style.sectionContainer}>
      <div className={style.divContainer}>
        <h3 className="title1">Valor total:</h3>
        <h3 className="title2">
          {amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
      </div>
      <div className={style.divP}>
        <p className="subTitle2">O valor se refere ao saldo</p>
      </div>
    </section>
  );
};
