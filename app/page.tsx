"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Moon,
  Brain,
  FileText,
  Users,
  Mail,
  Calendar,
  Target,
  BookOpen,
  Presentation,
  Download,
  Phone,
  MapPin,
  Zap,
  MessageSquare,
  Trophy,
  Activity,
  ArrowUp,
} from "lucide-react"

export default function ResearchWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopArrow, setShowTopArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowTopArrow(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["home", "domain", "milestones", "documents", "presentations", "about", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: Moon },
    { id: "domain", label: "Domain", icon: Brain },
    { id: "milestones", label: "Milestones", icon: Target },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "presentations", label: "Presentations", icon: Presentation },
    { id: "about", label: "About Us", icon: Users },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">Goodnight</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-purple-200 text-purple-900"
                        : isScrolled
                          ? "text-blue-900 hover:bg-blue-50"
                          : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Moon className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">24-25J-060 Research Project Website</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Influence of <span className="text-yellow-300">Bedtime Smartphone Use</span> on Sleep Quality
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Exploring the relationship between digital device usage before sleep and its impact on sleep patterns,
              quality, and overall well-being.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => scrollToSection("domain")}
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-8 py-3 text-lg font-semibold"
              >
                Explore Research
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("documents")}
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg bg-white/10 backdrop-blur-sm"
              >
                View Documents
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Digital Impact", desc: "Analyzing smartphone usage patterns" },
              { icon: Moon, title: "Sleep Quality", desc: "Measuring sleep duration and quality" },
              { icon: Brain, title: "Well-being", desc: "Understanding cognitive effects" },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-blue-100">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Section */}
      <section id="domain" className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Research Foundation</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Comprehensive analysis of existing literature and identification of research gaps in sleep technology studies.
            </p>
          </div>

          {/* Literature Survey */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Literature Survey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Impact of Bedtime Smartphone Use on Sleep Quality",
                  color: "bg-blue-100 text-blue-700",
                  content: (
                    <>
                      <span className="block font-semibold">Exelmans & Van den Bulck:</span> Found delayed sleep onset and shorter sleep duration linked to bedtime smartphone use.<br/>
                      <span className="block font-semibold">Carter et al.:</span> Reviewed studies confirming negative effects of screen time on sleep quality.<br/>
                      Blue light from screens suppresses melatonin, while cognitive stimulation disrupts circadian rhythms.
                    </>
                  ),
                },
                {
                  icon: Moon,
                  title: "Emotion-Aware Sleep Monitoring Systems",
                  color: "bg-purple-100 text-purple-700",
                  content: (
                    <>
                      Stress increases sleep latency and reduces REM sleep.<br/>
                      Facial emotion recognition using CNNs is emerging in real-time emotion detection.<br/>
                      <span className="block font-semibold">Zhang et al.:</span> Developed a CNN-based system that accurately detects stress-related facial expressions.
                    </>
                  ),
                },
                {
                  icon: MessageSquare,
                  title: "Chatbot-Based Interventions",
                  color: "bg-green-100 text-green-700",
                  content: (
                    <>
                      Emotional support chatbots (e.g., Woebot, Wysa) use CBT techniques to support mental health.<br/>
                      Can provide calming dialogue, track stressors, and suggest sleep-enhancing activities.<br/>
                      <span className="block font-semibold">Fulmer et al.:</span> Users of emotional chatbots experienced reduced stress and better sleep quality.
                    </>
                  ),
                },
                {
                  icon: Trophy,
                  title: "Gamification for Health and Habit Formation",
                  color: "bg-yellow-100 text-yellow-700",
                  content: (
                    <>
                      Popular platforms like Fitbit and Duolingo use gamified elements such as streaks and rewards.<br/>
                      <span className="block font-semibold">Seaborn & Fels:</span> Found increased motivation and retention through gamified systems in health apps.
                    </>
                  ),
                },
                {
                  icon: Brain,
                  title: "Machine Learning in Sleep Prediction",
                  color: "bg-pink-100 text-pink-700",
                  content: (
                    <>
                      Techniques: Neural Networks, Regression, Multi-Task Learning.<br/>
                      <span className="block font-semibold">Supratak et al.:</span> Used deep learning on EEG for automatic sleep stage classification.<br/>
                      Multi-modal models using activity, mood, and demographics improve prediction accuracy.
                    </>
                  ),
                },
                {
                  icon: Zap,
                  title: "Our Research Approach",
                  color: "bg-indigo-100 text-indigo-700",
                  content: (
                    <>
                      Multi-task learning + Polynomial Regression Layer for enhanced prediction and GANs for data augmentation.<br/>
                      Combining multiple data sources for comprehensive sleep quality assessment.
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full border border-gray-100">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-2xl ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-blue-900">{item.title}</h4>
                  <div className="text-gray-500 text-lg leading-relaxed">{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Gap */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Research Gap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
              {[
                {
                  emoji: "1️⃣",
                  title: "Emotional & Psychological Factors Are Overlooked",
                  desc: "Most apps track physical data like heart rate or sleep duration—but ignore stress and mood, which strongly influence sleep quality.",
                  gap: "Lack of systems that combine emotional state detection with real-time sleep interventions.",
                  gapIcon: "🧠",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  emoji: "2️⃣",
                  title: "Underuse of Facial Emotion Recognition",
                  desc: "Deep learning-based facial recognition (like CNNs) offers real-time mood detection, but sleep apps mostly rely on manual input.",
                  gap: "Facial emotion recognition has not been integrated into mobile sleep tracking apps for personalized support.",
                  gapIcon: "📸",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  emoji: "3️⃣",
                  title: "Chatbot Interventions Are Underexplored in Sleep",
                  desc: "While chatbots help in mental health, few are tailored to sleep improvement or respond to emotional states dynamically.",
                  gap: "Sleep chatbots lack emotional intelligence and personalized interaction based on real-time user data.",
                  gapIcon: "💬",
                  color: "bg-green-50 border-green-200",
                },
                {
                  emoji: "4️⃣",
                  title: "Gamification in Sleep Apps Is Rare",
                  desc: "Gamification boosts motivation in health apps—but sleep tools mostly stick to plain logs and charts.",
                  gap: "Minimal use of rewards, streaks, or interactive visuals to engage users in consistent sleep behavior.",
                  gapIcon: "🎮",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  emoji: "5️⃣",
                  title: "Predictive Models Are Too Narrow",
                  desc: "Most models predict sleep duration or quality separately, missing the interplay of key factors.",
                  gap: "Absence of multi-task models that predict both sleep duration & quality using emotional, behavioral, and contextual inputs.",
                  gapIcon: "🧠",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  emoji: "6️⃣",
                  title: "Poor Personalization & Feedback Loops",
                  desc: "Many systems use static rules instead of learning from user feedback or behavior over time.",
                  gap: "Lack of adaptive systems that evolve based on corrections, mood tracking, and personal sleep history.",
                  gapIcon: "🔄",
                  color: "bg-indigo-50 border-indigo-200",
                },
              ].map((item, idx) => (
                <div key={idx} className={`rounded-2xl border ${item.color} p-6 shadow-sm flex flex-col h-full bg-white`}> 
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{item.emoji}</span>
                    <span className="font-bold text-blue-900 text-base">{item.title}</span>
                  </div>
                  <div className="text-gray-500 mb-3 text-lg">{item.desc}</div>
                  <div className="flex items-center mt-auto">
                    <span className="text-lg mr-2">{item.gapIcon}</span>
                    <span className="font-semibold text-xs px-2 py-1 rounded bg-gray-100 text-blue-800">Gap:</span>
                    <span className="ml-2 text-lg text-gray-500">{item.gap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Problem */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Research Problem</h3>
            <div className="max-w-7xl mx-auto px-4">
              <div className="rounded-2xl bg-blue-50 border border-blue-200 p-8 shadow-sm text-center">
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                  How can we design a non-intrusive, adaptive, and emotion-aware system that holistically <br />
                  improves sleep quality among young adults by monitoring bedtime smartphone usage, <br />
                  providing personalized and interactive interventions, and encouraging healthier sleep habits <br />
                  through gamified engagement?
                </p>
              </div>
            </div>
          </div>

          {/* Research Objectives */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Research Objectives</h3>
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
              {[
                {
                  title: "Design & Develop a Smart Sleep Management System",
                  desc: "Create an all-in-one system using machine learning, behavioral analytics, and computer vision to improve sleep quality for young adults and students.",
                },
                {
                  title: "Predict & Visualize Sleep Patterns",
                  desc: "Use intelligent models to forecast individual sleep duration and quality—presented through intuitive and interactive visualizations.",
                },
                {
                  title: "Monitor Emotions & Stress in Real Time",
                  desc: "Utilize facial recognition (via computer vision) to detect emotional states like stress or fatigue, which impact sleep onset and continuity.",
                },
                {
                  title: "Analyze Smartphone Usage Before Sleep",
                  desc: "Track pre-bedtime smartphone habits and identify patterns that affect circadian rhythm and sleep quality.",
                },
                {
                  title: "Deliver Personalized Sleep Interventions",
                  desc: "Use a chatbot to offer tailored suggestions based on mood, behavior, and usage trends—context-aware and always accessible.",
                },
                {
                  title: "Integrate Emotion-Aware Feedback & Behavioral Nudging",
                  desc: "Combine real-time emotion tracking with subtle prompts and strategies to help users improve routines and build healthier habits.",
                },
                {
                  title: "Apply Gamification for Engagement",
                  desc: "Encourage long-term use and habit formation with rewards, streaks, and motivational visuals.",
                },
                {
                  title: "Empower Long-Term Well-being",
                  desc: "Support both physiological and psychological aspects of sleep health, promoting sustainable improvements in user lifestyle.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                  <div className="font-bold text-blue-900 mb-1 text-base">{item.title}</div>
                  <div className="text-gray-500 text-lg leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Methodology</h3>
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
              {[
                {
                  step: 1,
                  title: "Requirements Analysis",
                  points: [
                    "Problem Definition",
                    "Target User Identification (Young Adults Aged 20–30)",
                    "Functional & Non-functional Requirements",
                    "Survey Design & Data Collection",
                  ],
                },
                {
                  step: 2,
                  title: "System Architecture & Design",
                  points: [
                    "Overall System Architecture",
                    "Component-wise Architecture (Emotion Detection, Chatbot, Sleep Prediction, Visualization)",
                    "UI/UX Wireframes and Navigation Flow",
                    "Technology Stack Selection",
                  ],
                },
                {
                  step: 3,
                  title: "Integration & Communication",
                  points: [
                    "RESTful API Development (Node.js & Flask)",
                    "Database Integration (MongoDB)",
                    "Secure Data Flow between Components",
                    "Mobile App and Backend Integration",
                  ],
                },
                {
                  step: 4,
                  title: "Testing & Evaluation",
                  points: [
                    "Unit Testing (Frontend, Backend, ML Models)",
                    "Integration Testing",
                    "Model Evaluation Metrics (MAE, RMSE, Accuracy, R²)",
                    "Usability Testing with Target Users",
                    "Stress Testing and Error Handling",
                  ],
                },
                {
                  step: 5,
                  title: "Deployment",
                  points: [
                    "Mobile App Deployment (React Native + Expo)",
                    "Backend & Model Deployment (Flask API, Node.js Server)",
                    "Database Hosting (MongoDB Atlas)",
                    "LLM & Emotion Model Hosting Strategy",
                  ],
                },
                {
                  step: 6,
                  title: "Monitoring & Maintenance",
                  points: [
                    "System Monitoring (Logs, Analytics)",
                    "Feedback Handling & Iterative Improvements",
                    "Performance Monitoring of ML Models",
                  ],
                },
                {
                  step: 7,
                  title: "Commercialization & Ethical Considerations",
                  points: [
                    "Target Market & Value Proposition",
                    "User Privacy & Data Security",
                    "Ethical Use of Emotion Detection & AI",
                  ],
                },
                {
                  step: 8,
                  title: "Documentation",
                  points: [
                    "User Manuals & Guides",
                    "Research Paper & Final Report Preparation",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-3">{item.step}</span>
                    <span className="font-bold text-blue-900 text-base">{item.title}</span>
                  </div>
                  <ul className="list-disc pl-12 text-gray-500 text-lg space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Technologies Used</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              {[
                {
                  title: "Backend Technologies",
                  items: ["Node.js", "Flask", "OS (Python Library)"]
                },
                {
                  title: "Frontend Technologies",
                  items: ["React.js"]
                },
                {
                  title: "Database",
                  items: ["MongoDB"]
                },
                {
                  title: "Deep Learning & Machine Learning Libraries",
                  items: ["TensorFlow", "Keras", "Scikit-learn (sklearn)", "Pickle"]
                },
                {
                  title: "Computer Vision & Image Processing",
                  items: ["OpenCV", "Transfer Learning with CNN"]
                },
                {
                  title: "Data Handling & Analysis",
                  items: ["NumPy", "Pandas"]
                },
              ].map((cat, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col h-full">
                  <div className="font-bold text-blue-900 mb-2 text-base">{cat.title}</div>
                  <ul className="list-disc pl-5 text-gray-500 text-lg space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Project Timeline</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Research Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track the progress of our research project through key assessment points and deliverables.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Project Proposal",
                date: "March 2025",
                status: "Completed",
                marks: "15%",
                description: "Initial research proposal outlining objectives, methodology, and expected outcomes.",
              },
              {
                title: "Progress Presentation 1",
                date: "April 2025",
                status: "Completed",
                marks: "20%",
                description: "First progress review covering literature survey and preliminary findings.",
              },
              {
                title: "Progress Presentation 2",
                date: "May 2025",
                status: "In Progress",
                marks: "25%",
                description: "Second progress review with data collection results and analysis.",
              },
              {
                title: "Final Assessment",
                date: "June 2025",
                status: "Upcoming",
                marks: "30%",
                description: "Complete research findings, conclusions, and recommendations.",
              },
              {
                title: "Viva Voce",
                date: "July 2025",
                status: "Upcoming",
                marks: "10%",
                description: "Oral examination and defense of research findings.",
              },
            ].map((milestone, index) => (
              <Card key={index} className="mb-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          milestone.status === "Completed"
                            ? "bg-green-100"
                            : milestone.status === "In Progress"
                              ? "bg-yellow-100"
                              : "bg-gray-100"
                        }`}
                      >
                        <Calendar
                          className={`w-6 h-6 ${
                            milestone.status === "Completed"
                              ? "text-green-600"
                              : milestone.status === "In Progress"
                                ? "text-yellow-600"
                                : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-blue-900">{milestone.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500">{milestone.date}</span>
                          <Badge
                            variant={
                              milestone.status === "Completed"
                                ? "default"
                                : milestone.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-800">{milestone.marks}</div>
                      <div className="text-sm text-gray-500">Weight</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Documentation</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Project Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all research documents, reports, and supporting materials for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Charter",
                type: "PDF",
                size: "2.3 MB",
                status: "Available",
                description: "Initial project scope and objectives document",
              },
              {
                title: "Proposal Document",
                type: "PDF",
                size: "4.1 MB",
                status: "Available",
                description: "Comprehensive research proposal with methodology",
              },
              {
                title: "Literature Review",
                type: "PDF",
                size: "3.8 MB",
                status: "Available",
                description: "Systematic review of existing research",
              },
              {
                title: "Data Collection Forms",
                type: "PDF",
                size: "1.2 MB",
                status: "Available",
                description: "Survey forms and data collection instruments",
              },
              {
                title: "Interim Report",
                type: "PDF",
                size: "5.2 MB",
                status: "In Progress",
                description: "Mid-project progress and findings report",
              },
              {
                title: "Final Document",
                type: "PDF",
                size: "TBD",
                status: "Pending",
                description: "Complete research findings and conclusions",
              },
            ].map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <Badge
                      variant={
                        doc.status === "Available" ? "default" : doc.status === "In Progress" ? "secondary" : "outline"
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-blue-900">{doc.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <Button
                    variant={doc.status === "Available" ? "default" : "outline"}
                    disabled={doc.status !== "Available"}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {doc.status === "Available" ? "Download" : doc.status}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-200 text-purple-900 mb-4">Presentations</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Research Presentations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View slides and materials from past and upcoming research presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Proposal Presentation",
                date: "March 15, 2025",
                slides: 25,
                duration: "20 minutes",
                status: "Completed",
                description: "Initial project proposal and research methodology overview",
              },
              {
                title: "Progress Presentation 1",
                date: "April 20, 2025",
                slides: 30,
                duration: "25 minutes",
                status: "Completed",
                description: "Literature review findings and preliminary data collection",
              },
              {
                title: "Progress Presentation 2",
                date: "May 25, 2025",
                slides: 35,
                duration: "30 minutes",
                status: "Completed",
                description: "Data analysis results and initial findings discussion",
              },
              {
                title: "Final Presentation",
                date: "June 30, 2025",
                slides: 40,
                duration: "35 minutes",
                status: "Scheduled",
                description: "Complete research findings, conclusions, and recommendations",
              },
            ].map((presentation, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Presentation className="w-8 h-8 text-purple-800" />
                    <Badge
                      variant={
                        presentation.status === "Completed"
                          ? "default"
                          : presentation.status === "Upcoming"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {presentation.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{presentation.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{presentation.date}</span>
                    <span>•</span>
                    <span>{presentation.slides} slides</span>
                    <span>•</span>
                    <span>{presentation.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{presentation.description}</p>
                  <Button
                    variant={presentation.status === "Completed" ? "default" : "outline"}
                    disabled={presentation.status !== "Completed"}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {presentation.status === "Completed" ? "Download Slides" : presentation.status}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Research Team</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated research team working on understanding the impact of bedtime smartphone use on sleep
              quality.
            </p>
          </div>

          {/* Top 3 centered members */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex flex-row justify-center gap-8">
              {[
                {
                  name: "Dr. Dinuka R. Wijendra",
                  role: "Supervisor",
                  degree: "Faculty of Computing | Information Technology",
                  email: "dinuka.w@sliit.lk",
                  image: "/placeholder.svg?height=200&width=200",
                  achievements: ["AI Researcher", "Sleep Science Expert"],
                },
                {
                  name: "Ms. Chathushki Chathumali",
                  role: "Co-Supervisor",
                  degree: "Faculty of Computing | Information Technology",
                  email: "chathushki.c@sliit.lk",
                  image: "/placeholder.svg?height=200&width=200",
                  achievements: ["Biomedical Engineer", "Data Science Mentor"],
                },
                {
                  name: "Prof. Priyantha Gamini Jayasinghe",
                  role: "External Supervisor",
                  degree: "Consultant Clinical Psychologist/Psychiatrist",
                  email: "ghi.fernando@university.edu",
                  image: "/placeholder.svg?height=200&width=200",
                  achievements: ["Clinical Psychologist", "Behavioral Specialist"],
                },
              ].map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 w-72">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{member.name}</CardTitle>
                    <CardDescription className="text-purple-800 font-medium">{member.role}</CardDescription>
                    <CardDescription className="text-gray-600">{member.degree}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{member.email}</span>
                    </div>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="mr-2">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 4 members in a single row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "J A P M Jayamanne",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21058950@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Software Engineer", "Software Qualitiy Assurance Engineer"],
              },
              {
                name: "R A N M Rajapaksha",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21060830@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Software Engineer", "Qualitiy Assurance Engineer"],
              },
              {
                name: "P A D L Anjalee",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21023682@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Software Engineer", "Qualitiy Assurance Engineer"],
              },
              {
                name: "H N Siyambalapitiya",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21367458@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Software Engineer", "Business Analyst"],
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{member.name}</CardTitle>
                  <CardDescription className="text-purple-800 font-medium">{member.role}</CardDescription>
                  <CardDescription className="text-gray-600">{member.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{member.email}</span>
                  </div>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="mr-2">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white mb-4">Get in Touch</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our research? Want to collaborate or learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-blue-100 mb-2">For research inquiries and collaboration</p>
                  <a href="mailto:sleepresearch@university.edu" className="text-yellow-300 hover:text-yellow-200">
                    sleepresearch@university.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-blue-100 mb-2">Research department direct line</p>
                  <a href="tel:+1234567890" className="text-yellow-300 hover:text-yellow-200">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-blue-100 mb-2">Research facility address</p>
                  <p className="text-yellow-300">
                    University Research Center
                    <br />
                    123 Academic Drive
                    <br />
                    Research City, RC 12345
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
                <CardDescription className="text-blue-100">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Research inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-blue-800 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Goodnight Research Project</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200">© 2025 University Research Team. All rights reserved.</p>
              <p className="text-sm text-blue-300 mt-1">IT4010 Research Project - Faculty of Computing</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Arrow */}
      {showTopArrow && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
