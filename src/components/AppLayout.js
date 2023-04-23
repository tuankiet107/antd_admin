import React from "react";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <AppHeader />
      <div className="SideMenuAndAppContent">
        <AppSidebar />
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
