import React, { useState } from "react";
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
import {
  PlusOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  CopyOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { AnswerInterface } from "../../../interfaces/IAnswer";
import { CreateAnswer } from "../../../services/https";
import { useNavigate, Link } from "react-router-dom";

function CiperCreate1() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [correctStates, setCorrectStates] = useState<(boolean | null)[]>(Array(5).fill(null));
  const [hintMessages, setHintMessages] = useState<string[]>(Array(5).fill(""));
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [showAnswers, setShowAnswers] = useState<boolean[]>(Array(5).fill(false));
  const [showHints, setShowHints] = useState<boolean[]>(Array(5).fill(false));
  const [showDetail, setShowDetail] = useState(false);

  const onFinish = async (values: AnswerInterface) => {
    if (
      values.Answer !==
      "SASAMSEAN"
    ) {
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
        navigate("/ciper/level3");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: res.data.error || "Failed to create Answer",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    messageApi.open({
      type: "success",
      content: "Copied to clipboard!",
    });
  };

  const handleInputChange = (index: number, correctAnswer: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value.toUpperCase();
      setInputAnswer(inputValue);
      setCorrectStates((prevStates) => {
        const updatedStates = [...prevStates];
        if (inputValue === correctAnswer) {
          updatedStates[index] = true;
        } else if (inputValue.length === correctAnswer.length) {
          updatedStates[index] = false;
        } else {
          updatedStates[index] = null;
        }
        return updatedStates;
      });
    };

  const toggleHint = (index: number) => {
    setShowHints((prevHints) => {
      const updatedHints = [...prevHints];
      updatedHints[index] = !updatedHints[index];
      return updatedHints;
    });
  };

  const toggleAnswer = (index: number) => {
    setShowAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  const questions = [
    {
      label:
        "KEY = MICRO OS SE",
        answer: "F11",
        maxLength: 9,
        placeholder: "_ _ _",
    },
  ];

  return (
<div style={{ backgroundColor: "#C5D6BA", minHeight: "100vh", padding: "20px", color: "black" }}>
  {contextHolder}
  <Card style={{ backgroundColor: "#C5D6BA", color: "black" }}>
    <h2>LEVEL 2!</h2>
    <Divider style={{ borderColor: "black" }} />
        <p>
          ไฟล์ไหนถามใจเธอดูว{" "}
          <a
            href="https://drive.google.com/file/d/1L4dHjMMk3_n5SiBMHlRcpsayuncVvOmL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            FILE
          </a>
        </p>
          
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {questions.map((question, index) => (
            <Row key={index} gutter={[16, 0]} align="middle">
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={question.label}
                  name={`Question${index + 1}`}
                  rules={[
                    {
                      required: true,
                      message: `Please enter ${question.maxLength} characters!`,
                    },
                  ]}
                >
                  <Input
                    maxLength={question.maxLength}
                    onChange={handleInputChange(index, question.answer)}
                    placeholder={question.placeholder}
                    style={{ textTransform: "uppercase", letterSpacing: "10px" }}
                  />
                </Form.Item>
              </Col>
              <Col>
                {correctStates[index] === true && (
                  <CheckCircleOutlined style={{ color: "green", fontSize: "24px" }} />
                )}
                {correctStates[index] === false && (
                  <CloseCircleOutlined style={{ color: "red", fontSize: "24px" }} />
                )}
              </Col>
              <Col>
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  onClick={() => toggleHint(index)}
                >
                  Hint1 <span style={{ color: "blue" }}>{showHints[index] && "เป็นสถานที่"}</span>
                </Button>
              </Col>
              <Col>
                <Button
                  type="text"
                  icon={<BulbOutlined />}
                  onClick={() => toggleAnswer(index)}
                >
                  Answer1{" "}
                  <span
                    style={{ color: showAnswers[index] ? "green" : "black" }}
                  >
                    {showAnswers[index] && question.answer}
                  </span>
                </Button>
                {showAnswers[index] && (
                  <Button
                    type="link"
                    icon={<CopyOutlined />}
                    style={{ color: "blue" }}  // Set color style for the Copy button
                    onClick={() => copyToClipboard(question.answer)}
                  >
                    Copy
                  </Button>
                )}
              </Col>
            </Row>
          ))}

          <Row gutter={[16, 0]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Answer"
                name="Answer"
                initialValue={inputAnswer}
                rules={[{ required: true, message: "Please enter the answer!" }]}
              >
                <Input
                  value={inputAnswer}
                  onChange={(e) => setInputAnswer(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Col>
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={() => setShowDetail(!showDetail)}
            >
              Hint2 <span style={{ color: "red" }}>{showDetail && "เราสามารถออกกำลังกาย พายเรือได้"}</span>
            </Button>
            <Button
              type="text"
              icon={<BulbOutlined />}
              onClick={() =>
                setShowAnswers((prev) => {
                  const updated = [...prev];
                  updated[1] = !updated[1]; // Assuming Answer2 corresponds to index 1
                  return updated;
                })
              }
            >
              Answer2{" "}
              <span style={{ color: showAnswers[1] ? "green" : "black" }}>
                {showAnswers[1] &&
                  "SASAMSEAN"}
              </span>
            </Button>
            {showAnswers[1] && (
              <Button
                type="link"
                icon={<CopyOutlined />}
                style={{ color: "blue" }}  // Set color style for the Copy button
                onClick={() =>
                  copyToClipboard(
                    "SASAMSEAN"
                  )
                }
              >
                Copy
              </Button>
            )}
          </Col>

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

export default CiperCreate1;