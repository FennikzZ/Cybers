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
} from "antd";
import { PlusOutlined, InfoCircleOutlined, BulbOutlined, CopyOutlined } from "@ant-design/icons";
import { AnswerInterface } from "../../../interfaces/IAnswer";
import { CreateAnswer } from "../../../services/https";
import { useNavigate } from "react-router-dom";
import Cat from "../../../assets/cat.jpg";
import photo1 from "../../../assets/1.jpeg";
import { useState } from "react";

function CiperCreate3() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [showDetail, setShowDetail] = useState(false);
    const [showDetail2, setShowDetail2] = useState(false);

    const onFinish = async (values: AnswerInterface) => {
        if (values.Answer !== "CYBER SECURITY FUNDAMENTALS") {
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
                content: "ถูกต้องนะครับ",
            });
            setTimeout(() => {
                navigate("/ciper/level4");
            }, 2000);
        } else {
            messageApi.open({
                type: "error",
                content: res.data.error || "Failed to create Answer",
            });
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        message.success("Copied to clipboard!");
    };

    return (
        <div style={{ backgroundColor: "#0D1117", minHeight: "100vh", padding: "20px", color: "black" }}>
            {contextHolder}
            <Card style={{ backgroundColor: "#0D1117", color: "white" }}>
                <h2 style={{ color: "white" }}>LEVEL 3! Symmetric Key</h2>
                <Divider style={{ borderColor: "white" }} />

                <p>
                    <img src={Cat} alt="Level 2" style={{ width: "30%", height: "auto" }} />
                </p>
                <p style={{ color: "white" }}>
                    เอ๊ะ! ทำไมนี่ฉันถูกสาปให้พูดให้เป็นตัวเลขทุกครั้ง
                </p>
                <img src={photo1} alt="Level 2" style={{ width: "30%", height: "auto" }} />

                <p style={{ color: "white" }}>
                    ทำไมกล่องนี้ถึงเปิดไม่ได้นะอ้อมีกุญแจล็อคอยู่{" "}
                    <a
                        href="https://drive.google.com/file/d/1YeX_pxqqTmbVCkU2qKylaC6ebWfo1Ebu/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#00FF7F" }}
                    >
                         (🔐)
                    </a>
                </p>

                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Row gutter={[16, 0]}>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label={<span style={{ color: 'white' }}>Answer</span>}
                                name="Answer"
                                rules={[{ required: true, message: "Please enter the answer!" }]}
                            >
                                <Input style={{ backgroundColor: "#1E1E1E", color: "#00FF7F" }} />
                            </Form.Item>
                            <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={() => setShowDetail(!showDetail)}
                                style={{ color: "#00FF7F" }}
                            >
                                Hint <span style={{ color: "white" }}>{showDetail && "ASCII"}</span>
                            </Button>
                            <Button
                                type="text"
                                icon={<InfoCircleOutlined />}
                                onClick={() => setShowDetail2(!showDetail2)}
                                style={{ color: "#00FF7F" }}
                            >
                                Answer <span style={{ color: "green" }}>{showDetail2 && "CYBER SECURITY FUNDAMENTALS"}</span>
                                {showDetail2 && (
                                    <Button
                                        type="text"
                                        icon={<CopyOutlined />}
                                        style={{ color: "white" }}
                                        onClick={() => handleCopy("CYBER SECURITY FUNDAMENTALS")}
                                    >
                                        Copy
                                    </Button>
                                )}
                            </Button>
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

export default CiperCreate3;
