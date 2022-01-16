import * as React from "react";
import Layout from "../components/layout-component/Layout";
import HomePageView from "../components/home-page-component/HomePageView";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <HomePageView />
    </Layout>
  );
};

export default IndexPage;
