// app/add-member/page.js
"use client";
import Layout from "../../components/Layout"; // Import the Layout component
import AddMember from "../../components/AddMember"; // Import the AddMember component

const AddMemberPage = () => {
  return (
    <Layout>
      <AddMember /> {/* Use the AddMember component here */}
    </Layout>
  );
};

export default AddMemberPage;