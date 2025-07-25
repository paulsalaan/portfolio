import Layout from "./screen/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoute = () => {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
