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
import { useNavigate, Link } from "react-router-dom";
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
                navigate("/");
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
            console.log(`KEY = https://www.youtube.com/watch?v=nHPp18V4S1s`);
        }
    };

    return (
<div style={{ backgroundColor: "#C5D6BA", minHeight: "100vh", padding: "20px", color: "black" }}>
  {contextHolder}
  <Card style={{ backgroundColor: "#C5D6BA", color: "black" }}>
    <h2>LEVEL 5!</h2>
    <Divider style={{ borderColor: "black" }} />
                <p>ลองดูในรูปภาพข้างในลึกๆดูสิ</p>
                <Row align="middle" gutter={[16, 16]}>
                    <Col>
                        <img
                            src={photo2}
                            alt="Level 3"
                            style={{ width: "30%", height: "auto" }}
                        />
                    </Col>
                    <Col>
                        <Button
                            // type="primary"
                            icon={<PlusOutlined />}
                            onClick={toggleHint1}
                        >
                            Hint1
                        </Button>
                        <Button
                            // type="primary"
                            icon={<BulbOutlined />}
                            onClick={toggleHint2}
                            style={{ marginLeft: "8px" }}
                        >
                            Answer
                        </Button>
                    </Col>
                </Row>
                {showHint1 && (
                    <Row>
                        <Col>
                            <p style={{ marginTop: "10px", color: "blue" }}>
                                Steganography
                            </p>
                        </Col>
                    </Row>
                )}
                {showHint2 && (
                    <Row>
                        <Col>
                            <p style={{ marginTop: "10px", color: "green" }}>
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
                            <Form.Item label="เรียนแคลอันแรกห้องโครตกว้างเลย">
                                <Input onChange={onSecondAnswerChange} />
                                {isSecondAnswerCorrect && (
                                    <Checkbox
                                        checked
                                        style={{ marginTop: "8px", color: "green" }}
                                    >
                                        Correct!
                                    </Checkbox>
                                )}
                            </Form.Item>
                        </Col>
                        <Col xs="auto">
                            <Space>
                                <Button
                                    // type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={toggleHint3}
                                >
                                    Hint2
                                </Button>
                                {showHint3 && (
                                    <span style={{ color: "blue", marginLeft: "8px" }}>1500</span>
                                )}
                                <Button
                                    // type="primary"
                                    icon={<BulbOutlined />}
                                    onClick={toggleHint4}
                                >
                                    Answer
                                </Button>
                                {showHint4 && (
                                    <span style={{ color: "green", marginLeft: "8px" }}>B4101</span>
                                )}
                            </Space>
                        </Col>
                    </Row>
                    <Row gutter={[16, 0]} align="middle">
                        <Col xs={24} sm={24} md={12}>
                            <Row justify="center">
                                <Col span={24}>
                                    <Form.Item
                                        label="Answer"
                                        name="Answer"
                                        rules={[{ required: true, message: "Please enter the answer!" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Space>
                                <Button
                                    // type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={toggleHint5}
                                >
                                    Hint3
                                </Button>
                                {showHint5 && (
                                    <span style={{ color: "blue", marginLeft: "8px" }}>ดาว TIKTOK มทส. ไม่ใช่คน</span>
                                )}
                                <Button
                                    // type="primary"
                                    icon={<BulbOutlined />}
                                    onClick={toggleHint6}
                                >
                                    Answer
                                </Button>
                                {showHint6 && (
                                    <span style={{ color: "green", marginLeft: "8px" }}>DOG</span>
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
