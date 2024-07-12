import style from "../menu.module.scss";
function MenuItemInfo({ name, price }: { name: string; price: string }) {
  const [newPrice1, newPrice2] = price.split("/");

  return (
    <div className={style["item-container"]}>
      <h4 className={style["title"]}>{name}</h4>

      <div className={style["flex"]}>
        <span className={style["price"]}>{newPrice1}</span>
        <span className={style["price"]}>{newPrice2}</span>
      </div>
    </div>
  );
}

export default MenuItemInfo;
