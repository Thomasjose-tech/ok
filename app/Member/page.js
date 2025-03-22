import React from "react";
import MembersTable from "@/components/MembersTable"; // Adjust path if needed

const Members = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Members</h1>
      <MembersTable />
    </div>
  );
};

export default Members;
