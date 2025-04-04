
import React, { useState } from "react";
import { AppShell } from "@/components/dashboard/AppShell";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <AppShell>
      <DashboardContent />
    </AppShell>
  );
};

export default Dashboard;
