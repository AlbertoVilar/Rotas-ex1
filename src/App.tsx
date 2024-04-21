import { BrowserRouter, Route, Routes } from "react-router-dom";


import Promotion from "./routes/Home/Promotion";
import Scription from "./routes/Home/Scription";
import Home from "./routes/Home/home";
import HomeBody from "./routes/Home/HomeBody";


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="scription" element={<Scription/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
 
}

export default App;
