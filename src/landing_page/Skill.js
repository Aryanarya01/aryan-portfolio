 
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiExpress, SiTypescript, SiTailwindcss,SiNextdotjs,SiRedux , SiBootstrap,SiJsonwebtokens,SiSocketdotio   } from "react-icons/si";
function Skill() {
  return (
    <div id="Skill" className="container text-center" style={{ minHeight:"70vh",scrollMarginTop: "80px"}}>
      <div className="row d-flex flex-wrap justify-content-center">
        <h2
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="600"
          style={{ fontWeight: "800", fontSize: "2.5rem" }}
        >
          Technical Skills
        </h2>

        {/* HTML */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="100"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><FaHtml5 size={35} style={{ marginTop: "5px" }} /></span>
          
        </div>

        {/* CSS */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="150"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><FaCss3Alt size={30} color="#1572B6" /></span>
           
        </div>

        {/* JS */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="200"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiJavascript size={30} color="#F7DF1E" /></span>
           
        </div>

        {/* React */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="250"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><FaReact size={30} color="#61DBFB" /></span>
          
        </div>

        {/* Node */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="300"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><FaNodeJs size={30} color="#68A063" /></span>
        </div>

        {/* Tailwind */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="350"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiTailwindcss size={30} color="#38BDF8" /></span>
        </div>

        {/* Bootstrap */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="400"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}>🅱<SiBootstrap size={30} color="#7952B3" /></span>
        </div>

        {/* MongoDB */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="450"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiMongodb size={30} color="#47A248" /></span>
        </div>

        {/* MySQL */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="500"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiMysql size={30} color="#00758F" /></span>
        </div>

        {/* GitHub */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="550"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><FaGithub size={30} color="#ffffff" /></span>
        </div>

        {/* Express */}
        <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiExpress size={30} color="#ffffff" /></span>
        </div>

        {/* typeScript */}
         <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiTypescript size={30} color="#3178C6" /></span>
        </div>

        {/* JWT */}
          <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiJsonwebtokens size={30} color="#000000" /></span>
        </div>


          {/* Nextjs */}
          <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiNextdotjs size={30} color="#ffffff" /></span>
        </div>

        {/* Redux */}
          <div
          className="skill-card"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{
            width: "7rem",
            backgroundColor: "#111827",
            height: "5rem",
            borderRadius: "15px",
            border: "1px solid #1F2937",
            marginTop:"4rem",
            margin:"1rem",
          }}
        >
          <span style={{display: "block",fontSize:"2rem",marginTop:"1rem"}}><SiRedux size={30} color="#ffffff" /></span>
        </div>

          {/* Socket.io */}
          <div
  className="skill-card"
  data-aos="zoom-in"
  data-aos-duration="600"
  data-aos-delay="200"
  style={{
    width: "7rem",
    backgroundColor: "#111827",
    height: "5rem",
    borderRadius: "15px",
    border: "1px solid #1F2937",
    marginTop: "4rem",
    margin: "1rem",
  }}
>
  <span
    style={{
      display: "block",
      fontSize: "2rem",
      marginTop: "1rem",
    }}
  >
    <SiSocketdotio size={30} color="#FFFFFF" />
  </span>
</div>

      </div>
    </div>
  );
}

export default Skill;
