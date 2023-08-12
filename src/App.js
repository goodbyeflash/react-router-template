import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
