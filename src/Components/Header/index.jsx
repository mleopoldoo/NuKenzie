import logo from "../../assets/logo.png";
import style from "../Header/style.module.scss";

export const Header = () => {
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" />
    </div>
  );
};
