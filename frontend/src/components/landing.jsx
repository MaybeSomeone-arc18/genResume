import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import landingImage from "@/assets/landing.png";
import { useNavigate } from "react-router-dom";

export default function GenResumeLanding() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload"); // replace with your target route
  };
  return (
    <div className="min-h-screen bg-[#f5f3ff] flex items-center justify-center px-6 m-0 p-0 absolute top-0 left-0 right-0">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">
        {/* Left Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl font-bold text-purple-800"
          >
            GenResume
          </motion.h1>
          <h2 className="text-3xl font-semibold text-gray-900">
            Perfect Your Resume with AI
          </h2>
          <p className="text-gray-700 leading-relaxed text-2x1">
            Transform your resume into a standout document that gets you noticed.
            Our AI-powered platform analyzes, enhances, and optimizes your resume
            to match industry standards and beat applicant tracking systems.
          </p>

          <ul className="space-y-3">
            {[
              "ATS-optimized formatting",
              "Industry-specific keywords",
              "Professional language enhancement",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-purple-600 mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <Card className="shadow-xl rounded-2xl bg-white border border-white">
          <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
            <img
              src={landingImage}
              alt="Resume illustration"
              className="w-80 h-auto object-contain"
            />

            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Get your resume refined now?
            </h3>

            <div className="space-y-2 text-gray-600 text-center text-sm">
              <p>⚡ Takes less than 5 minutes</p>
              <p>👥 Trusted by 10,000+ job seekers</p>
            </div>

            <Button onClick={handleClick} className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-xl py-4 text-lg">
              Get Started →
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}