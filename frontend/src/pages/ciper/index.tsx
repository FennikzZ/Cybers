import { Col, Row, Button } from "antd";

export default function Index() {
  const handleStart = () => {
    window.location.href = "/ciper/level1";
  };

  return (
    <div
      style={{
        backgroundColor: "#0D1117",
        minHeight: "100vh",
        fontFamily: "'Press Start 2P', cursive",
        position: "relative",
        overflow: "hidden",
        color: "#FFFFFF",
      }}
    >
      {/* เส้นไฟวิ่ง */}
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "5px",
          background:
            "linear-gradient(90deg, rgba(0,255,127,1) 0%, rgba(34,193,195,1) 50%, rgba(0,255,127,1) 100%)",
          animation: "move 2s linear infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "5px",
          background:
            "linear-gradient(90deg, rgba(0,255,127,1) 0%, rgba(34,193,195,1) 50%, rgba(0,255,127,1) 100%)",
          animation: "move 2s linear infinite",
        }}
      ></div>

      {/* พื้นหลังเคลื่อนไหว */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(0,255,127,0.1) 10%, rgba(13,17,23,1) 90%)",
          zIndex: 1,
          animation: "pulse 6s infinite",
        }}
      ></div>

      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Col>
          {/* ข้อความหัวข้อ */}
          <h1
            style={{
              fontSize: "248px",
              fontWeight: "bold",
              color: "#00FF7F",
              textShadow: "0 0 10px #00FF7F, 0 0 20px #00FF7F",
              animation: "blink 1.5s infinite",
            }}
          >
            END GAME
          </h1>

          {/* ข้อความคำใบ้ */}
          <p
            style={{
              fontSize: "48px",
              marginBottom: "30px",
              textShadow: "0 0 5px #00FF7F",
            }}
          >
            Thank you for play game 
          </p>
        </Col>
      </Row>

      <style>
        {`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}
      </style>
    </div>
  );
}
