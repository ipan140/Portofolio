import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section flex-grow-1">
      <Particle />
      
      {/* Tombol Download di atas */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href="/CVATS_ivano.pdf"
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>

      {/* Tampilan PDF */}
      <Row className="resume">
        <Document file="/CVATS_ivano.pdf" className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
        </Document>
      </Row>

      {/* Tombol Download di bawah */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href="/CVATS_ivano.pdf"
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
