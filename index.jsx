import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaMicrophoneAlt, FaUserTie, FaFileDownload } from "react-icons/fa";

export default function AIInterviewIntro() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Ace Your Next Interview With AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mb-6"
        >
          Practice real interview questions, get instant feedback, and improve like a pro — all powered by smart AI.
        </motion.p>
        <div className="space-x-4">
          <Button className="text-lg px-6 py-3">🚀 Start Practicing</Button>
          <Button variant="outline" className="text-lg px-6 py-3">📘 Learn How It Works</Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Choose Your Domain", desc: "Web Dev, Data Science, HR & more" },
            { title: "Answer Real Questions", desc: "Text or voice — up to you" },
            { title: "Get Instant Feedback", desc: "Accuracy, clarity, and tone tips" },
            { title: "Track Progress", desc: "View reports and improvement stats" },
          ].map((step, i) => (
            <Card key={i} className="bg-gray-800 border-none">
              <CardContent className="py-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-10">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaRobot />, label: "Smart Question Generator" },
            { icon: <FaMicrophoneAlt />, label: "Voice & Sentiment Analysis" },
            { icon: <FaUserTie />, label: "Domain Expert Modes" },
            { icon: <FaChartLine />, label: "Instant Feedback & Scoring" },
            { icon: <FaFileDownload />, label: "Downloadable Reports" },
          ].map((feature, i) => (
            <Card key={i} className="bg-gray-800 border-none">
              <CardContent className="py-8 flex flex-col items-center gap-4">
                <div className="text-4xl text-blue-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to impress your next interviewer?</h2>
        <p className="text-gray-400 mb-6">Jump in and start practicing with real-time AI support.</p>
        <Button size="lg" className="px-10 py-4 text-lg">Start Simulation</Button>
      </section>
    </div>
  );
}
