export type Seminar = {
    id: string;
    speaker: string;
    role: string;
    topic: string;
    description: string;
    date: string;
    time: string;
    location: string;
    registration: string;
    image: string;
};

export const seminars: Seminar[] = [
    {
        id: "jogi-suda-seminar",
        speaker: "Jogi Suda",
        role: "Doctoral Researcher, CERN Quantum Initiative",
        topic: "Path to Quantum Research & Machine Learning at CERN",
        description: "This webinar explores the journey from early academic competitions to advanced research at CERN. The session highlights key stages in developing a scientific career, with a focus on quantum computing and machine learning applications. Participants will gain insights into the realities of working in cutting-edge research environments, as well as practical guidance for those pursuing a path in quantum science.\n\nThe event is intended for high school students, undergraduate researchers, and anyone interested in the intersection of quantum technologies and artificial intelligence.",
        date: "6 April",
        time: "7:00 PM (GMT+5)",
        location: "Google Meet",
        registration: "via Telegram channel",
        image: "/seminars&conferences/Seminar&Conferences_Photo_No.2.jpg"
    }
];
