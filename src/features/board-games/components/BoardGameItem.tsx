import styles from "../boardGames.module.scss";

function BoardGameItem({ name }: { name: string }) {
  return (
    <div className={styles["board-game-item-container"]}>
      <span>{name}</span>
    </div>
  );
}

export default BoardGameItem;
