import "./App.css";
import Header from "./companents/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Watched from "./companents/Watched";
import AddMovie from "./companents/AddMovie";
import { GlobalProvider } from "./context/GlobalState";
import WatchList from "./companents/WatchList";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/" element={<AddMovie />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
