import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home";
import Promotion from "./routes/Home/Promotion";
import Scription from "./routes/Home/Scription";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<HomeBody />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="scription" element={<Scription />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
