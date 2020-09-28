/* eslint-disable import/prefer-default-export */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect } from "react-router-dom";
import lazyLoad from "./loadable"

const Home = lazyLoad(()=> import("@/views/Home"))
const Recommend = lazyLoad(()=> import("@/views/Recommend"))

export const routes = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: ():JSX.Element => (
            <Redirect to="/recommend" />
        )
      },
      {
        path: "/recommend",
        component: Recommend
      }
    ]
  }
]
export default {}
