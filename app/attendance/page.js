"use client";

import React from 'react';
import Layout from '../../components/Layout';
import Attendance from '../../components/Attendance';

export default function AttendancePage() {
  return (
    <Layout>
      <div className="p-6">
        <Attendance />
      </div>
    </Layout>
  );
}