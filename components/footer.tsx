import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });
      if (response.ok) {
        setFeedback("");
        setShowFeedback(false);
        alert("Thank you for your feedback!");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:aadityakolhapure28@gmail.com?subject=Portfolio%20Contact";
  };

  return (
    <footer className="bg-[#fefbf7] text-gray-600 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aaditya Kolhapure. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/aaditya-kolhapure-534a2b241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aadityakolhapure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#fa8638]"
          >
            GitHub
          </a>
          <button
            onClick={handleEmailClick}
            className="text-gray-600 hover:text-[#fa8638]"
          >
            Email
          </button>
        </div>
        
        <div className="mt-4">
          <Button
            onClick={() => setShowFeedback(!showFeedback)}
            variant="outline"
            className="text-gray-600 hover:text-[#fa8638]"
          >
            Provide Feedback
          </Button>
        </div>

        {showFeedback && (
          <form onSubmit={handleFeedbackSubmit} className="mt-4 max-w-md mx-auto">
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback..."
              className="bg-gray-200 text-[#fa8638]"
            />
            <Button type="submit" className="mt-2">
              Submit Feedback
            </Button>
          </form>
        )}
      </div>
    </footer>
  );
};

export default Footer;