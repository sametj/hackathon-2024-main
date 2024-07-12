import { Center, Stage } from "@react-three/drei";
import styles from "../home.module.scss";
import { Canvas } from "@react-three/fiber";
import { KingPiece } from "../models/KingPiece";
import { KnightPiece } from "../models/KnightPiece";
import { QueenPiece } from "../models/QueenPiece";
import { RookPiece } from "../models/RookPiece";
import { useNavigate } from "react-router-dom";

function HomeInfo() {
  const navigate = useNavigate();
  return (
    <section className={styles["section"]}>
      <div className={styles["home-container"]}>
        <div className={styles["left-column"]}>
          <Canvas className={styles["top-left canvas"]}>
            <Center>
              <Stage>
                <KingPiece />
              </Stage>
            </Center>
          </Canvas>
          <Canvas className={styles["bottom-left canvas"]}>
            <Center rotation-y={Math.PI / 3}>
              <Stage>
                <KnightPiece />
              </Stage>
            </Center>
          </Canvas>
        </div>
        <div className="home-content">
          <h2 className={styles["home-title"]}>
            <span className="section-title">
              Discover the Ultimate Board Game Experience
            </span>
          </h2>
          <h2 className={styles["home-title"]}>
            {" "}
            <span className="section-title">500+ Games</span>
          </h2>
          <div className="section-text">
            <p>
              Join us for an unforgettable board game adventure! Access our
              collection of over 500 games for just $10 per person for 3 hours
              ($12 on Fridays, weekends, and holidays).
            </p>
            <p>
              Enhance your experience with our delicious bubble tea, coffee,
              beer, sandwiches, or salads. Reserve your spot for $15 per person
              for 3 hours of gameplay.
            </p>
          </div>
          <button
            className={styles["home-button"]}
            onClick={() => navigate("/menu")}
          >
            Check menu
          </button>
          <h4 className={styles["home-second-title"]}>New opening hours:</h4>
          <ul className={styles["home-list"]}>
            <li className={styles["home-list-item"]}>
              <span>Sunday</span>: 10am-11pm
            </li>
            <li className={styles["home-list-item"]}>
              <span>Mon-Thurs</span>: 11am-11pm
            </li>
            <li className={styles["home-list-item"]}>
              <span>Friday</span>: 11am-midnight
            </li>
            <li className={styles["home-list-item"]}>
              <span>Saturday</span>: 10am-midnight
            </li>
          </ul>
        </div>
        <div className={styles["right-column"]}>
          <Canvas className={styles["top-right canvas"]}>
            <Center>
              <Stage>
                <RookPiece scale={2} />
              </Stage>
            </Center>
          </Canvas>

          <Canvas className={styles["bottom-right canvas"]}>
            <Center>
              <Stage>
                <QueenPiece />
              </Stage>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
