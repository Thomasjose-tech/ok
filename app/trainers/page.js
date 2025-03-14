"use client";

import Layout from "../../components/Layout";
import Trainers from "../../components/Trainers";

const TrainersPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <Trainers />
      </div>
    </Layout>
  );
};

export default TrainersPage