import { Col, Row } from "antd";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#C5D6BA", minHeight: "100vh", padding: "20px" }}>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", textAlign: "center" }}
      >
        <Col>
          <h1 style={{ fontSize: "64px", fontWeight: "bold", color: "#2B4B20" }}>
            LET START
          </h1>
          <button
            style={{
              backgroundColor: "#1890ff",
              color: "white",
              border: "none",
              padding: "15px 40px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => (window.location.href = "/ciper")}
          >
            GO GO
          </button>
        </Col>
      </Row>
    </div>
  );
}
