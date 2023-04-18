import Add from "./pages/addData/Add";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={< Home />} />
          <Route path="/add" element={<Add />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
