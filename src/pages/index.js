import * as React from "react";
import { DataType } from "../display-support/data-type";
import Layout from "../components/layout-component/Layout";
import HomePageView from "../components/home-page-component/HomePageView";

const IndexPage = () => {
  return (
    <Layout pageTitle={DataType.Home}>
      <HomePageView />
    </Layout>
  );
};

export default IndexPage;
