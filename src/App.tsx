import { DarkModeProvider } from "./context/DarkModeContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes />
      </DarkModeProvider>
    </>
  );
}

export default App;
