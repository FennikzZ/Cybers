import { Col, Row } from "antd";

export default function Index() {
  return (
    <div
      style={{
        backgroundColor: "#0D1117",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Press Start 2P', cursive",
        backgroundImage: "url('/path/to/your/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "35px",
          background:
            "linear-gradient(90deg, #00FF7F 0%, rgba(0,255,127,0.2) 100%)",
          animation: "moveGradient 2s infinite",
        }}
      />
      
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "calc(100vh - 5px)", // ลดความสูงจาก 100vh เป็น 5px น้อยกว่า height ของแถบโหลด
          textAlign: "center",
          position: "relative", // ทำให้ Row มีความสัมพันธ์กับตำแหน่งของแถบโหลด
        }}
      >
        <Col>
          <h1
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "#00FF7F",
              textShadow: "0 0 10px #00FF7F, 0 0 20px #00FF7F, 0 0 30px rgba(0, 255, 127, 0.6)",
              marginBottom: "20px",
            }}
          >
            MEGA REQUAZA GAME CTF!
          </h1>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "30px",
              marginBottom: "30px",
              opacity: 0.8,
            }}
          >
            Get ready to start your cipher decoding adventure!
          </p>
          <button
            style={{
              backgroundColor: "#00AA55",
              color: "#FFFFFF",
              border: "2px solid #00FF7F",
              padding: "20px 70px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "40px",
              fontWeight: "bold",
              marginTop: "20px",
              boxShadow: "0px 4px 10px rgba(0, 255, 127, 0.5)",
              transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
            }}
            onClick={() => (window.location.href = "/ciper/level1")}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0px 8px 20px rgba(0, 255, 127, 0.8)";
              e.currentTarget.style.backgroundColor = "#00FF7F";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0px 4px 10px rgba(0, 255, 127, 0.5)";
              e.currentTarget.style.backgroundColor = "#00AA55";
            }}
          >
            START
          </button>
        </Col>
      </Row>

      <Row
        justify="center"
        style={{
          position: "absolute",
          bottom: "0", // แสดงที่ด้านล่างสุด
          left: "0",
          width: "100%",
          height: "5px",
          background:
            "linear-gradient(90deg, rgba(0,255,127,0.2) 0%, #00FF7F 100%)",
          animation: "loadingBar 4s linear infinite",
        }}
      >
        <Col span={24}>
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              background: "#00FF7F",
            }}
          />
        </Col>
      </Row>

      <style>
        {`
          @keyframes loadingBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
}
