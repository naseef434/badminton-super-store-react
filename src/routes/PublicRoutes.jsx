import React, { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { css } from "@emotion/react";
const override = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
`;

function PublicRoute() {
  return (
    <>
      {/* <CircleLoader loading={true} css={override} size={150} /> */}
      <Suspense fallback={ <PuffLoader color={"blue"} css={override} loading={true} size={150} />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default PublicRoute;
