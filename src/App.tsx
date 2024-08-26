import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/Home"));
const GetStarted = lazy(() => import("./pages/GetStarted/GetStarted"));

function App() {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </Suspense>
  );
}

export default App;
