"use client"; // Marks this as a Client Component
import Layout from "../../components/Layout"; // Import the Layout component
import AddTrainer from "../../components/AddTrainer";

const AddTrainerPage = () => {
  return (
    <Layout>
      <AddTrainer /> {/* Use the AddTrainer component here */}
    </Layout>
  );
};

export default AddTrainerPage;