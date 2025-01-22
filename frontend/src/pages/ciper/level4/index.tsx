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
import photo2 from "../../../assets/2.jpg";

function CiperCreate4() {
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
    if (values.Answer !== "HACKERCPE27") {
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
        navigate("/ciper/level5");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: res.data.error || "Failed to create Answer",
      });
    }
  };

  const toggleHint1 = () => setShowHint1((prev) => !prev);
  const toggleHint2 = () => setShowHint2((prev) => !prev);
  const toggleHint3 = () => setShowHint3((prev) => !prev);
  const toggleHint4 = () => setShowHint4((prev) => !prev);
  const toggleHint5 = () => setShowHint5((prev) => !prev);
  const toggleHint6 = () => setShowHint6((prev) => !prev);

  const onSecondAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCorrect = e.target.value === "DIGITECH";
    setIsSecondAnswerCorrect(isCorrect);

    if (isCorrect) {
      console.log(`KEY = MIIEpAIBAAKCAQEAjdo0wWUSRzH9CZ1lHSG6nYB8tcYx7R+6CaEKk4EfXQFKuE5e
QlnMp7fSMCODO/acLzmrp571t6LwQ72NwI2V3Vl9uDy2DHoAOKYGAdYaBEUX8YFp
ePf+0Kn2Q64Lyse+6Z5hxrOFJlGkKmjA/eij3ohySDefnlB9O40/Ro0qL8d28zms
SKmuwQPJ/E7gkobCwQm/6xHl/NxokwJHyM3+1DTkxqNDrpNTSlIKl7DTrbtyg2Be
oOg2SuH/rmmLZhzvIZTOC0N2Wfm8p6XKOXQEKNO63imsg4DJjmd8X71LIsT1P/HU
5IIqI9h91wycIJGvjiz2S18X2ucOjcfy6JgzDwIDAQABAoIBAEWYVIC7z0tpzZ0d
gSHZTf7/LnBaVF1jzvjxb0huNc6CF0A0hs9j0mJI8BEZI0ZUmE0dLMgY17IoeVuq
0LSzYl8OjH1LIAAgDSK95b2Z5vrIUVZ2KSKl/XkvofiTmAp9lH926r67jex+ap45
9dG9BUTlSbh/vcrE76Q7iNta3+M/bOaDExLf+IH7tG8zx5FlnbpJv9Tf0mSaIDQ/
2LHUf0moVcbbBZVdzbxthKnZUuZbmGHh9LpfWM//djqkWpF0Re6ONGUZAe658bMo
7muZnnlncZAM1otjibw/eKcEM95KNnAxDNg+knygYH183OQCJjrEJ/4WINIDDSxB
0JpWGIECgYEAunK6SUKuCPI8HP05whCZn0UIvzwxnmTpsDIa6yBoo+HZR6GRELIP
HZFvJUda5hshsTmNpCRhQ12mSzaqdDZUZIPU4vRz8YDaTaLTFUpK7T7MpzM0xI0k
VW0M+J/WSKjpd7tnctUH02dOVFs5hvKb1iKGdUWlywgbL6RAkqAGzoECgYEAwsS0
5LnBnGvPHN1SnjWkjMCQL9cEr9eTI+hgpACNL++P8oSL9adLTVCwJ4iBndBVIFYs
V3qOVgVFj1M5l9/4swooFUKpOvj+sPpExmPmc9ss8IEocCrMBX6k+GTpeYp6HZYw
ILERQtGFKDkKxMIiHXRv6nBRzSKC0dcoM6cAWY8CgYA3pwsn1vlvvi5nUMauwJm6
Srbjrin5Z5HBgBM8372cPUvH79gHLb8JSmHstLHTQYH7DnzS4/EMVKXQiY6zhYwH
PLqMy/7XtWh0CAgNsNFQo5Ae0FAN4ztXLGfUxpEFuzWFAbFNO31MgueEkn5HY59U
eZW8538nbVIAFH0Zxx6BAQKBgQCfX4zSGLo3//PjH6uqMCTs0+lobB62sMUDPfRO
XvEpB3OXtCQ+qF0y79KlFstRUpdFtZ3lGzD7bKblx+k5wJjmEGqKMxj9W6A1OyUp
3bdGmFNmnZl0Z2C5Ik9lvlVaEhkouqu5JIsGTSITrtGD/YMi7RNjF/On0xSPFusb
kQz1OwKBgQCG3g+/5vxSiToF+3Q0+mcDmX07biINtCEiYJfR++uSLi0wTsdMJaqM
ZL9o/WiAoSmSN4+Y2U+55PgKu2oygQPEx0Z+xVPbwX2kRUbwcsIWR9LuKBVxuyUW
qbVu0xdixOyRkQU4RrAKRqCoG615GUgjlUvzPa45kdR0BYryDiCMlg==`);
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
      <Card style={{ backgroundColor: "#0D1117", color: "#FFFFFF" }}>
        <h2>LEVEL 4! Asymmetric Key</h2>
        <Divider style={{ borderColor: "#FFFFFF" }} />
        <p>คำตอบก็อยู่สีฟ้าชั้นที่ 4</p>
        <Row align="middle" gutter={[16, 16]}>
          <Col>
            <img
              src={photo2}
              alt="Level 3"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col>
            <Space>
              <Button
                icon={<PlusOutlined />}
                onClick={toggleHint1}
                style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
              >
                Hint1
              </Button>
              {showHint1 && (
                <span style={{ color: "white", marginLeft: "8px" }}>georgeom</span>
              )}
              <Button
                icon={<BulbOutlined />}
                onClick={toggleHint2}
                style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
              >
                Answer1
              </Button>
              {showHint2 && (
                <span style={{ color: "green", marginLeft: "8px" }}>
                  TOO EASY MAK MAK
                </span>
              )}
            </Space>
          </Col>
        </Row>
        <p>
          ไฟล์เอกสารลับทางรายการ{" "}
          <a
            href="https://drive.google.com/file/d/1nEIRM-vhpUS4mWfW6sCUweWPtkwflP3V/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            ล็อค
          </a>
        </p>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={[16, 0]} align="middle">
            <Col xs={24} sm={24} md={12}>
            <Form.Item label={<span style={{ color: '#FFFFFF' }}>วงเวียน แพนกวิ้น คาเฟ่ (เมื่อตอบถูกแล้วให้ลองมองให้ลึกกว่านี้ดูสิ)</span>}>
  <Input onChange={onSecondAnswerChange} style={{ backgroundColor: "#1E1E1E", color: "#00FF7F" }} />
  {isSecondAnswerCorrect && (
    <Checkbox checked style={{ marginTop: "8px", color: "#00FF7F" }}>
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
                  <span style={{ color: "white", marginLeft: "8px" }}> ตึกใหม่</span>
                )}
                <Button
                  icon={<BulbOutlined />}
                  onClick={toggleHint4}
                  style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                >
                  Answer2
                </Button>
                {showHint4 && (
                  <span style={{ color: "green", marginLeft: "8px" }}> DIGITECH</span>
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
                  <span style={{ color: "white", marginLeft: "8px" }}>
                    สายดำคณะคอม
                  </span>
                )}
                <Button
                  icon={<BulbOutlined />}
                  onClick={toggleHint6}
                  style={{ backgroundColor: "#00FF7F", borderColor: "black" }}
                >
                  Answer
                </Button>
                {showHint6 && (
                  <span style={{ color: "green", marginLeft: "8px" }}>
                    HACKERCPE27
                  </span>
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

export default CiperCreate4;
