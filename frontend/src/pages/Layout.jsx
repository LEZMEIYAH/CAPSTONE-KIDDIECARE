import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const hideNav = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/guardian-dashboard" || location.pathname === "/dashboard" || location.pathname === "/appointments" || location.pathname === "/patients" || location.pathname === "/chat" || location.pathname === "/notifications" || location.pathname === "/profile" || location.pathname === "/viewcalendar" || location.pathname === "/requestconsultation" || location.pathname === "/requestappointment";
  ;

  return (
    <>
      {!hideNav && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}
