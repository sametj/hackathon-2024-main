import { ReactNode } from "react";
import Footer from "@root/layouts/footer/Footer";
import Navbar from "@root/layouts/navbar/Navbar";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles["layout-container"]}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
