import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { css } from "@emotion/react";
import Navbar from "../componenet/navbar/Navbar";
import Footer from "../componenet/footer/Footer";
const override = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
`;

function PublicRoute() {
  return (
    <div>
      <Navbar />
      <Suspense
        fallback={
          <PuffLoader color={"blue"} css={override} loading={true} size={150} />
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default PublicRoute;
