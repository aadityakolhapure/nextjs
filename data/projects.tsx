import { ProjectData } from '@/types';
import { Users, Gauge } from 'lucide-react';

export const projects: ProjectData[] = [
    {
        id: "establishment-section",
        title: "Establishment Section Automation",
        description: "An automated system designed to streamline administrative workflows in educational institutions.",
        longDescription: "A comprehensive system that revolutionizes how educational institutions handle their administrative tasks. This project implements a full-stack solution with role-based access control, real-time notifications, and automated workflow management.",
        imageUrl: "/establishment.png",
        githubLink: "https://github.com/aadityakolhapure/mini_proj.git",
        liveLink: "#",
        techStack: [
            {
                name: "PHP",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP Icon" className="w-5 h-5 object-contain" />
            },
            {
                name: "JavaScript",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS Icon" className="w-5 h-5 object-contain" />
            },
            {
                name: "Tailwind CSS",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind Icon" className="w-5 h-5 object-contain" />
            },
            {
                name: "MySQL",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="SQL Icon" className="w-5 h-5 object-contain" />
            }
        ],
        features: [
            {
                title: "Role-based Access Control",
                description: "Secure access management for different user roles including HOD, Admin, and Principal",
                icon: <Users className="w-6 h-6" />
            },
            {
                title: "Real-time Notifications",
                description: "Instant updates for request status changes and approvals",
                icon: <Gauge className="w-6 h-6" />
            }
        ],
        timeline: "Started January 2024, Completed March 2024",
        team: ["Aaditya Kolhapure", "Team Member 2", "Team Member 3"],
        challenges: [
            "Implementing secure role-based access control",
            "Managing complex workflow states",
            "Ensuring real-time updates across different interfaces"
        ],
        solutions: [
            "Implemented JWT-based authentication with role permissions",
            "Developed a state machine for workflow management",
            "Used WebSocket connections for real-time updates"
        ],
        futureScope: [
            "Integration with academic management systems",
            "Mobile application development",
            "Advanced analytics dashboard"
        ]
    },
    // Add other projects here
];