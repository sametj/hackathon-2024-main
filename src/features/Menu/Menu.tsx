import { Canvas } from "@react-three/fiber";

import style from "./menu.module.scss";
import { Resize, Stage } from "@react-three/drei";

import { useState } from "react";

import { CoffeeCup } from "./model/CoffeeCup";
import { MenuItem } from "./menu.types";
import { MENU_COFFEE } from "./menuItems";
import MenuItemList from "./components/MenuItemList";

function Menu() {
  const [activeMenu, setActiveMenu] = useState<MenuItem[]>(MENU_COFFEE);
  const [activeModel, setActiveModel] = useState(<CoffeeCup />);
  const [resizeFix, setResizeFix] = useState(false);

  return (
    <>
      <div className={style["menu-container"]}>
        <Canvas
          camera={{
            fov: 45,
            position: [3, 3, 7],
            near: 1,
            far: 1000,
          }}
          className={
            resizeFix ? style["menu-canvas"] : style["menu-canvas-fix"]
          }
        >
          <Stage>
            <Resize>{activeModel}</Resize>
          </Stage>
        </Canvas>

        <MenuItemList
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setActiveModel={setActiveModel}
          setResizeFix={setResizeFix}
          resizeFix={resizeFix}
        />
      </div>
    </>
  );
}

export default Menu;
