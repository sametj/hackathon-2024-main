export type MenuItem = {
  name: string;
  price?: string | { size: string }[];
  info?: string;
  extras?: { name: string; price: string }[];
};

export type MenuProps = {
  activeMenu?: MenuItem[];
  setActiveMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  setActiveModel: React.Dispatch<React.SetStateAction<JSX.Element>>;
  resizeFix: boolean;
  setResizeFix: React.Dispatch<React.SetStateAction<boolean>>;
};
