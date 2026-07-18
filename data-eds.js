const edsData = {
  subjectName: "Electrical Distribution System",
  chapters: [
    {
      chapterName: "Chapter 1: Introduction to Electric Power Distribution & Distribution System Components",
      topics: [
        {
          topicName: "Structure, Classification and Importance of Distribution Systems",
          quizText: `
            Q: Which distribution system configuration offers the highest reliability of supply to consumers?
            A) Radial system
            B) Ring main system
            C) Interconnected system
            D) Primary isolated system
            Correct: C

            Q: What type of distribution system generally supplies power to residential service mains?
            A) High voltage DC
            B) Primary AC distribution
            C) Secondary AC distribution
            D) Interconnected transmission
            Correct: C
          `
        },
        {
          topicName: "Feeders, Distributors, Service Mains, and Distribution Transformers",
          quizText: `
            Q: The conductor that connects the local substation transformer to the distributor cables is called a:
            A) Service main
            B) Feeder
            C) Neutral wire
            D) Ground line
            Correct: B

            Q: Which transformer efficiency metric is most critical for distribution networks due to fluctuating daily load cycles?
            A) Peak efficiency
            B) Commercial efficiency
            C) All-day efficiency
            D) Full-load efficiency
            Correct: C
          `
        }
      ]
    },
    {
      chapterName: "Chapter 4: Underground Cables",
      topics: [
        {
          topicName: "Types of Cables, Insulation Materials, and Cable Laying Methods",
          quizText: `
            Q: In the construction of underground cables, what is the primary purpose of the metallic sheath layer?
            A) To protect the insulation against moisture and gases
            B) To provide mechanical strength against crushing forces
            C) To serve as a primary current conductor
            D) To reduce dielectric losses
            Correct: A

            Q: Which underground cable laying method provides the fastest heat dissipation but lacks mechanical protection?
            A) Drawing-in system
            B) Solid system
            C) Direct laying in the ground
            D) Concrete duct laying
            Correct: C
          `
        },
        {
          topicName: "Cable Joints, Faults in Underground Cables, and Cable Testing",
          quizText: `
            Q: Which loop test is commonly used to accurately locate ground faults or short-circuit faults in underground cables?
            A) Murray loop test
            B) Megger insulation test
            C) Open-circuit resonance test
            D) Continuity loop test
            Correct: A
          `
        }
      ]
    }
  ]
};
