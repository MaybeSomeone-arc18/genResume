import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RefineResumePage() {
    const navigate = useNavigate();
    const handleBackToHome = () => {
    navigate("/"); // replace with your target route
  };
  const handleSuggestionPage = () => {
    navigate("/refine"); // replace with your target route
  };
  return (
    <div className="min-h-screen bg-[#f5f3ff] flex items-center justify-center px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl w-full">
        {/* Left Section - Upload Your Resume */}
        <Card className="shadow-xl rounded-2xl bg-white border border-white">
          <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Upload Your Resume
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Choose your resume file (PDF, DOC, or TXT format)
            </p>
            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500">Click to upload or drag and drop</p>
              <p className="text-gray-400 text-sm">PDF, DOC, DOCX up to 10MB</p>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                id="resumeUpload"
              />
              <label
                htmlFor="resumeUpload"
                className="mt-4 inline-block w-full bg-purple-700 text-white py-3 rounded-xl cursor-pointer hover:bg-purple-800 transition-colors"
              >
                Choose File
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Right Section - Additional Information */}
        <Card className="shadow-xl rounded-2xl bg-white border border-white">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Additional Information (Optional)
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Applying for role:
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select a role (optional)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Company name (optional):
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Company name (optional)"
                />
              </div>
            </div>
            
          </CardContent>
        </Card>
       {/* Buttons Container */}
            <div className="flex justify-end gap-4 mt-4">
              <Button
                variant="outline"
                className="border border-gray-300 text-gray-900 hover:bg-gray-100"
                onClick={handleBackToHome}
              >
                ← Back to Home
              </Button>
              <Button
                className="bg-purple-700 hover:bg-purple-800 text-white"
                onClick={handleSuggestionPage}
              >
                Refine Resume
              </Button>
            </div>
      </div>
    </div>
  );
}