import profilepic from "./assets/profilepic.png";
import trophy from "./assets/trophy.png";


export const data = {
    // General Strings
    year: "2024",
    tagLine: "Enthusiastic Software developer. Creating innovative solutions and always looking to push boundaries in tech.",
    name: "Vatsal Adhiya",
    profilePic: profilepic,

    // Navbar
    navLinks: [
        { title: "Home", path: "#" },
        { title: "About", path: "#about" },
        { title: "Education", path: "#education" },
        { title: "Experience", path: "#experience" },
        { title: "Projects", path: "#projects" },
        { title: "Skills", path: "#skills" },
        { title: "Achievements", path: "#achievements" },
        { title: "Contact", path: "#contact" },
        { title: "View Resume", path: "https://drive.google.com/file/d/1LPE6MmlGxLOtFRU5GGCIO96rMARtHm0h/view?usp=drive_link", isRedirectLink: true },
    ],

    // Contact
    email: "vatsaladhiya248@gmail.com",
    phone: "Mobile No.",
    countryCode: "+91",
    mobile: "8097058898",
    contact: {
        linkedin: {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/thevatsal3802/",
        },
        github: {
            name: "GitHub",
            link: "https://github.com/theVatsal3802",
        },
        twitter: {
            name: "Twitter",
            link: "https://twitter.com/adhiya_vatsal_3",
        },
        instagram: {
            name: "Instagram",
            link: "https://www.instagram.com/thevatsal3802/",
        },
        medium: {
            name: "Medium",
            link: "https://medium.com/@thevatsal3802",
        },
    },

    // Button Content
    buttons: {
        heroContactMeButton: {
            title: "Contact Me",
            path: "#contact",
        },
        heroViewProjectsButton: {
            title: "View Projects",
            path: "#projects",
        },
    },

    // About section
    // 1. Abstract
    abstract: {
        first: {
            title: "01. General Info",
            text: "I believe in writing clean, maintainable code by understanding client needs, planning thoroughly, and delivering high-quality solutions on time. My goal is to grow as a developer by tackling challenging projects, learning new technologies, and contributing to the tech community while pushing the boundaries of innovation in development.",
            children: {
                dob: "3rd August, 2002",
                location: "Thane, Maharashtra, India",
                education: "Pursuing M.tech at IIT Kharagpur"
            },
        },
    },

    // rowTwo: {
    //     first: {
    //         title: "04. Education",
    //     },
    //     second: {
    //         title: "05. Achievements",
    //     },
    // },

    achievementImg: trophy,

    education: [
        {
            college: "IIT Kharagpur",
            score: "CGPA: 8.43 / 10",
            level: "M.Tech in CSE",
            duration: "Jul 2024 - Jun 2026",
        },
        {
            college: "IIIT Kota",
            score: "CGPA: 8.39 / 10",
            level: "B.Tech in CSE",
            duration: "Dec 2020 - May 2024",
        },
        {
            college: "SMT SBJ Junior College of Science and Commerce",
            score: "Percentage: 88.31%",
            level: "Grade 12 (HSC)",
            duration: "2018 - 2020",
        },
        {
            college: "Ryan International School",
            score: "Percentage: 91.57%",
            level: "Grade 10 (SSC)",
            duration: "2017 - 2018",
        },
    ],

    achievement: [
        { title: "Achieved AIR 313 (99.74 percentile) out of a total of 150,000 aspirants in GATE 2024.", },
        { title: "Shortlisted in the Top 100 finalists for the Google Solution Challenge, 2023. Worked on an LGBTQ + Social Media App in Flutter." },
        { title: "Achieved 98.53 percentile out of a total of around 10,00,000 aspirants in JEE Mains 2020." },
    ],

    experience: [
        {
            name: "Texas Instruments",
            position: "SDE Intern",
            duration: "May 2025 - Jul 2025",
            type: "Internship",
            desc: [
                " Developing a visualization software using Flutter & Dart to visualize the logs in an efficient manner which is expected to reduce the debugging time by 50 %.",
                " Integrated custom solution into existing C code to dump the processor logs into JSON format, without affecting existing functionality to felicitate seamless integration into the visualization tool.",
            ],
            certificate: "https://drive.google.com/file/d/1CqK9NWlb-jrABmhlagls8vrapwBl4-_O/view?usp=sharing",
        },
        {
            name: "Xero Apps Pvt. Ltd.",
            position: "Software Developer Intern",
            duration: "Jan 2023 - Jun 2023",
            type: "Internship",
            desc: [
                "Optimized online store pagination that reduced latency by 62% (loading time decreased from 2 minutes to 45 seconds), thereby increasing number of orders by 70%.",
                "Re-designed the User Interface of the app and the online store by collaborating with the UI/UX team on Figma, which enhanced the user experience, leading to a 24% rise in number of yearly subscription purchases.",
                "Improved the printing system of the app to provide 14 customizable printing options to the user.",
            ],
            certificate: "https://drive.google.com/file/d/1P68iRDDoTnc38tKtvgsIjvAFn4VBeQjh/view?usp=drive_link",
        },
    ],

    projects: [
        {
            title: "BlinkDB: a fast, efficient, in-memory database",
            desc: "BlinkDB is an in-memory key-value store inspired by Redis. It provides a REPL for interactive usage, a server that runs in different modes, and a client for connecting to the server. Additionally, automated benchmarking is supported using redis-benchmark.",
            stack: "C++, Multithreading, Network Communications, RESP 2.0",
            git: "https://github.com/theVatsal3802/BlinkDB",
            link: "https://thevatsal3802.github.io/BlinkDB/",
            type: "systems",
            isDocumentation: true,
        },
        {
            title: "RouteQ",
            desc: "A highly scalable, robust and fault-tolerant backend, similar to Uber, to manage a complete ride-hailing application in a production-ready environment.",
            stack: "Java, Spring Boot, AWS, Docker, PostgreSQL, PostGIS, Hibernate",
            git: "https://github.com/theVatsal3802/RouteQ",
            type: "backend",
        },
        {
            title: "MemFS: In-Memory File System",
            desc: "MemFS is a command-line-based, temporary file storage system that operates in RAM. It supports commands for file manipulation and uses multi-threading to enhance performance.",
            stack: "C++, Multithreading, Lock-free Data Structures",
            git: "https://github.com/theVatsal3802/In-Memory-File-System",
            type: "systems",
        },
        {
            title: "Portfolio",
            desc: "My Personal Portfolio website.",
            stack: "ReactJS, Tailwind CSS, Motion Framer",
            git: "https://github.com/theVatsal3802/Portfolio",
            link: "https://vatsaladhiya.com/",
            type: "frontend",
        },
        {
            title: "Jingola India",
            desc: "A complete end to end solution for Jingola India Startup",
            stack: "Flutter, Dart, Firebase",
            git: "https://github.com/theVatsal3802/Jingola-India",
            type: "fullstack",
        },
        {
            title: "Manage My Link",
            desc: "A simple website made using flutter to manage bookmarks which can be accessed from anywhere worldwide.",
            stack: "Flutter, Dart, Firebase",
            git: "https://github.com/theVatsal3802/Manage-My-Link",
            link: "https://manage-my-link.vatsaladhiya.com/",
            type: "fullstack",
        },
        {
            title: "Text Emotion Detector",
            desc: "A text tone detector which detects the emotion in any given text message using Recurrent Neural Network Models in the backend for the detection.",
            stack: "Flutter, Dart, Python, Firebase",
            git: "https://github.com/theVatsal3802/Tone-Detector",
            type: "fullstack",
        },
        {
            title: "Quinnn",
            desc: "This project was developed for the Google Solution Challenge 2023 and got selected in the top 100 globally. Quinnn is a platform designed to connect and empower individuals in the LGBTQ+ community.",
            stack: "Flutter, Dart, MongoDB, Google Perspective API",
            git: "https://github.com/theVatsal3802/Quinnn-App",
            type: "fullstack",
        },
        {
            title: "Attendance Management System Teachers",
            desc: "A flutter app to make the process of taking attendance of students easier and fool-proof for the teachers.",
            stack: "Flutter, Dart, MongoDB",
            git: "https://github.com/theVatsal3802/Attendance-Version-2-Teachers",
            type: "fullstack",
        },
        {
            title: "Attendance Management System Students",
            desc: "A flutter app to make the process of taking attendance of students easier and fool-proof for the teachers. This is the student side app.",
            stack: "Flutter, Dart, MongoDB",
            git: "https://github.com/theVatsal3802/Attendance-Version-2-Students",
            type: "fullstack",
        },
        {
            title: "Organiz-Em",
            desc: "Most of us feel the need to organize our daily tasks. Organiz'Em app is the easiest way to do so.",
            stack: "Flutter, Dart, Firebase",
            git: "https://github.com/theVatsal3802/Organiz-Em",
            type: "fullstack",
        },
        {
            title: "Convertex",
            desc: "A Simple Currency Converter using Open Exchange API for conversion.",
            stack: "Flutter, Dart",
            git: "https://github.com/theVatsal3802/Convertex",
            type: "frontend",
        },
    ],

    skills: {
        frontend: {
            name: "Frontend",
            skills: [
                {
                    name: "React JS",
                    link: "https://img.icons8.com/color/48/react-native.png",
                },
                {
                    name: "Tailwind CSS",
                    link: "https://img.icons8.com/color/48/tailwindcss.png",
                },
                {
                    name: "Flutter",
                    link: "https://img.icons8.com/color/48/null/flutter.png",
                },
                {
                    name: "EJS",
                    link: "https://img.icons8.com/color/48/clr_ejs_1.png",
                },
                {
                    name: "CSS",
                    link: "https://img.icons8.com/color/48/css3.png",
                },
            ],
        },
        backend: {
            name: "Backend",
            skills: [
                {
                    name: "Spring Boot",
                    link: "https://img.icons8.com/offices/48/spring-logo.png",
                },
                {
                    name: "NodeJS",
                    link: "https://img.icons8.com/fluency/48/node-js.png",
                },
                {
                    name: "ExpressJS",
                    link: "https://img.icons8.com/color/48/express-js.png",
                },
            ],
        },

        languages: {
            name: "Programming Languages",
            skills: [
                {
                    name: "Java",
                    link: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
                },
                {
                    name: "Dart",
                    link: "https://img.icons8.com/color/48/dart.png",
                },
                {
                    name: "JavaScript",
                    link: "https://img.icons8.com/color/48/javascript--v1.png",
                },
                {
                    name: "C++",
                    link: "https://img.icons8.com/color/48/c-plus-plus-logo.png",
                },
                {
                    name: "C",
                    link: "https://img.icons8.com/fluency/48/c-programming.png",
                },
                {
                    name: "Python",
                    link: "https://img.icons8.com/color/48/python--v1.png",
                },
                {
                    name: "Go",
                    link: "https://img.icons8.com/cute-clipart/48/go-logo.png",
                },
            ],
        },
        databases: {
            name: "Databases",
            skills: [
                {
                    name: "Firebase",
                    link: "https://img.icons8.com/color/48/firebase.png",
                },

                {
                    name: "MongoDB",
                    link: "https://img.icons8.com/color/48/mongodb.png",
                },
                {
                    name: "PostgreSQL",
                    link: "https://img.icons8.com/color/48/postgreesql.png",
                },
                {
                    name: "MySQL",
                    link: "https://img.icons8.com/external-those-icons-flat-those-icons/48/external-MySQL-programming-and-development-those-icons-flat-those-icons.png"
                },
            ],
        },
        misc: {
            name: "Core Skills",
            skills: [
                {
                    name: "Git",
                    link: "https://img.icons8.com/color/48/git.png",
                },
                {
                    name: "Figma",
                    link: "https://img.icons8.com/color/48/figma--v1.png",
                },

                {
                    name: "DSA",
                    link: "https://img.icons8.com/external-flaticons-flat-flat-icons/48/external-algorithms-data-analytics-flaticons-flat-flat-icons.png"
                },
                {
                    name: "System Design",
                    link: "https://img.icons8.com/ios-filled/48/imac-settings.png",
                },
                {
                    name: "OOPS",
                    link: "https://img.icons8.com/external-outline-black-m-oki-orlando/48/external-object-oriented-programming-programming-outline-outline-black-m-oki-orlando.png",
                },
            ],
        },
    },
};