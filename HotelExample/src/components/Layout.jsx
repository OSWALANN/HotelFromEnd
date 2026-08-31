import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
import { pageTitles } from "../data/hotelData.js";

function Layout() {
  const [minimized, setMinimized] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const title = pageTitles[currentPath] ?? pageTitles["/"];

  return (
    <>
      <Sidebar minimized={minimized} onToggle={() => setMinimized((value) => !value)} />

      <main className={`contenido ${minimized ? "minimize" : ""}`}>
        <header className="topbar">
          <h1>{title}</h1>
        </header>

        <Outlet />
      </main>
    </>
  );
}

export default Layout;
