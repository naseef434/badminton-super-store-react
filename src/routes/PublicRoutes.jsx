import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { css } from "@emotion/react";
function PublicRoute() {
  const override = css`
    display: block;
    margin: auto;
    border-color: red;
  `;

  return (
    <>
      {/* <CircleLoader loading={true} css={override} size={150} /> */}
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default PublicRoute;
