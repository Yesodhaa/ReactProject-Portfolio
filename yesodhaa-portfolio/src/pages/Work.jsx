import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Work.css";

const workData = [
  {
    company: "Zifo",
    role: "Analyst",
    duration: "May 2025 - Present · 5 mos",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    desc: [
      "Automated error tracking by integrating AWS services with JIRA Automation, enabling real-time ticket creation via API Gateway to streamline incident management.",
      "Built and deployed a Cell Ranger pipeline after learning the NGS workflow, supporting genomic data analysis for research teams.",
      "Developed Kafka consumer and producer applications using AWS Managed Kafka, enabling secure and scalable data streaming across distributed systems.",
      "Contributed to DevOps efforts by enhancing cloud automation, optimizing deployment workflows, and supporting continuous integration practices."
    ],
    skills: "Jira · Next-Generation Sequencing (NGS) · Apache Kafka · Terraform"
  },
  {
    company: "Zifo",
    role: "Programming Analyst",
    duration: "Jul 2024 - Aug 2025 · 1 yr 2 mos",
    location: "Chennai, Tamil Nadu, India · On-site",
    desc: [
      "Spearheaded end-to-end integration projects across platforms like Benchling, In Vivo, Jira, and CenTREE, enhancing cross-system data interoperability and scientific workflow efficiency.",
      "Designed and deployed cloud-native solutions using AWS Lambda, Step Functions, S3, Secrets Manager, and DynamoDB, enabling scalable automation across research and operations.",
      "Automated complex data pipelines, reducing manual effort by over 60% and significantly improving system reliability and turnaround time.",
      "Established secure LDAP server connections for seamless data extraction, strengthening authentication workflows and integration accuracy.",
      "Partnered with scientists, engineers, and compliance teams to deliver GxP-aligned solutions that met pharmaceutical industry standards and boosted operational readiness."
    ],
    skills: "ServiceNow · Jira · GitHub · Amazon Web Services (AWS) · DevOps · Python · Terraform · AWS CloudFormation · LDAP · CenTREE"
  },
  {
    company: "Zifo",
    role: "Associate Analyst",
    duration: "Jun 2023 - Sep 2024 · 1 yr 4 mos",
    location: "Chennai, Tamil Nadu, India",
    desc: [
      "Gained deep expertise in Benchling ELN, mastering research data structures and workflows to support scientific operations in pharma environments.",
      "Engineered custom automation tools using the Benchling API to streamline metadata population, enforce data validation, and synchronize entities across systems.",
      "Led successful migration of over 6 Million records from legacy platforms (E-Notebook, IDBS) to Benchling, ensuring full data integrity and audit compliance.",
      "Resolved AWS automation-related ServiceNow incidents with 99% SLA adherence, maintaining seamless production workflows and minimizing downtime.",
      "Collaborated cross-functionally with scientists, analysts, and engineers to drive Benchling adoption, improving lab data consistency and operational readiness."
    ],
    skills: "Java · Spring Boot · Benchling · Python · MySQL · Hibernate · JDBC · Swagger API"
  }
];

const Work = () => {
  useEffect(() => {
    // Animate cards on mount
    const cards = document.querySelectorAll('.work-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), 200 + i * 200);
    });
  }, []);

  const carouselRef = useRef(null);

  useEffect(() => {
    // Animate cards on mount
    const cards = document.querySelectorAll('.work-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), 200 + i * 200);
    });

    // Infinite horizontal scroll animation
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    let reqId;
    function animateScroll() {
      if (carousel) {
        scrollAmount += 1.2;
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
      }
      reqId = requestAnimationFrame(animateScroll);
    }
    animateScroll();
    return () => cancelAnimationFrame(reqId);
  }, []);

  // Duplicate cards for infinite effect
  const cardsToShow = [...workData, ...workData];

  return (
    <section className="work-bg">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="work-title"
      >
        Work Experience
      </motion.h2>
      <div className="work-carousel" ref={carouselRef}>
        <div className="work-cards-horizontal">
          {cardsToShow.map((job, idx) => (
            <div className="work-card" key={idx}>
              <div className="work-role">{job.role}</div>
              <div className="work-company">{job.company}</div>
              <div className="work-location">{job.location}</div>
              <div className="work-duration">{job.duration}</div>
              {job.desc.map((d, i) => (
                <div className="work-desc" key={i}>{d}</div>
              ))}
              <div className="work-skills">{job.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
