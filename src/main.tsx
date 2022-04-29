import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { NotFound } from "@/shared/NotFound";

import App from "./App";
import { root } from "./root";

import "./index.css";

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<App path={"/"} />} />
          <Route path="/active" element={<App path={"/active"} />} />
          <Route path="/completed" element={<App path={"/completed"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
