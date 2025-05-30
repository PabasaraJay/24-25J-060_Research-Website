"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Linkedin,
} from "lucide-react"
import Image from 'next/image'

// Add type definitions for document links and presentation links
type DocumentLinks = {
  taf: string;
  proposals: {
    [key: string]: string;
  };
  checklists: {
    [key: string]: string;
  };
  finalReports: {
    [key: string]: string;
  };
  researchPaper: string;
}

type PresentationLinks = {
  [key: string]: string;
}

export default function ResearchWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopArrow, setShowTopArrow] = useState(false)
  const [selectedMember, setSelectedMember] = useState("all")

  // Document links mapping with type
  const documentLinks: DocumentLinks = {
    taf: "https://drive.google.com/file/d/1iixsjm6lrcxWMv5-ymuCPovBGfdoufbv/view?usp=sharing",
    proposals: {
      "Proposal Document- Jayamanne J A P M": "https://drive.google.com/file/d/1jEI6ivByc-ZRofvG02Qz07t5sw0GmdKL/view?usp=sharing",
      "Proposal Document- Rajapaksha R A N M": "https://drive.google.com/file/d/181kb_hVcvRjmBBAIThw1sJRqiWQfuSpz/view?usp=sharing",
      "Proposal Document- Anjalee P A D L": "https://drive.google.com/file/d/19mAjVn4AyTaTcz8leXeD3qIO8DZOYwxZ/view?usp=sharing",
      "Proposal Document- Siyambalapitiya H N": "https://drive.google.com/file/d/1Ze-pFt7Z4-MWsc_J5XtB0Wc6e8g5Csro/view?usp=sharing"
    },
    checklists: {
      "Checklist Document 1- GitHub Repository": "https://drive.google.com/file/d/1SnXLhAm5xDTyU388m3xV6qrezLPMonKO/view?usp=sharing",
      "Checklist Document 2- MS Planner Report": "https://docs.google.com/spreadsheets/d/1cP5CC3pZ2KXxYnisQsOp6f0jM_H9nM2k/edit?usp=sharing&ouid=102714868014154463240&rtpof=true&sd=true"
    },
    finalReports: {
      "Final Report- Jayamanne J A P M": "https://drive.google.com/file/d/15lhl5wpz4Jt--WV1pjIVyRe319thtOBW/view?usp=sharing",
      "Final Report- Rajapaksha R A N M": "https://drive.google.com/file/d/11Tp59AWDR8HqVzli7WyUZiz9bLTd9Gkt/view?usp=share_link",
      "Final Report- Anjalee P A D L": "https://drive.google.com/file/d/1nbl030zwy4DMyx8Cg0bpdUmaaLuuIYeT/view?usp=sharing",
      "Final Report- Siyambalapitiya H N": "https://drive.google.com/file/d/1Mn8tQYeHFoklFiobxrj-l_10VxmX1x9L/view?usp=share_link",
    },
    researchPaper: "https://drive.google.com/file/d/1R4fviALhwAf4XHfSw8_LrNV0CXLO5Mvb/view?usp=sharing"
  }

  // Presentation links mapping
  const presentationLinks: PresentationLinks = {
    "Proposal Presentation": "https://docs.google.com/presentation/d/1iwtxLMjUcIAqy9SfmQ8czaM4Ujj8YUgR/edit?usp=drive_link&ouid=102714868014154463240&rtpof=true&sd=true",
    "Progress Presentation 1": "https://docs.google.com/presentation/d/1vGhIqk5dsW5p9zFLxi344PxSDzWAi_Wb/edit?usp=drive_link&ouid=102714868014154463240&rtpof=true&sd=true",
    "Progress Presentation 2": "https://docs.google.com/presentation/d/1bEJC4GmONhKa7TlfyrJ-g2e8q-RsufhR/edit?usp=drive_link&ouid=102714868014154463240&rtpof=true&sd=true",
    "Final Presentation": "https://docs.google.com/presentation/d/1Y4CEUm7GlPdiMCEzI7GYq4NhQdMylWDl/edit?usp=drive_link&ouid=102714868014154463240&rtpof=true&sd=true"
  }

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

  const teamMembers = [
    { id: "all", name: "All Members" },
    { id: "it21058950", name: "J A P M Jayamanne" },
    { id: "it21060830", name: "R A N M Rajapaksha" },
    { id: "it21023682", name: "P A D L Anjalee" },
    { id: "it21367458", name: "H N Siyambalapitiya" },
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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
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
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      activeSection === item.id
                        ? "bg-blue-200 text-blue-900"
                        : isScrolled
                          ? "text-blue-900 hover:bg-blue-50"
                          : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-5 h-5 text-yellow-300" />
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
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20 group">
                <CardHeader className="text-center">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-yellow-300">{item.title}</CardTitle>
                  <CardDescription className="text-blue-100 transition-colors duration-300 group-hover:text-white">{item.desc}</CardDescription>
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
            <p className="text-lg md:text-xl text-gray-500 mx-auto">
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
                      Exelmans & Van den Bulck Found delayed sleep onset and shorter sleep duration linked to bedtime smartphone use.<br/>
                      Carter Reviewed studies confirming negative effects of screen time on sleep quality.<br/>
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
                      Zhang Developed a CNN-based system that accurately detects stress-related facial expressions.
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
                      Fulmer Got Users of emotional chatbots experienced reduced stress and better sleep quality.
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
                      Seaborn & Fels Found increased motivation and retention through gamified systems in health apps.
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
                      Supratak Used deep learning on EEG for automatic sleep stage classification.<br/>
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
                <div key={idx} className={`rounded-2xl border p-6 shadow-sm flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-200 group`}> 
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-2xl ${item.color} transform transition-transform duration-300 group-hover:scale-110`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{item.title}</h4>
                  </div>
                  <div className="text-gray-500 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{item.content}</div>
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
                <div key={idx} className={`rounded-2xl border p-6 shadow-sm flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-200 group`}> 
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2 transform transition-transform duration-300 group-hover:scale-110">{item.emoji}</span>
                    <span className="font-bold text-blue-900 text-base transition-colors duration-300 group-hover:text-blue-700">{item.title}</span>
                  </div>
                  <div className="text-gray-500 mb-3 text-lg transition-colors duration-300 group-hover:text-gray-700">{item.desc}</div>
                  <div className="flex items-center mt-auto">
                    <span className="text-lg mr-2 transform transition-transform duration-300 group-hover:scale-110">{item.gapIcon}</span>
                    <span className="font-semibold text-xs px-2 py-1 rounded bg-gray-100 text-blue-800 transition-colors duration-300 group-hover:bg-blue-100">Gap:</span>
                    <span className="ml-2 text-lg text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{item.gap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Problem */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Research Problem</h3>
            <div className="max-w-7xl mx-auto px-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 text-blue-200 opacity-50">
                  <Moon className="w-full h-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 text-blue-200 opacity-50">
                  <Smartphone className="w-full h-full" />
                </div>
                
                {/* Main content card */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 shadow-lg transform transition-all duration-200 hover:shadow-md hover:border-blue-300 group">
                  {/* Problem statement header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-200 mb-4 transition-transform duration-200 group-hover:bg-blue-100">
                      <Brain className="w-8 h-8 text-blue-700" />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2 transition-colors duration-200 group-hover:text-blue-800">
                      Core Research Challenge
                    </h4>
                    <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full"></div>
                  </div>

                  {/* Problem statement */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed transition-colors duration-200 group-hover:text-gray-700 text-center">
                      How can we design a non-intrusive, adaptive, and emotion-aware system that holistically 
                      improves sleep quality among young adults?
                    </p>

                    {/* Key aspects */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {[
                        {
                          icon: Smartphone,
                          title: "Smartphone Usage",
                          desc: "Monitoring bedtime device habits and their impact"
                        },
                        {
                          icon: Brain,
                          title: "Emotional Awareness",
                          desc: "Detecting and responding to user's emotional state"
                        },
                        {
                          icon: Activity,
                          title: "Sleep Quality",
                          desc: "Improving overall sleep patterns and duration"
                        }
                      ].map((aspect, idx) => (
                        <div key={idx} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-blue-100 transition-all duration-200 hover:shadow-sm hover:border-blue-200">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center transition-colors duration-200 hover:bg-blue-50">
                              <aspect.icon className="w-5 h-5 text-blue-700" />
                            </div>
                            <h5 className="font-semibold text-blue-900 transition-colors duration-200 hover:text-blue-800">{aspect.title}</h5>
                          </div>
                          <p className="text-gray-600 text-sm">{aspect.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Research focus */}
                    <div className="mt-8">
                      <h5 className="font-semibold text-blue-900 mb-6 flex items-center justify-center text-lg">
                        <Target className="w-6 h-6 mr-2 text-blue-700" />
                        Research Focus Areas
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            icon: MessageSquare,
                            title: "Personalized Interventions",
                            description: "Customized sleep improvement strategies based on individual patterns and preferences",
                            features: [
                              "Adaptive chatbot interactions",
                              "Context-aware suggestions",
                              "Personalized sleep schedules"
                            ]
                          },
                          {
                            icon: Brain,
                            title: "Emotion Detection",
                            description: "Real-time emotional state monitoring and response system",
                            features: [
                              "Facial expression analysis",
                              "Stress level detection",
                              "Mood-based interventions"
                            ]
                          },
                          {
                            icon: Trophy,
                            title: "Gamified Engagement",
                            description: "Interactive elements to encourage consistent sleep habits",
                            features: [
                              "Achievement system",
                              "Progress tracking",
                              "Reward mechanisms"
                            ]
                          },
                          {
                            icon: Activity,
                            title: "Sleep Quality Assessment",
                            description: "Comprehensive monitoring and analysis of sleep patterns",
                            features: [
                              "Sleep stage tracking",
                              "Quality metrics analysis",
                              "Pattern recognition"
                            ]
                          }
                        ].map((focus, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-blue-100 transition-all duration-200 hover:shadow-sm hover:border-blue-200 group"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transition-colors duration-200 group-hover:from-blue-50 group-hover:to-blue-100">
                                <focus.icon className="w-6 h-6 text-blue-700" />
                              </div>
                              <div className="flex-1">
                                <h6 className="font-semibold text-blue-900 text-lg mb-1 transition-colors duration-200 group-hover:text-blue-800">
                                  {focus.title}
                                </h6>
                                <p className="text-gray-600 text-sm mb-3">
                                  {focus.description}
                                </p>
                                <ul className="space-y-2">
                                  {focus.features.map((feature, featureIdx) => (
                                    <li 
                                      key={featureIdx} 
                                      className="flex items-center text-sm text-gray-600 transition-colors duration-200 group-hover:text-gray-700"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
                <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-200 group">
                  <div className="font-bold text-blue-900 mb-1 text-base transition-colors duration-300 group-hover:text-blue-700">{item.title}</div>
                  <div className="text-gray-500 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{item.desc}</div>
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
                <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-200 group">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold mr-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">{item.step}</span>
                    <span className="font-bold text-blue-900 text-base transition-colors duration-300 group-hover:text-blue-700">{item.title}</span>
                  </div>
                  <ul className="list-disc pl-12 text-gray-500 text-lg space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="transition-colors duration-300 group-hover:text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-0">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Technologies Used</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-[1400px] mx-auto px-4">
              {[
                {
                  name: "Python",
                  image: "/tech/python.png",
                },
                {
                  name: "React",
                  image: "/tech/react.png",
                },
                {
                  name: "Node",
                  image: "/tech/nodejs.png",
                },
                {
                  name: "TensorFlow",
                  image: "/tech/tensorflow.png",
                },
                {
                  name: "Flask",
                  image: "/tech/flask.png",
                },
                {
                  name: "Keras",
                  image: "/tech/keras.png",
                },
                {
                  name: "MongoDB",
                  image: "/tech/mongodb.png",
                },
                {
                  name: "OpenCV",
                  image: "/tech/opencv.png",
                },
                {
                  name: "Docker",
                  image: "/tech/docker.png",
                },
                {
                  name: "NumPy",
                  image: "/tech/numpy.png",
                },
                {
                  name: "Pandas",
                  image: "/tech/pandas.png",
                },
                {
                  name: "Google Colab",
                  image: "/tech/colab.png",
                }
              ].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center p-2 text-center transition-all duration-200 group"
                >
                  <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 overflow-hidden">
                    <Image 
                      src={tech.image} 
                      alt={`${tech.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-blue-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Project Timeline</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Research Milestones</h2>
            <p className="text-xl text-gray-600 mx-auto">
              Track the progress of our research project through key assessment points and deliverables.
            </p>
          </div>

          <div className="relative max-w-full mx-auto px-4 pt-8">
            {/* Vertical line connecting milestones */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-300 md:left-1/2 md:-translate-x-1/2"></div>

            {[
              {
                title: "TAF Presentation",
                date: "March 2025",
                status: "Completed",
                marks: "10%",
                description: "Topic Assessment Form presentation to finalize the research topic and scope.",
              },
              {
                title: "Project Proposal",
                date: "March 2025",
                status: "Completed",
                marks: "15%",
                description: "Initial research proposal outlining objectives, methodology, and expected outcomes.",
              },
              {
                title: "Progress Presentation I",
                date: "April 2025",
                status: "Completed",
                marks: "20%",
                description: "First progress review covering literature survey and preliminary findings.",
              },
              {
                title: "Progress Presentation II",
                date: "May 2025",
                status: "Completed",
                marks: "25%",
                description: "Second progress review with data collection results and analysis.",
              },
               {
                title: "Research Paper",
                date: "June 2025",
                status: "Completed",
                marks: "N/A",
                description: "Submission of the final research paper detailing the project, findings, and conclusions.",
              },
              {
                title: "Final Report",
                date: "June 2025",
                status: "Completed",
                marks: "N/A",
                description: "Submission of the comprehensive final report document.",
              },
              {
                title: "Website Assessment",
                date: "June 2025",
                status: "Completed",
                marks: "N/A",
                description: "Assessment of the research project website.",
              },
              {
                title: "Final Presentation & Viva",
                date: "July 2025",
                status: "Completed",
                marks: "40%",
                description: "Final presentation and oral defense of the research findings and project.",
              },
              {
                title: "Logbook",
                date: "Ongoing",
                status: "Completed",
                marks: "N/A",
                description: "Maintain a detailed logbook documenting research activities and progress.",
              },
            ].map((milestone, index) => (
              <div key={index} className="mb-8 flex w-full items-center md:justify-between md:odd:flex-row-reverse group relative">
                
                 {/* Date and Status (Left on even, Right on odd on large screens) */}
                <div className="flex-grow-0 flex-shrink-0 w-full md:w-[calc(50%-4rem)] text-left md:text-right group-odd:md:text-left pl-0 md:pl-8 group-odd:md:pr-8 group-odd:md:pl-0 z-10">
                   {milestone.date && <span className="block text-sm font-semibold text-blue-600">{milestone.date}</span>}
                   <Badge
                      variant={
                        milestone.status === "Completed"
                          ? "default"
                          : milestone.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                      className="mt-1"
                   >
                      {milestone.status}
                   </Badge>
                </div>

                 {/* Timeline Dot and Connecting Lines */}
                 {/* Adjusted spacing for dot container */}
                <div className="flex-shrink-0 w-8 md:w-16 flex items-center justify-center relative z-20">
                  {/* Dot */}
                  <div className={`w-5 h-5 rounded-full border-4 ${
                     milestone.status === "Completed" ? 'border-green-500 bg-white' :
                     milestone.status === "In Progress" ? 'border-yellow-500 bg-white' :
                     'border-gray-400 bg-white'
                  } z-20`}></div>
                  {/* Horizontal connecting lines (visible on medium and larger screens) */}
                  <div className="hidden md:block absolute w-8 h-px bg-gray-300 top-1/2 transform -translate-y-1/2 group-odd:right-0 group-even:left-0"></div>
                </div>

                 {/* Milestone Card (Right on even, Left on odd on large screens) */}
                <Card className="flex-grow-0 flex-shrink-0 w-full md:w-[calc(50%-4rem)] p-4 shadow-md transition-all duration-300 hover:shadow-lg z-10">
                   <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-lg text-blue-900">{milestone.title}</CardTitle>
                   </CardHeader>
                   {milestone.description && (
                     <CardContent className="p-0 text-gray-700 text-sm mb-2">
                         {milestone.description}
                     </CardContent>
                   )}
                   {milestone.marks && (
                     <div className="text-sm font-semibold text-purple-800">Marks: {milestone.marks}</div>
                   )}
                </Card>
              </div>
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
            {/* TAF Document */}
            <Card className="hover:shadow-lg transition-all duration-300 col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <Badge variant="default">Available</Badge>
                </div>
                <CardTitle className="text-lg text-blue-900">TAF Document</CardTitle>
                <CardDescription>
                  Topic Assessment Form for Research Project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Topic Assessment Form</p>
                    <p className="text-sm text-gray-500">1.5 MB</p>
                  </div>
                  <Button size="sm" asChild>
                    <a href={documentLinks.taf} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Proposal Documents */}
            <Card className="hover:shadow-lg transition-all duration-300 col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <Badge variant="default">Available</Badge>
                </div>
                <CardTitle className="text-lg text-blue-900">Proposal Documents</CardTitle>
                <CardDescription>
                  Research proposal documents for all team members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Proposal Document- Jayamanne J A P M", size: "2.1 MB" },
                    { title: "Proposal Document- Rajapaksha R A N M", size: "2.3 MB" },
                    { title: "Proposal Document- Anjalee P A D L", size: "2.5 MB" },
                    { title: "Proposal Document- Siyambalapitiya H N", size: "1.8 MB" }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">{doc.title}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                      <Button size="sm" asChild>
                        <a href={documentLinks.proposals[doc.title]} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Checklist Documents */}
            <Card className="hover:shadow-lg transition-all duration-300 col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <Badge variant="default">Available</Badge>
                </div>
                <CardTitle className="text-lg text-blue-900">Checklist Documents</CardTitle>
                <CardDescription>
                  Research and submission checklists for the project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      title: "Checklist Document 1- GitHub Repository",
                      size: "1.2 MB",
                      description: "Comprehensive research progress checklist"
                    },
                    { 
                      title: "Checklist Document 2- MS Planner Report",
                      size: "1.1 MB",
                      description: "Final submission requirements checklist"
                    }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">{doc.title}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                      <Button size="sm" asChild>
                        <a href={documentLinks.checklists[doc.title]} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Final Reports */}
            <Card className="hover:shadow-lg transition-all duration-300 col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <Badge variant="default">Available</Badge>
                </div>
                <CardTitle className="text-lg text-blue-900">Final Reports</CardTitle>
                <CardDescription>
                  Individual final reports for each team member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Final Report- Jayamanne J A P M", size: "3.5 MB" },
                    { title: "Final Report- Rajapaksha R A N M", size: "4.2 MB" },
                    { title: "Final Report- Anjalee P A D L", size: "4.8 MB" },
                    { title: "Final Report- Siyambalapitiya H N", size: "5.1 MB" }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">{doc.title}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                      <Button size="sm" asChild>
                        <a href={documentLinks.finalReports[doc.title]} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Paper */}
            <Card className="hover:shadow-lg transition-all duration-300 col-span-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <Badge variant="default">Available</Badge>
                </div>
                <CardTitle className="text-lg text-blue-900">Research Paper</CardTitle>
                <CardDescription>
                  Complete research paper with methodology, findings, and conclusions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Research Paper</p>
                    <p className="text-sm text-gray-500">7.2 MB</p>
                  </div>
                  <Button size="sm" asChild>
                    <a href={documentLinks.researchPaper} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                status: "Completed",
                description: "Complete research findings, conclusions, and recommendations",
              },
            ].map((presentation, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-blue-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Presentation className="w-8 h-8 text-blue-800 transform transition-transform duration-300 group-hover:scale-110" />
                    <Badge
                      variant={
                        presentation.status === "Completed"
                          ? "default"
                          : presentation.status === "Upcoming"
                            ? "secondary"
                            : "outline"
                      }
                      className="transition-colors duration-300 group-hover:bg-blue-100"
                    >
                      {presentation.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{presentation.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                    <span>{presentation.date}</span>
                    <span>•</span>
                    <span>{presentation.slides} slides</span>
                    <span>•</span>
                    <span>{presentation.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-800">{presentation.description}</p>
                  <Button
                    variant={presentation.status === "Completed" ? "default" : "outline"}
                    className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                    asChild
                  >
                    <a 
                      href={presentationLinks[presentation.title]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      {presentation.status === "Completed" ? "View Slides" : presentation.status}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Research Team</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 mx-auto">
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
                  image: "/Picture5.jpg",
                  linkedin: "https://www.linkedin.com/in/dinuka-wijendra-b87002245/",
                  googleScholar: "https://scholar.google.com/citations?user=e5OUc6cAAAAJ&hl=en",
                },
                {
                  name: "Ms. Chathushki Chathumali",
                  role: "Co-Supervisor",
                  degree: "Faculty of Computing | Information Technology",
                  email: "chathushki.c@sliit.lk",
                  image: "/Picture6.jpeg",
                  linkedin: "https://www.linkedin.com/in/chathushki-chathumali-b1b865199/",
                  googleScholar: "https://www.researchgate.net/profile/Chathushki-Chathumali",
                },
                {
                  name: "Prof. Priyantha Gamini Jayasinghe",
                  role: "External Supervisor",
                  degree: "Consultant Clinical Psychologist/Psychiatrist",
                  email: "",
                  image: "/Picture7.jpg",
                  linkedin: "https://www.linkedin.com/in/prof-priyanthe-gamini-jayasinghe-9212846a/",
                  googleScholar: "#",
                },
              ].map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-blue-200 group">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                      <Image src={member.image} alt={`${member.name}'s photo`} width={128} height={128} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-xl text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{member.name}</CardTitle>
                    <CardDescription className="text-blue-800 font-medium transition-colors duration-300 group-hover:text-blue-600">{member.role}</CardDescription>
                    <CardDescription className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{member.degree}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      {member.email && member.email.includes('@') && (
                        <a href={`mailto:${member.email}`}
                           className="inline-flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
                          <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm">Email</span>
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
                          <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      )}
                      {member.googleScholar && (
                         <a href={member.googleScholar} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
                              <BookOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                              <span className="text-sm">Scholar</span>
                            </a>
                        )}
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
                image: "/Picture1.jpg",
                linkedin: "http://www.linkedin.com/in/pabasara-jayamanne",
              },
              {
                name: "R A N M Rajapaksha",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21060830@my.sliit.lk",
                image: "/Picture2.png",
                linkedin: "https://www.linkedin.com/in/nimesha-rajapaksha",
              },
              {
                name: "P A D L Anjalee",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21023682@my.sliit.lk",
                image: "/Picture3.png",
                linkedin: "https://www.linkedin.com/in/ludeesha-anjalee",
              },
              {
                name: "H N Siyambalapitiya",
                role: "Undergraduate",
                degree: "BSc(Hons) in Information Technology Specializing in Information Technology",
                email: "it21367458@my.sliit.lk",
                image: "/Picture4.jpg",
                linkedin: "http://www.linkedin.com/in/hiruni-siyambalapitiya-80a2a0265",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-blue-200 group">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                    <Image src={member.image} alt={`${member.name}'s photo`} width={128} height={128} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{member.name}</CardTitle>
                  <CardDescription className="text-blue-800 font-medium transition-colors duration-300 group-hover:text-blue-600">{member.role}</CardDescription>
                  <CardDescription className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{member.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    {member.email && member.email.includes('@') && (
                      <a href={`mailto:${member.email}`}
                         className="inline-flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
                        <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-sm">Email</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110">
                        <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
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
            <p className="text-xl text-blue-100 mx-auto">
              Have questions about our research? Want to collaborate or learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-row justify-around items-start space-x-12">
            
              <div className="flex items-start space-x-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-blue-100 mb-2">For research inquiries and collaboration</p>
                  <a href="mailto:goodnight@gmail.com" className="text-yellow-300 hover:text-yellow-200">
                    goodnight@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-blue-100 mb-2">Research department direct line</p>
                  <a href="tel:(011) 754 48 01" className="text-yellow-300 hover:text-yellow-200">
                    (011) 754 48 01
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-blue-100 mb-2">Research facility address</p>
                  <p className="text-yellow-300">
                    SLIIT Malabe Campus
                    <br />
                    New Kandy Rd
                    <br />
                    Malabe 10115
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-slate-950 rounded-lg flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Goodnight Research Project</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200">© 2025 Goodnight. All rights reserved.</p>
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
