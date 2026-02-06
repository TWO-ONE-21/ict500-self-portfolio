export interface SlideData {
    id: number;
    type: "intro" | "standard" | "gallery" | "mentor" | "squad" | "class";
    headline: string;
    sub?: string;
    body?: string; // For intro & mentor
    q?: string;    // For standard
    a?: string;    // For standard
    background?: "video"; // For specific slides
}

export const slides: SlideData[] = [
    {
        id: 1,
        type: "intro",
        headline: "ARDO RIANDA",
        sub: "Logic Architect | Exchange Scholar",
        body: "Crossing the Strait of Malacca was more than a geographical shift; it was a cognitive leap. At UiTM, I didn't just learn to write code; I learned to deconstruct the human experience. This portfolio is a documentation of how I bridged Jakarta's aggressive logic with Shah Alam's cultural empathy to build 'NeighborHutz'.",
    },
    {
        id: 2,
        type: "standard",
        headline: "INTERFACE PSYCHOLOGY",
        q: "What am I learning?",
        a: "I went beyond standard UI design to study **Interface Psychology**. Specifically, I mastered the discipline of 'Low-Fidelity Prototyping'. In an era obsessed with aesthetics, I learned the power of the **'Grayscale Constraint'**—forcing myself to design strictly in black and white. This wasn't a limitation, but a strategic choice to ensure our navigation logic was sound before being masked by the beauty of color.",
    },
    {
        id: 3,
        type: "standard",
        headline: "MINIMIZING CHAOS",
        q: "Why am I learning it?",
        a: "Because 'NeighborHutz' is fundamentally a safety application. In emergency scenarios, a confused user is a dangerous outcome. I studied these techniques to minimize **Cognitive Load**. By applying **Fitts' Law** and clear hierarchy, I aimed to shave off critical milliseconds from the user's reaction time. I learned this because in safety tech, clarity isn't just a preference; it's a lifeline.",
    },
    {
        id: 4,
        type: "standard",
        headline: "ENGINEERING TRUST",
        q: "What did I learn about this project?",
        a: "I discovered that 'Trust' is not an abstract feeling, but an engineered variable. A 'Verified Badge' or a 'Panic Button' are psychological anchors. Through this project, I learned how to use **Semiotics** (visual symbols) to manipulate user perception, making strangers feel like neighbors and establishing a sense of security in a digital environment.",
    },
    {
        id: 5,
        type: "standard",
        headline: "THE SINGLE SOURCE OF TRUTH",
        q: "How did I know I was making progress?",
        a: "Progress became tangible when the team stopped debating subjective preferences like 'which blue is better' and started treating my Wireframes as the **Single Source of Truth**. When my teammates began referencing the user flow I designed to solve functional disputes, I knew my role as the Architect had successfully anchored the project's direction.",
    },
    {
        id: 6,
        type: "standard",
        headline: "THE POWER OF CONSTRAINT",
        q: "What helped me?",
        a: "Paradoxically, **Restriction** was my greatest helper. By imposing a strict 'No-Color' rule on myself during the drafting phase, I avoided the **Appeal to Novelty** fallacy. This forced me to focus purely on Information Architecture. It helped me prove to the team that a good app works even when stripped of its decoration.",
    },
    {
        id: 7,
        type: "standard",
        headline: "FILTERING NOISE",
        q: "What prevented me?",
        a: "The biggest hurdle was **Feature Creep** driven by enthusiasm. The team had brilliant but overwhelming ideas—from Drone surveillance to AI Chatbots. My challenge was acting as the 'Logic Filter'. It was difficult to say 'No' to good ideas, but I had to prioritize the **Minimum Viable Product (MVP)** to ensure we delivered a functional core within the deadline.",
    },
    {
        id: 8,
        type: "standard",
        headline: "THE CULTURAL ALGORITHM",
        q: "How did peers help?",
        a: "As an Exchange Student from Universitas Royal, I initially viewed the concept of 'Neighborhood' through an Indonesian lens. My Malaysian peers, Amirah and Diyana, provided crucial **Cultural Contextualization**. They explained the nuances of 'Rukun Tetangga' which differs from my local context. This cross-cultural friction wasn't a barrier; it was the catalyst that made our final product culturally relevant.",
        background: "video",
    },
    {
        id: 9,
        type: "standard",
        headline: "VALIDATION THROUGH TRUST",
        q: "How did they encourage me?",
        a: "The greatest encouragement was **Radical Trust**. Uzma handed me her rough paper sketches and gave me full autonomy to translate them into digital reality. For a newcomer in an established group, this trust was empowering. It pushed me to work harder to honor their faith in my technical capability.",
    },
    {
        id: 10,
        type: "standard",
        headline: "SYSTEMATIZING CHAOS",
        q: "What am I good at?",
        a: "My core strength lies in **Systematizing Chaos**. I excel at taking the team's abstract, scattered brainstorm sessions and locking them into a rigid, logical Figma Grid System. I apply **Occam's Razor** to user flows—ruthlessly cutting out unnecessary steps to find the most direct path to a solution.",
    },
    {
        id: 11,
        type: "standard",
        headline: "THE LOGIC TRAP",
        q: "What are my limitations?",
        a: "I suffer from being **Overly Rational**. I tend to dismiss emotional design elements (like illustrations or warm copy) as 'useless decoration'. This project taught me that this is a flaw. I am learning that 'Vibes' and 'Feelings' are functional requirements too, especially in building a community app.",
    },
    {
        id: 12,
        type: "standard",
        headline: "THE PRIVACY PARADOX",
        q: "What made me really think?",
        a: "The **'Stranger Danger' Paradox** kept me up at night. How do we verify a neighbor's identity without violating their privacy? This forced me to engage in deep Critical Thinking, eventually leading to the design of a 'Tiered Badge System'. It was a complex problem that required balancing ethical responsibility with technical transparency.",
    },
    {
        id: 13,
        type: "standard",
        headline: "USABILITY VS VANITY",
        q: "How did I learn from mistakes?",
        a: "I initially designed the 'Panic Button' to be small and elegant to fit the minimalist aesthetic. Simulation testing proved this was a disaster—in a panic state, fine motor skills degrade. I learned a hard lesson: **Usability must always conquer Aesthetics**. We redesigned it to be big, bold, and ugly—but functional.",
    },
    {
        id: 14,
        type: "standard",
        headline: "UNIVERSAL LANGUAGE",
        q: "What I really like?",
        a: "I loved the **Borderless Collaboration**. This project proved that code and logic are universal languages. Despite our different backgrounds, the logic of a 'Button' or a 'Database' united us. It was satisfying to see how technology dissolves geographical boundaries.",
    },
    {
        id: 15,
        type: "standard",
        headline: "VELOCITY OF THOUGHT",
        q: "Work on NOW?",
        a: "I need to improve my **Prototyping Velocity**. Currently, there is still too much lag time between 'Thinking of an Idea' and 'Seeing it on Screen'. I aim to master Figma shortcuts and design systems to make my hands move as fast as my mind.",
    },
    {
        id: 16,
        type: "standard",
        headline: "FLUID LOGIC",
        q: "Future Improvement?",
        a: "I want to master **Micro-Interactions**. Right now, my designs are logical but static. In the future, I want to implement motion design (using tools like Framer) to give feedback to the user. I want the logic to feel fluid, not just functional.",
    },
    {
        id: 17,
        type: "standard",
        headline: "COLORS OF DEPARTURE",
        q: "Remember Forever?",
        a: "I will forever remember the **'Colors of Departure'**. I came to UiTM with the sole intention of upgrading my technical skills, but I leave with a profound lesson in humanity. The bond with my Malaysian teammates taught me that the best systems are built on human connection, not just code.",
    },
    {
        id: 18,
        type: "squad",
        headline: "THE SQUAD",
        sub: "Cultural Distinctness Unified by Logic. Ardo, Uzma, Amirah, & Diyana.",
    },
    {
        id: 19,
        type: "mentor",
        headline: "THE VISIONARY",
        body: "Special tribute to **Assoc. Prof. Dr. Fariza Hanis Abdul Razak**. The best lecturer I encountered at UiTM. Her guidance transformed 'NeighborHutz' from an assignment into a mission.",
    },
    {
        id: 20,
        type: "class",
        headline: "CDCS2403A",
        sub: "The Best Class Atmosphere",
    },
];
