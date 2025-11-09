import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import gambar dari folder Projects
import pythonImg from "../../Assets/Projects/python logo.png";
import topupImg from "../../Assets/Projects/topup.png";
import renpyImg from "../../Assets/Projects/renpy.png";
import gofarmImg from "../../Assets/Projects/Gofarm.png";
import pastijadiImg from "../../Assets/Projects/Pastijadi.png";
import tbnImg from "../../Assets/Projects/TBN.png";
import linkkerjakuImg from "../../Assets/Projects/Linkkerjaku.png";
import rfcImg from "../../Assets/Projects/RFC.png";
import chtBotPyImg from "../../Assets/Projects/Cht bot pyton.png";
import erpFrontendImg from "../../Assets/Projects/ERP frontend.png";
import laravelImg from "../../Assets/Projects/laravel.png";
import mobileChatBotImg from "../../Assets/Projects/Mobile cht bot.png";
import peminjamanBukuImg from "../../Assets/Projects/Peminjaman buku.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa project yang sudah saya kerjakan di GitHub.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* --- Project utama --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erpFrontendImg}
              isBlog={false}
              title="Frontend ERP"
              description="Tampilan dashboard ERP menggunakan Vue dan TailwindCSS."
              ghLink="https://github.com/ipan140/Frontend-ERP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laravelImg}
              isBlog={false}
              title="Backend ERP"
              description="API backend ERP menggunakan Laravel untuk modul Sales, Accounting, HR, dan SCM."
              ghLink="https://github.com/ipan140/Backend-ERP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topupImg}
              isBlog={false}
              title="Top-up Game"
              description="Aplikasi top-up game menggunakan Laravel Blade."
              ghLink="https://github.com/ipan140/Top-up-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              isBlog={false}
              title="Aplikasi Weather"
              description="Aplikasi cuaca sederhana menggunakan Python dengan API."
              ghLink="https://github.com/ipan140/aplikasi-weather-dan-sebagainya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              isBlog={false}
              title="Aplikasi Kalkulator & Kegiatan"
              description="Aplikasi kalkulator dan manajemen kegiatan berbasis Python."
              ghLink="https://github.com/ipan140/Aplikasi-Kegiatan-kalkulatar-dan-sebagainya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              isBlog={false}
              title="Game Sederhana Python"
              description="Kumpulan game sederhana yang dibuat menggunakan Python."
              ghLink="https://github.com/ipan140/Game-sederhana-python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={renpyImg}
              isBlog={false}
              title="Visual Comic RenPy"
              description="Visual novel comic interaktif menggunakan RenPy Engine."
              ghLink="https://github.com/ipan140/visual-comic-renpy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gofarmImg}
              isBlog={false}
              title="Go-Farm Mobile"
              description="Aplikasi mobile Go-Farm berbasis JavaScript."
              ghLink="https://github.com/ipan140/Go-farm-mobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pastijadiImg}
              isBlog={false}
              title="Company Profile Pastijadi"
              description="Website company profile menggunakan Laravel Blade."
              ghLink="https://github.com/ipan140/Company-profil-pastijadi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tbnImg}
              isBlog={false}
              title="TBN Hackathon"
              description="Project untuk kompetisi Hackathon menggunakan Laravel Blade."
              ghLink="https://github.com/ipan140/TBN-Hackaton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkkerjakuImg}
              isBlog={false}
              title="LinkKerjaku Jobseeker"
              description="Platform pencari kerja berbasis Laravel Blade."
              ghLink="https://github.com/ipan140/Linkkerjaku-jobseeker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rfcImg}
              isBlog={false}
              title="RFC-CODE"
              description="Project berbasis PHP untuk belajar dan eksperimen."
              ghLink="https://github.com/ipan140/RFC-CODE"
            />
          </Col>

          {/* --- Chatbot Project --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chtBotPyImg}
              isBlog={false}
              title="Chatbot Website"
              description="Chatbot sederhana berbasis Python untuk web interface."
              ghLink="https://github.com/ipan140/chtbot_gemini_ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileChatBotImg}
              isBlog={false}
              title="Chatbot Mobile"
              description="Chatbot versi mobile menggunakan JavaScript dan React Native."
              ghLink="https://github.com/ipan140/chatbot_mobile_gemini"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peminjamanBukuImg}
              isBlog={false}
              title="Peminjaman Buku"
              description="Sistem peminjaman buku digital berbasis Laravel."
              ghLink="https://github.com/ipan140"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
