import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, DetailsPage } from "./Pages";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-[1rem] min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pokemon/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
