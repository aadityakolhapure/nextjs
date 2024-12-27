import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "I can tell you about my skills, experience, projects, education, or contact information. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  const findResponse = (input: string) => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes("skill") || lowercaseInput.includes("tech"))
      return "I'm proficient in: React, Next.js, TypeScript, Node.js, Tailwind CSS, PHP, JavaScript, GitHub, Laravel, CSS, Html, MySQL, JAVA and modern web development practices.";
    if (
      lowercaseInput.includes("experience") ||
      lowercaseInput.includes("work")
    )
      return "I have accomplished software developer with diverse internship experiences in Java full-stack development, Android development, Laravel, and front-end web development, showcasing expertise in building and optimizing applications using technologies like Java, Spring Boot, Angular, and Laravel while emphasizing performance, UI/UX, and collaboration.";
    if (
      lowercaseInput.includes("education") ||
      lowercaseInput.includes("study")
    )
      return "I am currently pursuing a degree in Computer Science and regularly update my skills through online courses.";

    if (
      lowercaseInput.includes("resume") ||
      lowercaseInput.includes("cv")
    )
      return "This is my resume: https://drive.google.com/file/d/1AEDrVOcFHRtaYiC-PTPvCD67Ypxj4xng/view?usp=sharing";
    if (lowercaseInput.includes("project"))
      return "My notable projects include: Establishment Section, Visitor Management, News Website and Work Flow Automation.";
    if (lowercaseInput.includes("contact") || lowercaseInput.includes("email"))
      return "You can reach me at aadityakolhapure28@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/aaditya-kolhapure-534a2b241/";
    return "I can tell you about my skills, experience, projects, education, or contact information. What would you like to know?";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: findResponse(input) },
    ]);
    setInput("");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50">
        {showIntro && (
          <Card className="w-80 md:w-96 bg-[#FEF3E2]/40  backdrop-blur-xl shadow-lg relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => setShowIntro(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <CardContent className="p-4 text-center">
              <h2 className="text-2xl font-bold text-[#fa8638] mb-2">
                Hi, I'm Aaditya! 👋
              </h2>
              <p className="text-[#FA4032]">
                Feel free to ask me anything about my skills, experience, or
                projects.
              </p>
            </CardContent>
          </Card>
        )}

        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full h-12 w-12 p-0"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-80 md:w-96 h-96 bg-[#fefbf7] shadow-xl">
            <div className="flex justify-between items-center p-3 border-b">
              <h3 className="font-medium">Chat with me</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4 h-[calc(100%-4rem)] flex flex-col ">
              <ScrollArea className="flex-grow mb-4 pr-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user"
                            ? "bg-[#fa8638] text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-[#fa8638]"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ChatBot;
