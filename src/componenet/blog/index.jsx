import React, { useState, useEffect } from "react";
import BlogArea from "./BlogArea";
import BLogBreadCrumb from "./BLogBreadCrumb";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { useParams } from "react-router-dom";
import BlogDetails from "./BlogDetails"
export default function Index() {
  const [blog, setBlog] = useState([]);
  useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.blogsEndpoints.blogs}`
      );

      setBlog(response?.data?.results);
    } catch (error) {
      console.log("blog api rice an error ", error);
    }
  }, []);

  const { id } = useParams();

  const getBlogById = async()=> {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.blogsEndpoints.blogs}/${id}`
      );

      return response.data
    } catch (error) {
      console.log("blog api rice an error ", error);
    }
  }


  return (
    <>
      {id ? (
       <BlogDetails getBlogById={getBlogById} />
      ) : (
        <div>
          <BLogBreadCrumb />
          <BlogArea blogs={blog} />
        </div>
      )}
    </>
  );
}
