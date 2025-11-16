import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top"
      style={{
        height: "65px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div class="container-fluid">
        <h1
          class="navbar-brand"
          href="#"
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.4rem",
            marginLeft: "7rem",
          }}
        >
          {" "}
          A.
          <span style={{ color: "#6366f1" }} class="text-accent">
            A.
          </span>
        </h1>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul
            class="navbar-nav ms-auto"
            style={{ marginRight: "7rem", fontSize: "1rem" }}
          >
            <li class="nav-item me-4">
              <a class="nav-link" href="#Hero" style={{ color: "#d1d5db" }}>
                Home
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#About" style={{ color: "#d1d5db" }}>
                About
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#Skill" style={{ color: "#d1d5db" }}>
                Skills
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#Project" style={{ color: "#d1d5db" }}>
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Connect" style={{ color: "#d1d5db" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
