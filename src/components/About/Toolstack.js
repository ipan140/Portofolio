import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiAdobe,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>

      {/* Adobe */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe title="Adobe" />
      </Col>

      {/* Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows" />
      </Col>
    </Row>
  );
}

export default Toolstack;
