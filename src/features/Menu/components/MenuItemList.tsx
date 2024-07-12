import MenuItemInfo from "./MenuItemInfo";
import style from "../menu.module.scss";
import MenuButtons from "./MenuButtons";
import { MenuProps } from "../menu.types";

function MenuItemList({
  activeMenu,
  setActiveMenu,
  setActiveModel,
  setResizeFix,
  resizeFix,
}: MenuProps) {
  return (
    <div className={style["menu-content"]}>
      <MenuButtons
        setActiveMenu={setActiveMenu}
        setActiveModel={setActiveModel}
        setResizeFix={setResizeFix}
        resizeFix={resizeFix}
      />
      {activeMenu?.map((item) => (
        <MenuItemInfo
          key={item.name}
          name={item.name}
          price={
            typeof item.price === "string" ? item.price : "Price not available"
          }
        />
      ))}
    </div>
  );
}

export default MenuItemList;
