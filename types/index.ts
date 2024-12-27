export interface TechStack {
    name: string;
    icon: React.ReactNode;
}

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface ProjectData {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    githubLink: string;
    liveLink: string;
    techStack: TechStack[];
    features: Feature[];
    timeline: string;
    team: string[];
    challenges: string[];
    solutions: string[];
    futureScope: string[];
}