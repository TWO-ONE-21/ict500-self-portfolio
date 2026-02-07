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
        sub: "2025626618 | Student Exchange",
        body: "Crossing the Strait of Malacca was more than a geographical shift, it was a cognitive leap. At UiTM, I stepped beyond technical syntax to master the **Architecture of Thought**. I didn't just study systems, I learned to deconstruct the human experience. This portfolio is a documentation of how I bridged Sumatera's aggressive logic with Shah Alam's cultural empathy to build 'NeighborHutz'.",    
    },  
    {
        id: 2,
        type: "standard",
        headline: "CRITICAL FILTERING",
        q: "What am I learning?",
        a: "I am learning that **Critical Thinking is the filter for Creative Output**. While I mastered Figma independently, this course taught me to identify my own cognitive biases, specifically the **'Appeal to Novelty'**. I learned to question my own design choices—imposing a **'Grayscale Constraint'** not as a technical step, but as a critical method to ensure logic prevailed over mere decoration.",
    },
    {
        id: 3,
        type: "standard",
        headline: "SCAMPER ADAPTATION",
        q: "Why am I learning it?",
        a: "Our team research identified 'Information Overload' in WhatsApp groups as a major pain point. To address this collective finding, I applied the **SCAMPER 'Adapt' technique** to our workflow. This framework guided us to transform a standard feed into an **AI News Summary**. I learned that my value lies in providing the theoretical structure that turns our team's chaotic ideas into organized solutions.",
    },
    {
        id: 4,
        type: "standard",
        headline: "ENGINEERING TRUST",
        q: "What did I learn?",
        a: "I discovered that **Trust** is not an abstract feeling, but an engineered variable. To solve the 'Stranger Gamble', I combined **Semiotics** (Trust Badges) with a **'Visual Help'** feature—allowing residents to video-stream issues *before* booking. I learned that true security is built by replacing ambiguity with **Transparent Visual Data**, effectively manipulating user perception from fear to confidence.",
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
        headline: "SCOPE MANAGEMENT",
        q: "What prevented me?",
        a: "Our brainstorming sessions generated ambitious ideas like **Complex Gamification** and **Neighborhood Marketplace**. However, realizing the deadline, I stepped in to **prioritize scope**. We classified these extra features as 'Phase 2', allowing us to dedicate our full focus to refining the **Interaction Logic** of the 'AI Concierge' and 'Feed Safety'. My goal was to ensure our **Prototype** proved structural integrity without getting distracted by non-essential features.",
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
        headline: "THE SECURITY LOOP",
        q: "What made me really think?",
        a: "The 'Stranger Danger' Paradox. How to verify visitors without friction? I utilized the **'Put to Another Use' principle** by repurposing live streaming for security. We built the **Real-time Gatekeeper Alert**, allowing residents to verify a visitor's face and plate via video feed. This closed the security loop, granting access with total confidence.",
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
