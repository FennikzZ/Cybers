import {
  Space,
  Button,
  Row,
  Divider,
  Card,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const goToLevel1 = () => {
    navigate("/ciper/level1");
  };

  return (
    <div style={{ backgroundColor: "#C5D6BA", minHeight: "100vh", padding: "20px" }}>
      {contextHolder}

      <Card
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2B4B20",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          SHINY MEGA RAYQUAZA GAME!
        </h1>
        <Divider />
        <Row justify="center">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "10px 30px",
            }}
            onClick={goToLevel1}
          >
            START
          </Button>
        </Row>
      </Card>
    </div>
  );
}

export default Game;
