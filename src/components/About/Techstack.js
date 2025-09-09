import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit } from "react-icons/di";
import { SiLaravel, SiWindows, SiPhp, SiApache } from "react-icons/si"; // Laravel, Laragon, PHP, XAMPP

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="ReactJS" />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>

      {/* Laragon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Laragon" />
      </Col>

      {/* PHP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp title="PHP" />
      </Col>

      {/* XAMPP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApache title="XAMPP" />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>

      {/* Laravel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel title="Laravel" />
      </Col>
    </Row>
  );
}

export default Techstack;
