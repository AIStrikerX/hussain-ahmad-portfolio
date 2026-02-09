'use client'

import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode, FaCertificate, FaTrophy } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-navyblue to-darkblue text-white py-16 px-4 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">HUSSAIN AHMAD</h1>
          <h2 className="text-2xl md:text-3xl text-skyblue text-center mb-2">AI/ML Engineer | Multi-Agent Systems Specialist</h2>
          <p className="text-xl text-lightblue text-center mb-8">8th Semester BS Artificial Intelligence Student</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <a href="tel:+923491539454" className="flex items-center gap-2 hover:text-skyblue transition-colors">
              <FaPhone /> +92 349 1539454
            </a>
            <a href="mailto:hussain.ahmad667744@gmail.com" className="flex items-center gap-2 hover:text-skyblue transition-colors">
              <FaEnvelope /> hussain.ahmad667744@gmail.com
            </a>
            <a href="https://github.com/AIStrikerX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-skyblue transition-colors">
              <FaGithub /> AIStrikerX
            </a>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Islamabad, Pakistan
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Professional Summary */}
        <section className="section-card border-royalblue mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaBriefcase className="text-royalblue" />
            PROFESSIONAL SUMMARY
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <span className="font-semibold text-darkblue">Highly motivated final-year BS Artificial Intelligence student</span> at FAST NUCES Islamabad with <span className="font-semibold text-crimson">demonstrated expertise</span> in:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="text-emerald font-bold">•</span>
                <span><strong className="text-emerald">Multi-Agent AI Systems:</strong> CrewAI framework, MCP (Model Context Protocol) integration, Agent-to-Agent (A2A) communication, and collaborative AI architectures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald font-bold">•</span>
                <span><strong className="text-emerald">Production ML/DL:</strong> End-to-end ML pipelines, RLHF (Reinforcement Learning from Human Feedback) loops, transformer architectures, medical AI applications, and cloud-native deployments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald font-bold">•</span>
                <span><strong className="text-emerald">Cloud & MLOps:</strong> Google Cloud Platform (Vertex AI, BigQuery, Cloud Run), automated model retraining, CI/CD pipelines, and scalable AI infrastructure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald font-bold">•</span>
                <span><strong className="text-emerald">AI Domains:</strong> Computer Vision (medical imaging, segmentation, object detection), NLP (LLMs, RAG, sentiment analysis), Financial AI (forecasting, dataset curation), and Agentic AI workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald font-bold">•</span>
                <span><strong className="text-emerald">Full-Stack AI Development:</strong> React, NestJS, FastAPI, Streamlit; integrating AI services with production web applications</span>
              </li>
            </ul>
            <p className="pt-4">
              <strong className="text-navyblue">Technical Proficiency:</strong> PyTorch, TensorFlow, CrewAI, GCP, Docker, PostgreSQL, n8n automation, Selenium, and modern web technologies.
            </p>
            <p>
              <strong className="text-navyblue">Commitment:</strong> Passionate about continuous learning and contributing to impactful AI projects across real estate, automotive, healthcare, and financial technology domains. Proven ability to deliver production-ready systems with measurable business impact.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="section-card border-emerald mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-emerald" />
            EDUCATION
          </h2>
          
          <div className="space-y-8">
            {/* BS AI */}
            <div className="border-l-4 border-royalblue pl-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-2xl font-bold text-darkblue">Bachelor of Science in Artificial Intelligence</h3>
                <span className="text-crimson font-bold">Aug 2022 - Jun 2026 (Expected)</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <p className="text-teal italic">FAST National University of Computer & Emerging Sciences (NUCES), Islamabad</p>
                <p className="text-gray-600 italic text-sm">Currently in 8th Semester (Final Year)</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong className="text-teal">Focus Areas:</strong> Machine Learning, Deep Learning, Multi-Agent Systems, Computer Vision, Natural Language Processing, Cloud Computing</li>
                <li><strong className="text-teal">Key Coursework:</strong> Artificial Intelligence, Neural Networks, Big Data Analytics, Software Engineering, Database Systems, Web Technologies</li>
                <li><strong className="text-teal">Research Interests:</strong> Agentic AI, Medical AI, Financial Forecasting, Transformer Architectures, RLHF, MLOps</li>
              </ul>
            </div>

            {/* HSSC */}
            <div className="border-l-4 border-skyblue pl-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-2xl font-bold text-darkblue">Higher Secondary School Certificate (Pre-Engineering)</h3>
                <span className="text-crimson font-bold">Jul 2020 - Jul 2022</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <p className="text-teal italic">Punjab Group of Colleges (PGC), Blue Area, Islamabad</p>
                <p className="text-gray-600 italic text-sm">Completed</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong className="text-teal">Subjects:</strong> Mathematics, Physics, Chemistry, Computer Science</li>
                <li><strong className="text-teal">Foundation:</strong> Strong analytical and problem-solving skills developed through rigorous STEM curriculum</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section-card border-crimson mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaBriefcase className="text-crimson" />
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-8">
            {/* AAI GmbH */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-2xl font-bold text-darkblue">Machine Learning Intern - Challengers League Program</h3>
                <span className="text-crimson font-bold">Jun 2025 - Jul 2025</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <p className="text-teal italic">Automotive Artificial Intelligence (AAI) GmbH</p>
                <p className="text-gray-600 italic text-sm">Remote (International)</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-orange-500 p-4 mb-4">
                <p className="font-bold text-crimson">Challenge Project: PropWise - UK Real Estate Price Forecaster & Tax-Aware Advisory System</p>
              </div>

              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Project Leadership:</strong> Developed complete cloud-native web application forecasting UK property prices with intelligent tax-aware advisory achieving <strong>&lt;5% Mean Absolute Error (MAE)</strong></span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">ML Model Development:</strong> Implemented Google Cloud Vertex AI AutoML time-series forecasting models incorporating news sentiment analysis as covariates for enhanced prediction accuracy</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Tax Intelligence Modules:</strong> Built comprehensive tax calculation systems including SDLT, CGT, rental yield estimators fully compliant with HMRC guidelines and UK tax regulations</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">RLHF Implementation:</strong> Designed and deployed advanced RLHF pipeline with custom reward model training and PPO policy updates for continuous advisor performance improvement</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Data Engineering:</strong> Created robust ETL pipelines with web scraping automation for Rightmove and Zoopla real estate platforms, UK property news sources, and ONS economic data streaming into BigQuery</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">NLP & RAG:</strong> Deployed fine-tuned PaLM-2 conversational AI advisor with vector embeddings stored in Google Cloud Matching Engine</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Frontend Development:</strong> Built responsive React web application featuring interactive map-based property heat-maps, dynamic forecast visualization charts</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">MLOps Pipeline:</strong> Established complete end-to-end MLOps infrastructure on GCP automating daily data ingestion, weekly model retraining, fine-tuning validation</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Technologies:</strong> Google Cloud Platform (BigQuery, Vertex AI, Cloud Run, Cloud Functions, Pub/Sub), Python, React.js, TensorFlow, RLHF, NLP</span></li>
              </ul>
            </div>

            {/* Mobilink */}
            <div className="border-l-4 border-teal pl-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-2xl font-bold text-darkblue">Data Analytics Intern</h3>
                <span className="text-crimson font-bold">Aug 2024 - Sep 2024</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <p className="text-teal italic">Mobilink Microfinance Bank Limited</p>
                <p className="text-gray-600 italic text-sm">Islamabad, Pakistan</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Process Automation:</strong> Automated complex financial reporting processes using Python (Pandas, NumPy) and Excel VBA macros, achieving <strong>60% reduction in manual effort</strong></span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Data Analysis:</strong> Analyzed large-scale financial datasets (10M+ transaction records) to extract actionable business insights</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Dashboard Development:</strong> Created interactive Tableau dashboards for real-time monitoring of key performance indicators</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Technologies:</strong> Python (Pandas, NumPy, Matplotlib), Excel (VBA, Power Query), Tableau, SQL, MySQL</span></li>
              </ul>
            </div>

            {/* AIMS Lab */}
            <div className="border-l-4 border-royalblue pl-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-2xl font-bold text-darkblue">Research Intern</h3>
                <span className="text-crimson font-bold">Jul 2024</span>
              </div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <p className="text-teal italic">AIMS Lab, FAST NUCES Islamabad</p>
                <p className="text-gray-600 italic text-sm">Islamabad, Pakistan</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">AI Recruiter Project:</strong> Contributed to development of AI-powered recruitment application with focus on computer vision pipelines for resume parsing and candidate assessment</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Technical Research:</strong> Applied advanced image processing techniques including OCR, document layout analysis, and facial recognition</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Deep Learning Implementation:</strong> Implemented CNN-based models for document classification, text extraction, and automated skills matching</span></li>
                <li className="flex gap-2"><span className="text-emerald font-bold">▸</span><span><strong className="text-emerald">Technologies:</strong> Python, OpenCV, TensorFlow, Tesseract OCR, NLTK, Deep Learning</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="section-card border-royalblue mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaCode className="text-royalblue" />
            KEY PROJECTS & TECHNICAL ACHIEVEMENTS
          </h2>

          <div className="space-y-8">
            {/* Airspace Copilot */}
            <div className="project-card border-royalblue">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">Airspace Copilot - Real-Time Flight Monitoring & Intelligence System</h3>
                <span className="text-emerald italic font-semibold">Multi-Agent AI | Nov 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Project Vision:</strong> Advanced multi-agent AI system leveraging <strong>CrewAI framework</strong> with 2 specialized intelligent agents for real-time collaborative flight monitoring</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">MCP Implementation:</strong> Designed and implemented <strong>Model Context Protocol (MCP)</strong> server using FastAPI, exposing 5 standardized tools</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Agent-to-Agent Communication:</strong> Architected sophisticated <strong>A2A protocol</strong> enabling autonomous collaborative problem-solving</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Real-Time Data Integration:</strong> Integrated OpenSky Network REST API continuously monitoring <strong>1,142+ concurrent flights across 3 geographic regions</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Workflow Automation:</strong> Built comprehensive <strong>n8n workflow orchestration</strong> system automating scheduled data fetching (every 5 minutes), real-time anomaly detection</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> CrewAI, Groq LLM API, FastAPI, n8n, Streamlit, OpenSky Network API, LiteLLM, Redis, Python</span></li>
              </ul>
            </div>

            {/* AgentFinance */}
            <div className="project-card border-emerald">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">AgentFinance - Multi-Agent Financial Planning & Advisory System</h3>
                <span className="text-emerald italic font-semibold">AI Research | Nov 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Research Scope:</strong> Comprehensive research initiative for designing 4-agent financial planning system architecture</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Dataset Curation:</strong> Meticulously curated <strong>30+ production-grade financial datasets</strong> with detailed documentation</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Free-Tier API Discovery:</strong> Identified and validated <strong>10+ free-tier financial APIs</strong> including FRED (470,000+ economic indicators), yfinance, Alpha Vantage</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Database Architecture:</strong> Designed comprehensive PostgreSQL database schemas for managing <strong>12.5M+ historical stock records</strong> and <strong>14M+ economic data points</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">RAG Knowledge Base:</strong> Architected RAG system leveraging <strong>100,000+ pages</strong> of financial documentation from IRS, SEC, Investopedia</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> Python, PostgreSQL, Pandas, yfinance, FRED API, Alpha Vantage, RAG/LangChain, ChromaDB/Pinecone</span></li>
              </ul>
            </div>

            {/* Diabetic Retinopathy */}
            <div className="project-card border-crimson">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">Holy Family Hospital - Diabetic Retinopathy Detection System</h3>
                <span className="text-emerald italic font-semibold">Medical AI Research | Ongoing</span>
              </div>
              <p className="text-orange-600 font-bold mb-3">Research Collaboration: Rawalpindi Medical University & Holy Family Hospital Eye OPD Department</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Clinical Dataset:</strong> High-quality medical imaging dataset of <strong>4,092 retinal fundus images (12 megapixels resolution)</strong> captured using Artelus NFC-600 certified medical-grade fundus camera</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Expert Annotation:</strong> Hand-labeled by board-certified ophthalmologists with 10+ years clinical experience across 5 diabetic retinopathy severity classes</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Multi-Stage Pipeline:</strong> U-Net denoising → cGAN augmentation → VGG16 teacher classifier with transfer learning</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Knowledge Distillation:</strong> MobileNetV2 student model achieving <strong>97% of teacher performance, 39× smaller, 5× faster</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">External Validation:</strong> MESSIDOR-2 validation: <strong>63.07% overall accuracy and 95.1% recall for No_DR class</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Explainability:</strong> Integrated Grad-CAM visualization for model interpretability, allowing clinicians to understand diagnosis decision</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> PyTorch, TensorFlow, VGG16, MobileNetV2, U-Net, cGAN, Streamlit, OpenCV, Transfer Learning</span></li>
              </ul>
            </div>

            {/* PropWise */}
            <div className="project-card border-teal">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">PropWise - UK Real Estate Price Forecaster & Tax-Aware Advisory</h3>
                <span className="text-emerald italic font-semibold">Cloud-Native ML | Jun 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">End-to-End ML Application:</strong> Production-grade cloud-native web application forecasting UK residential property prices with intelligent tax-aware buying/rental advisory system</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">AutoML Forecasting:</strong> Vertex AI AutoML time-series forecasting models achieving <strong>&lt;5% MAE (Mean Absolute Error) accuracy</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Comprehensive Tax Modules:</strong> Built SDLT, CGT, rental yield estimators - all fully integrated with current HMRC guidelines</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">RLHF-Powered Advisor:</strong> Fine-tuned PaLM-2 language model, trained custom reward model, applied PPO policy updates</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Data Engineering Pipelines:</strong> Automated web scraping for Rightmove/Zoopla, UK property news aggregation, ONS economic indicators streaming into BigQuery</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> GCP (BigQuery, Vertex AI, Cloud Run, Cloud Functions, Pub/Sub), Python, React.js, TensorFlow, RLHF, NLP</span></li>
              </ul>
            </div>

            {/* RetinalSegNet */}
            <div className="project-card border-orange-500">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">RetinalSegNet - Lightweight Transformer-Based Retinal Segmentation</h3>
                <span className="text-emerald italic font-semibold">Deep Learning | 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Architecture Reimplementation:</strong> RetinaLiteNet - transformer-based CNN hybrid for simultaneous retinal blood vessel and optic disc segmentation</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Performance Metrics:</strong> Achieved <strong>64.96% F1-score on IOSTAR</strong> with only <strong>57,810 trainable parameters (0.22 MB model size)</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Real-Time Inference:</strong> Optimized model achieving <strong>~45ms per image on GPU, ~120ms on CPU</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Transformer Integration:</strong> Multi-Head Self-Attention encoder captures long-range dependencies; CBAM decoder refines spatial features</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> TensorFlow 2.17, Keras, Streamlit, OpenCV, Albumentations, Transformer Architectures, Medical Image Segmentation</span></li>
              </ul>
            </div>

            {/* AI Marketing Agency */}
            <div className="project-card border-navyblue">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">AI Marketing Agency Platform - Comprehensive Marketing Automation</h3>
                <span className="text-emerald italic font-semibold">Full-Stack + AI | 2025</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Backend Architecture:</strong> Enterprise-grade NestJS backend with JWT authentication, RBAC with 5 user levels, BullMQ distributed job queue</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">AI Content Services:</strong> GPT-4 powered blog/ad copy generation, DALL-E 3 automated image generation, AI-driven SEO optimization</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Social Media Automation:</strong> Advanced web scraping with Selenium for Facebook/LinkedIn/Reddit/Twitter with AI-powered reply generation using Groq API</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Marketing Intelligence:</strong> A/B testing framework, competitor analysis tools, audience segmentation using K-means clustering, predictive engagement scoring</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Payment & Auth:</strong> Integrated Stripe payment processing, OAuth 2.0 social login (Google, Facebook, LinkedIn)</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> NestJS, PostgreSQL, Prisma ORM, React, Next.js, OpenAI GPT-4 & DALL-E, Groq API, Selenium, Redis, BullMQ, Stripe, Docker</span></li>
              </ul>
            </div>

            {/* ScriptGen-AI */}
            <div className="project-card border-emerald">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">ScriptGen-AI - Trend-to-Story Automated Content Generator</h3>
                <span className="text-emerald italic font-semibold">NLP Application | 2024</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Intelligent NLP Pipeline:</strong> Multi-stage content generation workflow: Trend extraction → Topic analysis → Context understanding → AI story script generation</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Multi-Genre Support:</strong> Advanced prompt engineering for diverse content genres: comedy, sarcasm, tragedy, drama, educational</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Trend Analysis:</strong> Real-time monitoring of YouTube trending API, Google Trends regional data, Twitter trending hashtags, Reddit hot posts</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Content Workflow Automation:</strong> Automated topic selection, script generation (30s/60s/5min formats), SEO-optimized titles, hashtag recommendations</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> Python, NLTK, spaCy, YouTube Data API v3, Google Trends, OpenAI GPT models, Flask, Prompt Engineering</span></li>
              </ul>
            </div>

            {/* Chemistry OCR */}
            <div className="project-card border-royalblue">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <h3 className="text-2xl font-bold text-navyblue">Smart Chemistry Handwriting OCR - Document Digitization Tool</h3>
                <span className="text-emerald italic font-semibold">Multimodal AI | 2024</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Multimodal OCR Application:</strong> Streamlit web application converting handwritten chemistry notes into professionally formatted Microsoft Word documents using <strong>Groq's Llama 4 Maverick</strong></span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Chemistry-Specific Processing:</strong> Accurately preserves molecular formulas, chemical equations, reaction arrows, stoichiometric proportions</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Production Deployment:</strong> Live on Streamlit Community Cloud with 99.9% uptime, responsive UI for mobile/desktop</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Privacy & Security:</strong> Privacy-focused design with user-provided API keys, local image processing, encrypted HTTPS communication</span></li>
                <li className="flex gap-2"><span className="text-crimson font-bold">▸</span><span><strong className="text-crimson">Technical Stack:</strong> Streamlit, Groq Llama 4 Maverick, python-docx, OpenCV, Pillow, Vision-Language Models</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Projects */}
        <section className="section-card border-skyblue mb-12">
          <h3 className="text-2xl font-bold text-navyblue mb-6">Additional Projects & Technical Contributions</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-bold text-darkblue mb-2">BNN Traffic Sign Recognition System</h4>
              <p>Implemented Binarized Neural Networks (BNNs) using Larq framework for ultra-efficient German Traffic Sign Recognition Benchmark (GTSRB) classification. Achieved <strong>87.04% test accuracy</strong> with only <strong>13.45 KiB binary model size</strong> (1-bit weights/activations). Demonstrated 60× compression vs float32 baseline. <em>Technologies: Larq, TensorFlow, Binary Neural Networks, Edge AI, Model Compression</em></p>
            </div>
            <div>
              <h4 className="font-bold text-darkblue mb-2">Flight Departure Delay Prediction System</h4>
              <p>Built ensemble machine learning system predicting flight delays using Random Forest, XGBoost, and LightGBM. Integrated multi-source data: historical flight records (2M+ samples), real-time weather data, airport congestion metrics. Achieved 82% classification accuracy and 15-minute RMSE for delay duration. <em>Technologies: XGBoost, LightGBM, Random Forest, Pandas, Scikit-learn, Weather APIs</em></p>
            </div>
            <div>
              <h4 className="font-bold text-darkblue mb-2">Google Search & Business Data Scraper</h4>
              <p>Professional-grade web scraping framework with anti-detection mechanisms (rotating proxies, user-agent randomization), automated CAPTCHA solving (2Captcha API integration). Scraped Google Search results, Google Maps business listings, contact information extraction. <em>Technologies: Selenium, Beautiful Soup, Scrapy, Splinter, Proxy Rotation, CAPTCHA Solving, Python</em></p>
            </div>
            <div>
              <h4 className="font-bold text-darkblue mb-2">Real-Time Emotion Detection System</h4>
              <p>Built CNN-based facial emotion recognition system using FER2013 dataset (35,000 images, 7 emotions). Implemented OpenCV face detection cascade, data augmentation pipeline, ResNet-18 transfer learning. Achieved 68% accuracy on test set. <em>Technologies: OpenCV, PyTorch, ResNet, Computer Vision, Real-Time Processing</em></p>
            </div>
            <div>
              <h4 className="font-bold text-darkblue mb-2">News Article Summarization & Classification</h4>
              <p>NLP pipeline for automatic news article summarization using extractive (TextRank, LexRank) and abstractive (BART, T5) methods. Multi-class news categorization using BERT embeddings with 91% F1-score. Web scraping from 15+ news sources. <em>Technologies: BERT, Transformers, Hugging Face, NLTK, spaCy, TextRank</em></p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section-card border-darkblue mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaCode className="text-darkblue" />
            TECHNICAL SKILLS & COMPETENCIES
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-royalblue mb-2">Programming Languages</h3>
              <p>Python (Advanced), C++ (Intermediate), C# (Intermediate), JavaScript/TypeScript (Advanced), SQL (Advanced), HTML5/CSS3, Bash/Shell Scripting</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Machine Learning & Deep Learning Frameworks</h3>
              <p>TensorFlow 2.x (Advanced), PyTorch (Advanced), Keras (Advanced), Scikit-learn (Advanced), XGBoost, LightGBM, CatBoost, Larq (Binary Neural Networks), JAX</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Agentic AI & Multi-Agent Systems</h3>
              <p>CrewAI Framework (Advanced), Model Context Protocol (MCP) Implementation, Agent-to-Agent (A2A) Communication, LangChain, AutoGen, Multi-Agent Orchestration, Workflow Automation</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Cloud Platforms & MLOps</h3>
              <p>Google Cloud Platform: Vertex AI (AutoML, Custom Training, Pipelines), BigQuery, Cloud Run, Cloud Functions, Pub/Sub, Cloud Scheduler, Cloud Storage, Matching Engine | Docker Containerization | Kubernetes Basics | CI/CD Pipelines (GitHub Actions, Cloud Build) | MLOps Best Practices | Model Versioning & Monitoring</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Natural Language Processing & LLMs</h3>
              <p>Transformer Architectures (BERT, GPT, T5, BART), Large Language Models (GPT-4, PaLM-2, Llama, Claude), Fine-tuning Techniques (LoRA, QLoRA), Prompt Engineering (Advanced), RLHF, RAG, Hugging Face Transformers, LangChain, Vector Databases (ChromaDB, Pinecone, FAISS), Semantic Search, Sentiment Analysis</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Computer Vision</h3>
              <p>OpenCV (Advanced), Image Processing & Enhancement, CNNs, Object Detection (YOLO, R-CNN, SSD), Image Segmentation (U-Net, Mask R-CNN, FCN), GANs (cGAN, StyleGAN), Medical Imaging Analysis, Grad-CAM Explainability, Transfer Learning (VGG, ResNet, EfficientNet, MobileNet), Real-Time Video Processing, OCR</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Web Development & Frameworks</h3>
              <p>Frontend: React.js (Advanced), Next.js, Vue.js, HTML5/CSS3, Tailwind CSS, Bootstrap, JavaScript ES6+, TypeScript | Backend: Node.js (Advanced), NestJS (Advanced), Express.js, Flask (Advanced), FastAPI (Advanced), Django | Real-Time: WebSockets, Socket.io | API Design: RESTful APIs, GraphQL</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Data Science & Analytics</h3>
              <p>Pandas (Advanced), NumPy (Advanced), SciPy, Matplotlib, Seaborn, Plotly, Tableau, Power BI, Statistical Analysis, Time Series Forecasting (ARIMA, Prophet, LSTM), Feature Engineering, Dimensionality Reduction (PCA, t-SNE, UMAP), A/B Testing, Hypothesis Testing</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Financial Data & APIs</h3>
              <p>FRED API (Federal Reserve Economic Data - 470K+ indicators), yfinance (Yahoo Finance), Alpha Vantage, IEX Cloud, Quandl, Financial Time-Series Analysis, Stock Price Prediction, Economic Forecasting, Portfolio Optimization</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Web Scraping & Automation</h3>
              <p>Selenium WebDriver (Advanced), Beautiful Soup (Advanced), Scrapy Framework, Splinter, Puppeteer, Playwright, n8n Workflow Automation (Advanced), Anti-Detection Techniques, CAPTCHA Solving Integration, JavaScript Rendering, API Reverse Engineering</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Databases & Data Storage</h3>
              <p>Relational: PostgreSQL (Advanced), MySQL, SQLite | NoSQL: MongoDB, Redis | Cloud: Google BigQuery, Firebase | ORMs: Prisma (Advanced), SQLAlchemy, TypeORM | Vector Databases: ChromaDB, Pinecone, FAISS, Google Matching Engine</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Development Tools & Practices</h3>
              <p>Version Control: Git (Advanced), GitHub, GitLab | IDEs: VS Code (Primary), PyCharm, Jupyter Notebook/Lab, Google Colab | API Testing: Postman, Insomnia | Project Management: Agile/Scrum, Jira, Trello | Documentation: Markdown, Sphinx | Testing: pytest, unittest, Jest</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Specialized AI Techniques</h3>
              <p>Transfer Learning, Knowledge Distillation, Model Compression & Quantization (TensorFlow Lite, ONNX), Multi-Task Learning, Few-Shot Learning, Meta-Learning, Attention Mechanisms, Reinforcement Learning (Q-Learning, PPO, DQN), Neural Architecture Search (NAS), Explainable AI (LIME, SHAP, Grad-CAM)</p>
            </div>

            <div>
              <h3 className="font-bold text-royalblue mb-2">Soft Skills & Domain Knowledge</h3>
              <p>Problem-Solving & Critical Thinking, Research & Technical Documentation, Cross-Functional Team Collaboration, Agile Software Development, Technical Presentation & Communication, Time Management, Self-Directed Learning, Healthcare AI Ethics & Compliance (HIPAA), Financial Technology (FinTech) Domain Knowledge, Real Estate Analytics</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-card border-emerald mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaCertificate className="text-emerald" />
            CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-crimson">Challengers League Certificate</h3>
              <p className="italic text-gray-600 mb-2">Automotive Artificial Intelligence (AAI) GmbH (2025)</p>
              <p className="text-sm">Completed intensive AI/ML internship program focusing on cloud-native ML applications, RLHF implementation, and production deployment on Google Cloud Platform. Developed PropWise real estate forecasting system as capstone project.</p>
            </div>

            <div>
              <h3 className="font-bold text-crimson">Python Programming Beginner Course</h3>
              <p className="italic text-gray-600 mb-2">Udemy (2024)</p>
              <p className="text-sm">Comprehensive Python fundamentals covering data structures, OOP, file handling, exception management, and best practices.</p>
            </div>

            <div>
              <h3 className="font-bold text-crimson">Mastering NumPy for Data Science</h3>
              <p className="italic text-gray-600 mb-2">Udemy (2024)</p>
              <p className="text-sm">Advanced NumPy techniques including array operations, broadcasting, vectorization, linear algebra, and performance optimization.</p>
            </div>

            <div>
              <h3 className="font-bold text-crimson">Jupyter Notebook for Data Science</h3>
              <p className="italic text-gray-600 mb-2">Udemy (2024)</p>
              <p className="text-sm">Interactive computing, data visualization, markdown documentation, and reproducible research workflows.</p>
            </div>

            <div>
              <h3 className="font-bold text-crimson">Learn Audio Studio: AI-Powered Noise Cancellation Tool</h3>
              <p className="italic text-gray-600 mb-2">Udemy (2024)</p>
              <p className="text-sm">Signal processing, spectral analysis, deep learning for audio enhancement, and real-time noise reduction algorithms.</p>
            </div>

            <div>
              <h3 className="font-bold text-crimson">Introduction to Facebook Marketing & Advertising</h3>
              <p className="italic text-gray-600 mb-2">Udemy (2024)</p>
              <p className="text-sm">Digital marketing strategies, audience targeting, ad campaign optimization, analytics interpretation, and ROI measurement.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-card border-gold mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-6 flex items-center gap-3">
            <FaTrophy className="text-gold" />
            ACHIEVEMENTS & RECOGNITION
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex gap-2">
              <span className="text-crimson font-bold">▸</span>
              <p><strong className="text-crimson">Research Collaboration with Medical Institution:</strong> Selected for prestigious research collaboration with Rawalpindi Medical University and Holy Family Hospital for diabetic retinopathy AI detection system working with real clinical data</p>
            </div>

            <div className="flex gap-2">
              <span className="text-crimson font-bold">▸</span>
              <p><strong className="text-crimson">International Internship:</strong> Accepted into competitive AAI GmbH Challengers League program among global applicants, working on production-ready AI systems with international team</p>
            </div>

            <div className="flex gap-2">
              <span className="text-crimson font-bold">▸</span>
              <p><strong className="text-crimson">Production Deployments:</strong> Successfully deployed multiple AI applications to production including Chemistry OCR tool (public Streamlit app), achieving real-world user adoption</p>
            </div>

            <div className="flex gap-2">
              <span className="text-crimson font-bold">▸</span>
              <p><strong className="text-crimson">Open-Source Contributions:</strong> Active contributor to AI/ML community through GitHub repositories, technical documentation, and knowledge sharing</p>
            </div>

            <div className="flex gap-2">
              <span className="text-crimson font-bold">▸</span>
              <p><strong className="text-crimson">Multi-Domain Expertise:</strong> Demonstrated versatility across healthcare AI, financial technology, real estate analytics, and marketing automation - showcasing adaptability to diverse industry requirements</p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-navyblue to-darkblue text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">References available upon request</p>
          <p className="text-sm text-lightblue">This portfolio is current as of February 2026. For latest updates, please visit my GitHub: <a href="https://github.com/AIStrikerX" target="_blank" rel="noopener noreferrer" className="text-skyblue hover:underline">github.com/AIStrikerX</a></p>
        </div>
      </footer>
    </main>
  )
}
