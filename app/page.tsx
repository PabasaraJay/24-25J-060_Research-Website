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
} from "lucide-react"

export default function ResearchWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

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
      <section id="domain" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-200 text-purple-900 mb-4">Research Domain</Badge>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Research Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of existing literature and identification of research gaps in sleep technology
              studies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Literature Survey",
                icon: BookOpen,
                content:
                  "Comprehensive review of existing research on smartphone usage and sleep patterns, analyzing peer-reviewed studies from the past decade.",
              },
              {
                title: "Research Gap",
                icon: Target,
                content:
                  "Identification of unexplored areas in bedtime technology usage and its correlation with sleep quality metrics.",
              },
              {
                title: "Research Problem",
                icon: Zap,
                content:
                  "Investigating the specific mechanisms by which bedtime smartphone use affects sleep onset, duration, and quality.",
              },
              {
                title: "Research Objectives",
                icon: Target,
                content:
                  "Define measurable goals for understanding smartphone impact on sleep patterns and developing intervention strategies.",
              },
              {
                title: "Methodology",
                icon: Brain,
                content:
                  "Mixed-methods approach combining quantitative sleep data analysis with qualitative user experience studies.",
              },
              {
                title: "Technologies Used",
                icon: Smartphone,
                content:
                  "Sleep tracking applications, smartphone usage monitoring tools, and statistical analysis software for data processing.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-800" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-20 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                name: "J A P M Jayamanne",
                role: "Undergraduate",
                email: "it21058950@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Sleep Research Specialist", "Data Analysis Expert"],
              },
              {
                name: "R A N M Rajapaksha",
                role: "Undergraduate",
                email: "it21060830@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Statistical Analysis", "Mobile Technology Research"],
              },
              {
                name: "P A D L Anjalee",
                role: "Undergraduate",
                email: "it21023682@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["User Experience Design", "Behavioral Studies"],
              },
              {
                name: "H N Siyambalapitiya",
                role: "Undergraduate",
                email: "it21367458@my.sliit.lk",
                image: "/placeholder.svg?height=200&width=200",
                achievements: ["Project Management", "Technical Documentation"],
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{member.name}</CardTitle>
                  <CardDescription className="text-purple-800 font-medium">{member.role}</CardDescription>
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
    </div>
  )
}
