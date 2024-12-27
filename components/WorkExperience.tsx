import WorkExperience from "@/components/ui/work";
import { BorderBeam } from "@/components/ui/border-beam";

const ExperienceSection = () => {
    const internships = [
        {
            internshipName: "Java Full Stack Intern",
            by: "Edu Skill",
            duration: "September 2024 - December 2024",
            workDone: [
                "Developed and deployed full-stack applications using Java, Spring Boot, and Angular.",
                "Optimized backend services to improve API response time by 25%.",
                "Implemented secure authentication and role-based access control.",
                "Collaborated with teams to streamline database operations and enhance performance.",
            ],
            certificateLink: "https://drive.google.com/file/d/1b8ePyiKetlSBsKUJdlazsW-auHwL4fYo/view?usp=sharing",
        },
        {
            internshipName: "Android Developer Intern",
            by: "Google For Developer",
            duration: "July 2024 - September 2024",
            workDone: [
                "Developed Android applications.",
                "Integrated REST APIs for seamless data flow.",
                "Designed intuitive UI/UX interfaces.",
            ],
            certificateLink: "https://drive.google.com/file/d/1lYlvWRxwVgZTdJ3pydEPj3wfFwF26gE2/view?usp=sharing",
        },
        {
            internshipName: "Full Stack Laravel Intern",
            by: "Junghare.Tech",
            duration: "April 2024 - July 2024",
            workDone: [
                "Redesigned UI/UX for ERP systems.",
                "Enhanced user engagement by 30%.",
                "Improved system uptime by 20%.",
            ],
            certificateLink: "https://drive.google.com/file/d/1PIqBlHtOWOitNMR8cvs7YopzER5v-xvc/view?usp=sharing",
        },
        {
            internshipName: "Front-end Web Development Intern",
            by: "IBM SkillsBuilt",
            duration: "June 2024 - August 2024",
            workDone: [
                "Completed a 6-week Front-end Web Development internship program.",
                "Enhanced knowledge of front-end technologies and frameworks.",
                "Developed responsive web applications with improved user interfaces.",
                "Collaborated with peers and mentors to deliver project outcomes."
            ],
            certificateLink: "https://drive.google.com/file/d/1giJJ6uCpxDZ8jzCSUeiQwe0tTN2qbuj5/view?usp=sharing",
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-4 lg:px-10">
                    <h2 className="text-3xl md:text-4xl text-black dark:text-white max-w-4xl front-bold">
                        Work Experience
                    </h2>
                </div> */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {internships.map((internship, idx) => (
                        <WorkExperience key={idx} {...internship} />
                        
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
