import CalendarItem from "./components/CalendarItem";
import styles from "./calendar.module.scss";
const CALENDAR_DATA = [
  {
    date: "Wednesday, July 17",
    time: "6:00 PM",
    name: "Commander Night",
    info: "$10 for the whole night + a raffle- we've been raffling packs and  secret lair cards!",
  },
  {
    date: "Thursday, July 18",
    time: "7:00 PM",
    name: "Modern",
    info: "$15 entry. 2-1: 4 play boosters + promo pack. 2-0-1: 6 play boosters + promo pack. 3-0: 8 play boosters + foil promo pack. You can exchange: 4 play boosters for a free play pass. 6 play boosters for a collector booster pack",
  },
  {
    date: "Thursday, July 18",
    time: "7:00 PM",
    name: "Flesh and Blood",
    info: "More information coming soon!",
  },
  {
    date: "Saturday, July 20",
    time: "10:15 AM",
    name: "Draft",
    info: "$25 Draft pack per match win and even 0-3 gets a draft pack! 3-0 gets a foil promo pack + MONARCH and 2-1's and over get a reg promo pack.",
  },
  {
    date: "Monday, July 22",
    time: "6:00 PM",
    name: "Lorcana",
    info: "Just grab a starter deck at Sip & Play and we'll have players on hand to teach you!",
  },
  {
    date: "Friday, July 26",
    time: "6:00 PM",
    name: "Bloomburrow Pre-release",
    info: "Reseve you spot! https://square.link/u/vYewrAQG",
  },
  {
    date: "Saturday, July 27",
    time: "11:00 AM",
    name: "Bloomburrow Pre-release",
    info: "Reseve you spot! https://square.link/u/vYewrAQG",
  },
  {
    date: "Saturday, July 27",
    time: "5:00 PM",
    name: "Bloomburrow Pre-release",
    info: "Reseve you spot! https://square.link/u/vYewrAQG",
  },
  {
    date: "Monday, July 29",
    time: "6:00 PM",
    name: "Bloomburrow Pre-release",
    info: "Reseve you spot! https://square.link/u/vYewrAQG",
  },
];
function Calendar() {
  return (
    <section className="section">
      <h2 className="title">Calendar</h2>
      <div className={styles["calendar-container"]}>
        {CALENDAR_DATA.map((item, index) => (
          <CalendarItem
            key={index}
            date={item.date}
            time={item.time}
            name={item.name}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
}

export default Calendar;
