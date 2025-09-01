import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function RefineSuggestionsPage() {
  // Example ATS Score (always out of 100)
  const atsScore = 78;
  const data = [
    { name: "Score", value: atsScore },
    { name: "Remaining", value: 100 - atsScore },
  ];
  const COLORS = ["#7c3aed", "#e0e7ff"]; // purple + light lavender

  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-6 grid grid-cols-12 gap-6">
      {/* Left Section: Resume Preview */}
      <div className="col-span-4 bg-white rounded-2xl shadow-lg border border-purple-100 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold text-purple-800 mb-4">
          Your Resume Preview
        </h2>
        <div className="h-[80vh] overflow-y-scroll border border-gray-200 rounded-lg p-4">
          {/* Replace with embedded PDF later */}
          <p className="text-gray-500 text-sm">
            (PDF preview of your uploaded resume will appear here)
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="col-span-5 flex flex-col gap-6">
        {/* ATS Score */}
        <Card className="rounded-2xl bg-white shadow-lg border border-purple-100">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              ATS Score 
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="text-purple-700 font-bold text-2xl mt-2">
              {atsScore} / 100
            </p>
          </CardContent>
        </Card>

        {/* Things You Did Well */}
        <Card className="rounded-2xl bg-[#ede9fe] shadow-lg border border-purple-200">
          <CardContent className="p-6 space-y-3">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Things You Did Well
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Good use of industry keywords</li>
              <li>Strong action verbs</li>
              <li>Clear formatting & structure</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Right Section: Suggestions */}
      <div className="col-span-3 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          Suggestions
        </h3>
        {[
          {
            title: "Formatting Improvements",
            content:
              "Use consistent font sizes and spacing for better readability.",
          },
          {
            title: "Keyword Optimization",
            content:
              "Add more keywords related to project management and leadership.",
          },
          {
            title: "Experience Details",
            content:
              "Include measurable achievements instead of generic responsibilities.",
          },
        ].map((section, idx) => (
          <Card
            key={idx}
            className="rounded-2xl bg-white shadow-md border border-purple-100"
          >
            <CardContent
              className="p-4 cursor-pointer"
              onClick={() => toggleSection(idx)}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">
                  {section.title}
                </span>
                {openSection === idx ? (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-purple-600" />
                )}
              </div>
              {openSection === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-sm mt-2"
                >
                  {section.content}
                </motion.p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
