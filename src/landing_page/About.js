// import React from "react";

// function About() {
//   return (
//     <div style={{minHeight:"100vh"}}>
//     <div
//       className="container-fluid"
//       style={{
//         backgroundColor: "#0d1320",
//         minHeight: "65vh", // height kam kar di
//         width: "75%", // width 80%
//         margin: "0 auto", // center me la diya
//         borderRadius: "20px", // optional look
//       }}
//     >
//       <div className="row">
//         <h1
//           className="mt-5 ms-5"
//           style={{
//             fontWeight: "800",
//             fontSize: "2.5rem",
//             color: "#fff",
//             textDecoration: "underline",
//             textUnderlineOffset: "15px",
//             textDecorationThickness: "1.5px",
//           }}
//         >
//           About Me
//         </h1>
//         <div className="col-5">
//           <div
//             style={{
//               width: "250px",
//               height: "250px",
//               overflow: "hidden",
//               borderRadius: "50%",
//               border: "4px solid #fff",
//               margin: "80px 40px 110px 60px",
//             }}
//           >
//             <img
//               src="/media/aryan.jpg"
//               alt="Aryan"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//         <div
//           className="col-7"
//           style={{
//             color: "#9ca3af",
//             fontSize: "1.25rem",
//             lineHeight: "1.75rem",
//           }}
//         >
//           <h4 style={{ lineHeight: "2.2rem", marginTop: "4rem" }}>
//             💡 I am a passionate Full Stack Web Developer specializing in the
//             MERN stack. I focus on delivering scalable, high-performance, and
//             visually appealing web applications.<br></br> 🌐 My current focus is
//             on MERN stack (MongoDB, Express, React, Node.js) along with
//             mastering core programming concepts.
//           </h4>
//           <div
//             style={{
//               fontSize: "1rem",
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr", // 2 equal columns
//               marginTop:"2rem",

//             }}
//           >
//             <p>
//               <span style={{ fontWeight: "700", color: "#fff" }}>Focus:</span>{" "}
//               Full Stack Development
//             </p>
//             <p>
//               <span style={{ fontWeight: "700", color: "#fff" }}>
//                 Education:
//               </span>{" "}
//               Bachelor of Technology
//             </p>
//             <p>
//               <span style={{ fontWeight: "700", color: "#fff"}}>Stack:</span>{" "}
//               MERN{" "}
//             </p>
//             <p>
//               <span style={{ fontWeight: "700", color: "#fff" }}>
//                 Location:
//               </span>{" "}
//               India
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default About;

import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="About" style={{ minHeight: "100vh",scrollMarginTop: "80px" }}>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#0d1320",
          minHeight: "65vh",
          width: "75%",
          margin: "0 auto",
          borderRadius: "20px",
        }}
        data-aos="fade-up"
      >
        <div className="row">
          <h1
            className="mt-5 ms-5"
            style={{
              fontWeight: "800",
              fontSize: "2.5rem",
              color: "#fff",
              textDecoration: "underline",
              textUnderlineOffset: "15px",
              textDecorationThickness: "1.5px",
            }}
            data-aos="fade-right"
          >
            About Me
          </h1>

          <div className="col-5" data-aos="zoom-in">
            <div
              style={{
                width: "250px",
                height: "250px",
                overflow: "hidden",
                borderRadius: "50%",
                border: "4px solid #fff",
                margin: "80px 40px 110px 60px",
              }}
            >
              <img
                src="/media/aryann.jpg"
                alt="Aryan"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            className="col-7"
            style={{
              color: "#9ca3af",
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
            }}
            data-aos="fade-left"
          >
            <h5 style={{ lineHeight: "2.2rem", marginTop: "2rem" }}>
              👋 Hi, I’m Aryan — a Full Stack Web Developer who enjoys building
              smooth, responsive, and creative web experiences.
            </h5>
            <ul
              style={{
                lineHeight: "2rem",
                marginTop: "1rem",
                paddingLeft: "1.2rem",
              }}
            >
              <li>
                🚀 I work with the MERN stack and focus on clean UI, strong
                performance, and real problem-solving.
              </li>
              <li>
                📚 I keep improving my skills by creating projects, learning new
                tools, and exploring better ways to write code.
              </li>
            </ul>

            <div
              style={{
                fontSize: "1rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginTop: "2rem",
              }}
              data-aos="fade-up"
            >
              <p>
                <span style={{ fontWeight: "700", color: "#fff" }}>Focus:</span>{" "}
                Full Stack Development
              </p>
              <p>
                <span style={{ fontWeight: "700", color: "#fff" }}>
                  Education:
                </span>{" "}
                Bachelor of Technology
              </p>
              <p>
                <span style={{ fontWeight: "700", color: "#fff" }}>Stack:</span>{" "}
                MERN{" "}
              </p>
              <p>
                <span style={{ fontWeight: "700", color: "#fff" }}>
                  Location:
                </span>{" "}
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
