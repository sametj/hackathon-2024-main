import {
  MENU_BOBA,
  MENU_COFFEE,
  MENU_HOT_BITES,
  MENU_SANDWICHES,
} from "../menuItems";
import { CoffeeCup } from "../model/CoffeeCup";
import { Boba } from "../model/Boba";
import style from "../menu.module.scss";
import { BurgerModel } from "../model/Burger";
import { Fries } from "../model/Fries";
import { MenuProps } from "../menu.types";
const BUTTONS = [
  {
    menu: MENU_COFFEE,
    model: <CoffeeCup />,
    text: "Coffee",
  },
  {
    menu: MENU_BOBA,
    model: <Boba />,
    text: "Boba",
  },
  {
    menu: MENU_SANDWICHES,
    model: <BurgerModel />,
    text: "Burgers",
  },
  {
    menu: MENU_HOT_BITES,
    model: <Fries />,
    text: "Hot Bites",
  },
];

function MenuButtons({
  setActiveMenu,
  setActiveModel,
  setResizeFix,
  resizeFix,
}: MenuProps) {
  return (
    <div className={style["btn-container"]}>
      {BUTTONS.map((btn, i) => (
        <button
          key={i}
          className={style["btn"]}
          onClick={() => {
            setActiveMenu(btn.menu);
            setActiveModel(btn.model);
            setResizeFix(!resizeFix);
          }}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default MenuButtons;
