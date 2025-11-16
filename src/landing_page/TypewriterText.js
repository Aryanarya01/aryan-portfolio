import Typewriter from "typewriter-effect";


const TypewriterText = ()=>{
    return (
        <h1 style={{ fontWeight: "700", fontSize: "3rem", color: " #fff",marginBottom: "2rem",}}>
             <Typewriter
        options={{
          strings: ["Full Stack Developer", "Computer Science Engineer.", "Tech Explorer"],
          autoStart: true,
          loop: true,
        }}
      />
        </h1>
    );
};
export default TypewriterText;