'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap, Target, Users, FileText, Video, Mail, ExternalLink, Copy } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function Component() {
  const { toast } = useToast()
  
  const copyEmail = () => {
    navigator.clipboard.writeText('methmalpunsara9@gmail.com')
    toast({
      title: "Email copied!",
      description: "methmalpunsara9@gmail.com has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">MP</span>
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            MethmalP
          </span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Services
          </Link>
          <Link href="#why-me" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Why Me
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-amber-500/20 text-amber-400 border-amber-500/30">
                    <Zap className="w-3 h-3 mr-1" />
                    7-Day MVP Validation
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Validate Your Startup Idea in{" "}
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                      7 Days
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Hi, I'm <strong className="text-amber-400">Methmal Punsara</strong> - a self-learning future tech enthusiast passionate about building businesses. 
                    I help entrepreneurs validate their startup ideas quickly with MVP prototypes and detailed validation reports.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-900 font-semibold">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Hire Me on Fiverr
                  </Button>
                  <Button variant="outline" size="lg" onClick={copyEmail} className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span>7-day delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>MVP + Validation Report</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-amber-500/30">
                    <Image
                      src="/images/methmal-photo.png"
                      alt="Methmal Punsara - MVP Validation Expert"
                      width={280}
                      height={280}
                      className="rounded-full object-cover border-4 border-amber-500/50"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Fast Track!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                About Me
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                A passionate tech enthusiast dedicated to helping entrepreneurs bring their ideas to life
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Self-Learning Future Tech Enthusiast</h3>
                <p className="text-gray-300">
                  I'm Methmal Punsara, a passionate builder who believes in the power of rapid validation and execution. 
                  My journey in tech has taught me that <strong className="text-amber-400">speed is everything</strong> in today's competitive market.
                </p>
                <p className="text-gray-300">
                  I don't just build MVPs - I help you <strong className="text-amber-400">improve and refine your ideas</strong> with my knowledge and experience. 
                  Every project is an opportunity to create something meaningful that solves real problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-400 border-amber-500/30">MVP Development</Badge>
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-400 border-amber-500/30">Startup Validation</Badge>
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-400 border-amber-500/30">Business Strategy</Badge>
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-400 border-amber-500/30">Tech Innovation</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-md bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-center text-white">My Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <Target className="w-12 h-12 mx-auto text-amber-500" />
                    <p className="text-gray-300">
                      To help entrepreneurs validate their ideas quickly and efficiently, 
                      giving them the competitive edge they need to succeed in today's fast-paced market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                What You Get
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Complete startup validation package delivered in just 7 days
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <FileText className="w-8 h-8 text-amber-500" />
                  <CardTitle className="text-white">Validation Report</CardTitle>
                  <CardDescription className="text-gray-400">
                    Comprehensive analysis of your idea's market potential, competition, and viability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Market research & analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Competitor analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Risk assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Zap className="w-8 h-8 text-orange-500" />
                  <CardTitle className="text-white">MVP Prototype</CardTitle>
                  <CardDescription className="text-gray-400">
                    Functional prototype to test your idea with real users and gather feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Interactive prototype</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Core feature implementation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">User testing ready</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Video className="w-8 h-8 text-green-400" />
                  <CardTitle className="text-white">Go-to-Market Support</CardTitle>
                  <CardDescription className="text-gray-400">
                    Complete guidance to help you launch and validate your idea publicly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Guide PDFs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Video tutorials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Screen share support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section id="why-me" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Why Choose Me?
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Speed and quality that gives you the competitive edge
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto border border-red-500/30">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Lightning Fast Delivery</h3>
                <p className="text-gray-300">
                  <strong className="text-amber-400">7 days</strong> vs <strong className="text-red-400">months to years</strong> that other freelancers take. 
                  In today's competitive market, every day counts.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto border border-yellow-500/30">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Market Urgency</h3>
                <p className="text-gray-300">
                  Your idea can be taken by competitors each day you delay. 
                  I give you the <strong className="text-amber-400">least chance</strong> for your idea to be dragged away.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Complete Support</h3>
                <p className="text-gray-300">
                  Not just validation - I help you <strong className="text-amber-400">improve your ideas</strong> with my knowledge 
                  and provide ongoing support for your success.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">The Cost of Waiting</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Every day you don't take action on your idea is a day your competitors might. 
                  The market is competitive, and timing is everything. Don't let your breakthrough idea become someone else's success story.
                </p>
                <div className="flex justify-center gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">Months</div>
                    <div className="text-sm text-gray-400">Traditional Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">7 Days</div>
                    <div className="text-sm text-gray-400">With MethmalP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-y border-amber-500/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Validate Your Idea?
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300">
                Don't let your competitors get ahead. Start your 7-day validation journey today 
                and turn your idea into a validated business opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-gray-900 font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Hire Me on Fiverr
                </Button>
                <Button size="lg" variant="outline" onClick={copyEmail} className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Email Address
                </Button>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="text-sm">
                  <strong>Fiverr Profile:</strong> MethmalP | <strong>Email:</strong> methmalpunsara9@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-900">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Methmal Punsara. Designed & Developed by Methmal Punsara.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-amber-400">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-amber-400">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
