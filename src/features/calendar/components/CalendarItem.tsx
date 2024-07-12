import { useState } from "react";
import styles from "../calendar.module.scss";
import { CalendarItemProps } from "../Calendar.types";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";

function CalendarItem({ date, time, name, info }: CalendarItemProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles["calendar-item-container"]}>
      <div className={styles["calendar-item-container-flex"]}>
        <div className={styles["calendar-item-container-date"]}>
          <span>
            <MdCalendarToday /> {date}
          </span>{" "}
          <span>{time}</span>
        </div>
        <div className={styles["calendar-item-container-text"]}>
          <span className={styles["bold"]}>{name}</span>
          <button
            className={`${styles["calendar-button"]}`}
            onClick={() => setActive(!active)}
          >
            <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div
        className={`${styles["content"]} ${
          active ? styles["content-is-open"] : ""
        }`}
      >
        <div className={styles["line"]} />
        {info}
      </div>
    </div>
  );
}

export default CalendarItem;
