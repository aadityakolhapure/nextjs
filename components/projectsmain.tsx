import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ChevronRight } from "lucide-react";

interface TechStack {
    name: string;
    icon: React.ReactNode;
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    liveLink: string;
    techStack: TechStack[];
}

const ProjectCard = ({
    title,
    description,
    imageUrl,
    githubLink,
    liveLink,
    techStack
}: ProjectCardProps) => {
    return (
        <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-100">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </CardHeader>

            <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-900 mb-4 line-clamp-2">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="flex items-center gap-1 px-2 py-1"
                        >
                            {tech.icon}
                            <span>{tech.name}</span>
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open(githubLink, '_blank')}
                >
                    <Github size={18} />
                    Code
                </Button>
                <Button
                    className="flex items-center gap-2"
                    onClick={() => window.open(liveLink, '_blank')}
                >
                    <Globe size={18} />
                    Live Demo
                    <ChevronRight size={16} />
                </Button>
            </CardFooter>
        </Card>
    );
};

const ExampleUsage = () => {
    const projects = [
        {
            title: "Establishment Section Automation",
            description: "An automated system designed to streamline administrative workflows in educational institutions. Built using Laravel (PHP) for the HOD, Admin, and Principal interfaces, and FlutterFlow for the faculty interface. Features include leave requests, document management, role-based access control, and real-time notifications.",
            imageUrl: "/establishment.png",
            githubLink: "https://github.com/aadityakolhapure/mini_proj.git",
            liveLink: "#",
            techStack: [
                {
                    name: "PHP",
                    icon:
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                            alt="PHP Icon"
                            className="w-5 h-5 object-contain"
                        />

                },
                {
                    name: "JavaScript",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JS Icon"
                            className="w-5 h-5 object-contain" />

                },
                {
                    name: "Tailwind CSS",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind Icon"
                            className="w-5 h-5 object-contain" />

                },
                {
                    name: "MySQL",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                            alt="sql Icon"
                            className="w-5 h-5 object-contain" />

                },
            ]
        },

        {
            title: "Visitor Management System",
            description: "A web-based system designed to streamline visitor check-in and check-out processes, with features like role-based access control, email notifications, and a user-friendly interface.",
            imageUrl: "/visitors.png",
            githubLink: "https://github.com/aadityakolhapure/visitor_system.git",
            liveLink: "#",
            techStack: [
                {
                    name: "Laravel",
                    icon:
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                            alt="PHP Icon"
                            className="w-5 h-5 object-contain"
                        />

                },
                {
                    name: "JavaScript",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JS Icon"
                            className="w-5 h-5 object-contain" />

                },
                {
                    name: "Tailwind CSS",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind Icon"
                            className="w-5 h-5 object-contain" />

                },
                {
                    name: "MySQL",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                            alt="sql Icon"
                            className="w-5 h-5 object-contain" />

                },
            ]
        },
        {
            title: "Brainwave AI",
            description: "A supermemory tool that captures, organizes, and resurfaces information from your digital life. Features powerful search, knowledge canvas, AI-driven tools, and workflow automation.",
            imageUrl: "/workflow.png",
            githubLink: "https://github.com/aadityakolhapure/WorkFlowAutomation.git",
            liveLink: "#",
            techStack: [
                {
                    name: "Typescript",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                            alt="JS Icon"
                            className="w-5 h-5 object-contain"
                        />

                },
                {
                    name: "Next JS",
                    icon:

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
                            alt="JS Icon"
                            className="w-5 h-5 object-contain" />


                },
                {
                    name: "Tailwind CSS",
                    icon:
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind Icon"
                            className="w-5 h-5 object-contain" />

                },
                // {
                //     name: "MySQL",
                //     icon:
                //         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                //             alt="sql Icon"
                //             className="w-5 h-5 object-contain" />

                // },
            ]
        },
    ];

    return (
        <div className="flex flex-wrap gap-4">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default ExampleUsage;
