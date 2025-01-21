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
import { PlusOutlined, InfoCircleOutlined, BulbOutlined } from "@ant-design/icons";
import { AnswerInterface } from "../../../interfaces/IAnswer";
import { CreateAnswer } from "../../../services/https";
import { useNavigate, Link } from "react-router-dom";
import photo1 from "../../../assets/1.jpeg";
import Cat from "../../../assets/cat.jpg";
import { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";

function CiperCreate2() {
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
<div style={{ backgroundColor: "#C5D6BA", minHeight: "100vh", padding: "20px", color: "black" }}>
  {contextHolder}
  <Card style={{ backgroundColor: "#C5D6BA", color: "black" }}>
    <h2>LEVEL 3!</h2>
    <Divider style={{ borderColor: "black" }} />

                <p>
                    <img src={Cat} alt="Level 2" style={{ width: "30%", height: "auto" }} />
                </p>
                <p>
                    เอ๊ะ! ทำไมนี่ฉันถูกสาปให้พูดให้เป็นตัวเลขทุกครั้ง
                </p>
                <img src={photo1} alt="Level 2" style={{ width: "30%", height: "auto" }} />

                <p>
                    ไฟล์เอกสารลับทางรายการ{" "}
                    <a
                        href="https://drive.google.com/file/d/1Nvt72O7myNjWwDV8Xh2xh9Avi2MEsCTC/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ล็อค !
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
                                label="Answer"
                                name="Answer"
                                rules={[{ required: true, message: "Please enter the answer!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={() => setShowDetail(!showDetail)}
                            >
                                Hint <span style={{ color: "BLUE" }}>{showDetail && "อาจารย์ CYBER"}</span>
                            </Button>
                            <Button
                                type="text"
                                icon={<InfoCircleOutlined />}
                                onClick={() => setShowDetail2(!showDetail2)}
                            >
                                Answer <span style={{ color: "green" }}>{showDetail2 && "CYBER SECURITY FUNDAMENTALS"}</span>
                                {showDetail2 && (
                                    <Button
                                        type="text"
                                        icon={<CopyOutlined />}
                                        style={{ color: "blue" }}  // Set color style for the Copy button
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

export default CiperCreate2;
