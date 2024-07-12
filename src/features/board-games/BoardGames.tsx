import BoardGameItem from "./components/BoardGameItem";
import styles from "./boardGames.module.scss";
import { BOARD_GAMES } from "@root/utils/constants";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { filterDataByName } from "@root/utils/functions";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GAMES_PER_PAGE = 7;

function BoardGames() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = filterDataByName(BOARD_GAMES, searchTerm);

  const totalPages = Math.ceil(filteredData.length / GAMES_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const currentGames = filteredData.slice(
    (currentPage - 1) * GAMES_PER_PAGE,
    currentPage * GAMES_PER_PAGE
  );

  return (
    <section className="section">
      <div className={styles["board-games-container"]}>
        <h2 className="title">Board Games</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {currentGames.map((game, i) => (
          <BoardGameItem name={game.name} key={i} />
        ))}
        <div className={styles["buttons"]}>
          <button onClick={() => handlePrevPage()}>
            <FaArrowLeft />
          </button>
          <span>{currentPage}</span>
          <button onClick={() => handleNextPage()}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BoardGames;
