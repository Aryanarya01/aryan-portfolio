 

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Connect() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div
      id="Connect"
      className="container"
      style={{
        backgroundColor: "#111827",
        minHeight: "100vh",
        borderRadius: "27px",
        width: "100%",
        maxWidth : "1200px",
        scrollMarginTop: "100px",
        marginTop:"8rem",
      }}
      data-aos="fade-up"
    >
      <h1
        className="py-4"
        style={{
          fontWeight: "800",
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
        data-aos="fade-down"
      >
        Get in <span style={{ color: "#FBBF24" }}>Touch</span>
      </h1>

      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-12 col-md-7">
          <h2 className="px-3 mt-3"
            style={{
              fontWeight: "800",
              fontSize: "2rem",
              color: "#fff",
            }}
            data-aos="fade-right"
          >
            Send Me a Message
          </h2>

          <hr
            style={{
              marginLeft: "2.5rem",
              marginRight: "2.5rem",
            }}
          ></hr>

          {/* FORM - NO AOS (NO JUMP) */}
          <form className="p-3 p-md-4">
            <input
              style={{ height: "3.5rem" }}
              type="text"
              className="form-control custom-input mb-3"
              placeholder="Your Name"
            />
            <input
              style={{ height: "3.5rem" }}
              type="email"
              className="form-control custom-input mb-3"
              placeholder="Your Email"
            />
            <input
              style={{ height: "3.5rem" }}
              type="text"
              className="form-control custom-input mb-3"
              placeholder="Subject"
            />
            <textarea
              style={{ height: "11rem" }}
              className="form-control custom-input mb-3"
              placeholder="Your Message"
              rows="3"
            ></textarea>

            <button
              className="btn mt-2"
              type="submit"
              style={{
                backgroundColor: "#FBBF24",
                color: "#000",
                fontWeight: "900",
                width: "100%",
                height: "3.5rem",
                borderRadius: "0.5rem",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-5">
          <div
            style={{
              backgroundColor: "#0a0a0a",
              height: "35rem",
              width: "100%",
              margin:"400px",
              margin : "2rem auto",
              borderRadius: "15px",
              border: "1px solid #374151",
            }}
            data-aos="fade-left"
          >
            <h2
              style={{
                fontWeight: "800",
                fontSize: "2rem",
                color: "#FBBF24",
                margin: "2rem",
              }}
            >
              Contact Info
            </h2>

            {/* 1 */}
            <div className="d-flex align-items-center ms-4 mb-4 gap-3">
              <span style={{ fontSize: "2rem" }}>📧</span>
              <div>
                <p style={{ color: "#9ca3af", margin: 0 }}>Email Me At</p>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
                  aryanaryaa2006@gmail.com
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="d-flex align-items-center ms-4 mb-4 gap-3">
              <span style={{ fontSize: "2rem" }}>📞</span>
              <div>
                <p style={{ color: "#9ca3af", margin: 0 }}>Call Me</p>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
                  +91 9389087655
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="d-flex align-items-center ms-4 mb-5 gap-3">
              <span style={{ fontSize: "2rem" }}>📍</span>
              <div>
                <p style={{ color: "#9ca3af", margin: 0 }}>Location</p>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
                  Uttrakhand, India
                </p>
              </div>
            </div>

            <hr className="mx-4"></hr>

            <div style={{ margin: "2rem" }}>
              <h2
                style={{
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                Connect on Socials
              </h2>
              <div>
                <a
                  style={{
                    fontSize: "2rem",
                    marginRight: "1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/aryan-610492330"
                >
                  <i class="fa-brands fa-square-linkedin"></i>
                </a>
                <a
                  style={{
                    fontSize: "2rem",
                    marginRight: "1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href="https://github.com/Aryanarya01"
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a
                  style={{
                    fontSize: "2rem",
                    marginRight: "1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href="https://x.com/home"
                >
                  <i class="fa-brands fa-square-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
