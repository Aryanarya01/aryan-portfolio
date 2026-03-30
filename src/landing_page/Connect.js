// import React from "react";

// function Connect() {
//   return (
//     <div
//       className="container"
//       style={{
//         backgroundColor: "#111827",
//         minHeight: "100vh",
//         borderRadius: "27px",
//         width:"80%",
//       }}
//     >
//       <h1
//         className="py-4"
//         style={{
//           fontWeight: "800",
//           fontSize: "3rem",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         Get in <span style={{ color: "#FBBF24" }}>Touch</span>
//       </h1>
//       <div className="row">
//         <div className="col-7">
//           <h2
//             style={{
//               fontWeight: "800",
//               fontSize: "2rem",
//               color: "#fff",
//               marginLeft: "2.5rem",
//             }}
//           >
//             Send Me a Message
//           </h2>
//           <hr
//             style={{
//               marginLeft: "2.5rem",
//               marginRight: "2.5rem",
//             }}
//           ></hr>

//           {/* form */}

//           <form style={{ margin: "2.5rem" }}>
//             <input
//               style={{ height: "3.5rem" }}
//               type="text"
//               className="form-control custom-input mb-3"
//               placeholder="Your Name"
//             />
//             <input
//               style={{ height: "3.5rem" }}
//               type="email"
//               className="form-control custom-input mb-3"
//               placeholder="Your Email"
//             />
//             <input
//               style={{ height: "3.5rem" }}
//               type="text"
//               className="form-control custom-input mb-3"
//               placeholder="Subject"
//             />
//             <textarea
//               style={{ height: "11rem" }}
//               className="form-control custom-input mb-3"
//               placeholder="Your Message"
//               rows="3"
//             ></textarea>

//             <button
//               className="btn mt-2"
//               type="submit"
//               style={{
//                 backgroundColor: "#FBBF24",
//                 color: "#000",
//                 fontWeight: "900",
//                 width: "100%",
//                 height: "3.5rem",
//                 borderRadius: "0.5rem",
//               }}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* contact info */}
//         <div className="col-5">
//           <div
//             style={{
//               backgroundColor: "#0a0a0a",
//               height: "35rem",
//               width: "27rem",
//               borderRadius: "15px",
//               border: "1px solid #374151",
//             }}
//           >
//             <h2
//               style={{
//                 fontWeight: "800",
//                 fontSize: "2rem",
//                 color: "#FBBF24",
//                 margin: "2rem",
//               }}
//             >
//               Contact Info
//             </h2>

//             {/* 1st info*/}
//             <div className="d-flex align-items-center ms-4 mb-4 gap-3">
//               <span style={{ fontSize: "2rem" }}>📧</span>
//               <div>
//                 <p style={{ color: "#9ca3af", margin: 0 }}>Email Me At</p>
//                 <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
//                   aryan.arya@example.com
//                 </p>
//               </div>
//             </div>

//             {/* 2nd info */}
//             <div className="d-flex align-items-center ms-4 mb-4 gap-3">
//               <span style={{ fontSize: "2rem" }}>📞</span>
//               <div>
//                 <p style={{ color: "#9ca3af", margin: 0 }}>Call Me</p>
//                 <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
//                   +91 9389087655
//                 </p>
//               </div>
//             </div>

//             {/* 3rd info */}
//             <div className="d-flex align-items-center ms-4 mb-5 gap-3">
//               <span style={{ fontSize: "2rem" }}>📍</span>
//               <div>
//                 <p style={{ color: "#9ca3af", margin: 0 }}>Location</p>
//                 <p style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
//                   Uttrakhand, India
//                 </p>
//               </div>
//             </div>
//             <hr className="mx-4" style={{ }}></hr>

//               <div style={{ margin: "2rem",}}>
//                    <h2
//               style={{
//                 fontWeight: "800",
//                 fontSize: "1.5rem",
//                 color: "#fff",
//               }}
//             >
//               Connect on Socials
//             </h2>
//             <div>
//               <a style={{fontSize:"2rem",marginRight:"1rem"}}><i class="fa-brands fa-square-linkedin"></i></a>
//               <a style={{fontSize:"2rem",marginRight:"1rem"}}><i class="fa-brands fa-square-github"></i></a>
//               <a style={{fontSize:"2rem",marginRight:"1rem"}}><i class="fa-brands fa-square-twitter"></i></a>
//             </div>
//               </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Connect;

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
        width: "80%",
        scrollMarginTop: "100px",
        marginTop:"8rem",
      }}
      data-aos="fade-up"
    >
      <h1
        className="py-4"
        style={{
          fontWeight: "800",
          fontSize: "3rem",
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
        <div className="col-7">
          <h2
            style={{
              fontWeight: "800",
              fontSize: "2rem",
              color: "#fff",
              marginLeft: "2.5rem",
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
          <form style={{ margin: "2.5rem" }}>
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
        <div className="col-5">
          <div
            style={{
              backgroundColor: "#0a0a0a",
              height: "35rem",
              width: "27rem",
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
