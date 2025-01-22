import {
    Space,
    Button,
    Col,
    Row,
    Divider,
    Form,
    Input,
    Card,
    message,
    Checkbox,
} from "antd";
import { PlusOutlined, BulbOutlined } from "@ant-design/icons";
import { AnswerInterface } from "../../../interfaces/IAnswer";
import { CreateAnswer } from "../../../services/https";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import photo2 from "../../../assets/DDD.png";

function CiperCreate5() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [showHint1, setShowHint1] = useState(false);
    const [showHint2, setShowHint2] = useState(false);
    const [showHint3, setShowHint3] = useState(false);
    const [showHint4, setShowHint4] = useState(false);
    const [showHint5, setShowHint5] = useState(false);
    const [showHint6, setShowHint6] = useState(false);
    const [isSecondAnswerCorrect, setIsSecondAnswerCorrect] = useState(false);

    const onFinish = async (values: AnswerInterface) => {
        if (values.Answer !== "DOG") {
            messageApi.open({
                type: "error",
                content: "รหัสยังไม่ถูกต้อง",
            });
            return;
        }

        let res = await CreateAnswer(values);

        if (res.status === 200) {
            messageApi.open({
                type: "success",
                content: "จบเกมแล้ว",
            });
            setTimeout(() => {
                navigate("/ciper");
            }, 2000);
        } else {
            messageApi.open({
                type: "error",
                content: res.data.error || "Failed to create Answer",
            });
        }
    };

    const toggleHint1 = () => {
        setShowHint1((prev) => !prev);
    };
    const toggleHint2 = () => {
        setShowHint2((prev) => !prev);
    };
    const toggleHint3 = () => {
        setShowHint3((prev) => !prev);
    };
    const toggleHint4 = () => {
        setShowHint4((prev) => !prev);
    };
    const toggleHint5 = () => {
        setShowHint5((prev) => !prev);
    };
    const toggleHint6 = () => {
        setShowHint6((prev) => !prev);
    };

    const onSecondAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isCorrect = e.target.value === "B4101";
        setIsSecondAnswerCorrect(isCorrect);

        if (isCorrect) {
            console.log(`กุญแจอยู่ในนี้รึเปล่าน้า https://www.youtube.com/watch?v=nHPp18V4S1s`);
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#0D1117",
                minHeight: "100vh",
                padding: "20px",
                color: "#FFFFFF",
            }}
        >
            {contextHolder}
            <Card
                style={{
                    backgroundColor: "#0D1117",
                    color: "#FFFFFF",
                }}
            >
                <h2 style={{ color: "#FFFFFF" }}>LEVEL 5!</h2>
                <Divider style={{ borderColor: "#FFFFFF" }} />
                <p>ลองดูในรูปภาพข้างในลึกๆดูสิ</p>
                <Row align="middle" gutter={[74, 16]}>
                    <Col>
                        <img
                            src={photo2}
                            alt="Level 3"
                            style={{ width: "30%", height: "auto" }}
                        />
                    </Col>
                    <Col>
                        <Button
                            icon={<PlusOutlined />}
                            onClick={toggleHint1}
                            style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                        >
                            Hint1
                        </Button>
                        <Button
                            icon={<BulbOutlined />}
                            onClick={toggleHint2}
                            style={{ marginLeft: "8px",backgroundColor: "#00FF7F", borderColor: "black" }}
                        >
                            Answer1
                        </Button>
                    </Col>
                </Row>
                {showHint1 && (
                    <Row>
                        <Col>
                            <p style={{ marginTop: "10px", color: "white" }}>
                                Steganography
                            </p>
                        </Col>
                    </Row>
                )}
                {showHint2 && (
                    <Row>
                        <Col>
                            <p style={{ marginTop: "10px", color: "#00FF7F" }}>
                                แปลงไฟล์แล้วจะได้
                            </p>
                        </Col>
                    </Row>
                )}

                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Row gutter={[16, 0]} align="middle">
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item label="เรียนแคลอันแรกห้องโครตกว้างเลย (เมื่อเจอคำตอบแล้วลองดูที่เครื่องเล่นเกมอีกรอบสิ)">
                                <Input onChange={onSecondAnswerChange} style={{ backgroundColor: "#1E1E1E", color: "#00FF7F" }} />
                                {isSecondAnswerCorrect && (
                                    <Checkbox
                                        checked
                                        style={{ marginTop: "8px", color: "#00FF7F" }}
                                    >
                                        Correct!
                                    </Checkbox>
                                )}
                            </Form.Item>
                        </Col>
                        <Col xs="auto">
                            <Space>
                                <Button
                                    icon={<PlusOutlined />}
                                    onClick={toggleHint3}
                                    style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                                >
                                    Hint2
                                </Button>
                                {showHint3 && (
                                    <span style={{ color: "white", marginLeft: "8px" }}>1500</span>
                                )}
                                <Button
                                    icon={<BulbOutlined />}
                                    onClick={toggleHint4}
                                    style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                                >
                                    Answer2
                                </Button>
                                {showHint4 && (
                                    <span style={{ color: "#00FF7F", marginLeft: "8px" }}>B4101</span>
                                )}
                            </Space>
                        </Col>
                    </Row>
                    <Row gutter={[16, 0]} align="middle">
                        <Col xs={24} sm={24} md={12}>
                            <Row justify="center">
                                <Col span={24}>
                                <Form.Item
  label={<span style={{ color: '#FFFFFF' }}>Answer</span>}
  name="Answer"
  rules={[{ required: true, message: "Please enter the answer!" }]}>
  <Input style={{ backgroundColor: "#1E1E1E", color: "#00FF7F" }} />
</Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Space>
                                <Button
                                    icon={<PlusOutlined />}
                                    onClick={toggleHint5}
                                    style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                                >
                                    Hint3
                                </Button>
                                {showHint5 && (
                                    <span style={{ color: "white", marginLeft: "8px" }}>ดาว TIKTOK มทส. ไม่ใช่คน</span>
                                )}
                                <Button
                                    icon={<BulbOutlined />}
                                    onClick={toggleHint6}
                                    style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                                >
                                    Answer3
                                </Button>
                                {showHint6 && (
                                    <span style={{ color: "#00FF7F", marginLeft: "8px" }}>DOG</span>
                                )}
                            </Space>
                        </Col>
                    </Row>

                    <Row justify="end">
                        <Col style={{ marginTop: "40px" }}>
                            <Form.Item>
                                <Space>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        icon={<PlusOutlined />}
                                        style={{ backgroundColor: "#00AA55", borderColor: "#00FF7F" }}
                                    >
                                        Submit
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
}

export default CiperCreate5;
