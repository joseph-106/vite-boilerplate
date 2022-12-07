import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Loading } from "@/components/common";
import { PATH } from "@/constants";

const Home = lazy(() => import("@/pages/Home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ALL} element={<Navigate to={PATH.HOME} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
