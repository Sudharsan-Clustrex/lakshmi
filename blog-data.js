// Central Shared Medical Knowledge Categories System mapping IDs
const categoriesMap = {
    'science': { id: 1, name: "Science Corner" },
    'women': { id: 2, name: "Women's Care" },
    'pediatric': { id: 3, name: "Pediatric Wellness" },
    'Sudharsam': { id: 4, name: "sss" }
};

// GLOBAL ARRAY DATA LAYER
const blogPostsArray = [
    {
        slug: "constitutional-homeopathy-science",
        categoryKey: "science",
        date: "June 11, 2026",
        readTime: "4 Min Read",
        title: "Demystifying Constitutional Homoeopathy: How It Works",
        description: "Learn about the foundational science behind personalized constitutional remedies. Discover how microscopic natural triggers help activate your internal physiological immune defense responses effectively.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
        fullContent: "Constitutional homoeopathic science states that disease manifestation is not an isolated accidental anomaly, but rather a structural energetic imbalance of the entire body mechanism.\n\nRemedies are developed using natural assets matching your personal psychological and genetic stress signatures to safe-trigger cellular defense layers permanently from within without any side-effects."
    },
    {
        slug: "managing-pcos-naturally",
        categoryKey: "women",
        date: "May 28, 2026",
        readTime: "6 Min Read",
        title: "Managing PCOS Naturally: Dietary Triggers & Constitutional Care",
        description: "Explore practical lifestyle adjustments, stress-reduction techniques, and gentle homoeopathic pathways designed to help rebalance your endocrine axis and regulate your cycle naturally.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        fullContent: "Polycystic Ovarian Syndrome (PCOS) stems tightly from modern endocrine axis disturbances. Instead of simply relying on temporary synthetic hormone suppression paths, individualized constitutional homeopathy protocols work deep internally to modulate systemic insulin sensitivities, correct microovarian health cycles, and optimize hormone synchronization naturally."
    },
    {
        slug: "childhood-immunity-building",
        categoryKey: "pediatric",
        date: "April 15, 2026",
        readTime: "5 Min Read",
        title: "Building Strong Childhood Immunity Against Recurrent Colds",
        description: "A simple, informative guide for parents looking to protect young respiratory systems from constant seasonal variations without depending on heavy chemical antihistamine suppressants.",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
        fullContent: "Frequent bronchial allergies and tonsillitis flare-ups in kids are general indicators of hyper-reactive respiratory mucosal defenses. Safe, non-invasive homeopathic micro-dosing helps gently adjust this sensitivity threshold, allowing children to build an active biological shield against seasonal cold catches naturally without dependency loops."
    },
    {
        slug: "homeopathy-for-migraine-relief",
        categoryKey: "science",
        date: "June 11, 2026",
        readTime: "5 Min Read",
        title: "Can Homeopathy Help with Chronic Migraine Relief?",
        description: "Discover how individualized homeopathic treatment may help reduce the frequency and intensity of recurring migraine headaches while improving overall well-being.",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80", // Replace with an online URL if you don't host local images
        fullContent: "Migraines are more than just headaches. They can cause severe throbbing pain, sensitivity to light and sound, nausea, and significant disruption to daily life. Many individuals rely on painkillers for temporary relief, but recurrent episodes often require a more comprehensive approach.\n\nHomeopathy takes an individualized approach to migraine management. Rather than focusing only on the headache itself, a homeopathic physician evaluates the patient's overall health, lifestyle, emotional state, triggers, sleep patterns, and medical history.\n\nCommon migraine triggers include stress, hormonal fluctuations, irregular sleep, dehydration, skipped meals, and excessive screen exposure. Identifying and addressing these triggers is an important part of long-term management.\n\nHomeopathic remedies are selected based on the unique symptom profile of each patient. The goal is to support the body's natural healing response and improve overall balance. Many patients report reduced migraine frequency, improved recovery time, better sleep quality, and enhanced daily functioning when treatment is combined with healthy lifestyle habits.\n\nTo achieve the best results, patients should maintain proper hydration, follow a regular sleep schedule, manage stress effectively, and avoid known triggers whenever possible.\n\nIf you experience frequent migraines that interfere with work, studies, or family life, consulting a qualified homeopathic practitioner can help determine a personalized treatment plan suited to your individual needs.\n\nDisclaimer: This article is intended for educational purposes only and should not replace professional medical advice, diagnosis, or treatment."
    },
];