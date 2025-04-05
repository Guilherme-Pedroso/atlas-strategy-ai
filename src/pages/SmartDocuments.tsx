
import React, { useState } from "react";
import { AppShell } from "@/components/dashboard/AppShell";
import { SmartDocumentsContent } from "@/components/documents/SmartDocumentsContent";

const SmartDocuments = () => {
  return (
    <AppShell>
      <SmartDocumentsContent />
    </AppShell>
  );
};

export default SmartDocuments;
