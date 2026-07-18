const edsData = {
  subjectName: "Electrical Distribution System",
  chapters: [
    {
      chapterName: "Chapter 1: Introduction to Electric Power Distribution & Distribution System Components",
      topics: [
        {
          topicName: "Structure of power systems, importance of distribution, classification of distribution systems, AC and DC distribution, radial, ring main and interconnected systems, primary and secondary distribution.",
          quizText: `
Q: Which part of the electric power system links the high-voltage transmission system to the consumers' service equipment?
A) Generation system
B) Transmission network
C) Distribution system
D) Control grid
Correct: C

Q: In a typical power system structure, which component directly steps down the voltage from primary distribution levels to secondary distribution levels?
A) Step-up transformer
B) Distribution transformer
C) Generating station transformer
D) Transmission substation
Correct: B

Q: What is the primary purpose of the electric power distribution system?
A) To generate electrical energy from renewable sources
B) To transmit bulk power over long distances across states
C) To deliver electrical energy to individual consumer premises
D) To step up voltage for long-distance transport
Correct: C

Q: Distribution systems are broadly classified based on the type of current into which two categories?
A) Single-phase and Three-phase
B) AC distribution and DC distribution
C) High frequency and Low frequency
D) Synchronous and Asynchronous
Correct: B

Q: Which of the following is a key advantage of AC distribution systems over DC distribution systems?
A) Elimination of skin effect completely
B) Ease of stepping voltage up or down using transformers
C) Higher power factor by default
D) Absence of inductive reactance
Correct: B

Q: Which type of distribution configuration features a single feeder radiating from a substation to feed consumers, with no alternative path of supply?
A) Ring main system
B) Interconnected system
C) Radial system
D) Grid mesh system
Correct: C

Q: What is the main disadvantage of a purely radial distribution system?
A) It requires highly complex switchgear.
B) In case of a feeder fault, all consumers beyond the fault lose power.
C) It is the most expensive system to design and build.
D) It cannot handle AC power supply.
Correct: B

Q: In a ring main distribution system, the feeder closed loop originates from and returns to:
A) The consumer's service mains
B) Different generating stations
C) The same substation
D) The transmission grid directly
Correct: C

Q: Which distribution system configuration offers the advantage of allowing maintenance on any section of the feeder without interrupting the supply to consumers?
A) Radial system
B) Simple tree system
C) Ring main system
D) Isolated system
Correct: C

Q: When a ring main feeder is energized by two or more generation or substations, it effectively becomes an:
A) Radial system
B) Interconnected system
C) Open loop system
D) Isolated neutral system
Correct: B

Q: Which distribution system configuration provides the absolute highest reliability of supply to the consumer?
A) Radial system
B) Secondary single-phase system
C) Interconnected system
D) Primary isolated system
Correct: C

Q: In an interconnected system, if one substation or feeder fails, how is the continuity of supply maintained?
A) The consumer must manually switch to a backup generator.
B) The other interconnected substations/feeders take over the load automatically.
C) The entire network goes down until manual repairs are completed.
D) Voltage levels drop to safe handling thresholds automatically.
Correct: B

Q: Primary distribution systems generally operate at what type of voltage level compared to secondary distribution?
A) Much lower voltages (e.g., 230V)
B) Medium to high voltages (e.g., 11kV or 33kV)
C) Extra high voltages (e.g., 400kV)
D) Direct current levels only
Correct: B

Q: Who are the direct consumers typically fed by the primary distribution system?
A) Small residential homes
B) Large industrial consumers
C) Commercial retail shops
D) Domestic street lighting networks
Correct: B

Q: What is the typical voltage level used in India for secondary AC distribution to standard residential single-phase consumers?
A) 11 kV
B) 33 kV
C) 230 V
D) 440 V
Correct: C

Q: Which distribution system configuration generally requires the minimum initial capital investment?
A) Interconnected system
B) Ring main system
C) Radial system
D) Double-bus system
Correct: C

Q: The secondary distribution system is most commonly designed as a:
A) 3-phase, 4-wire system
B) 3-phase, 3-wire system
C) 1-phase, 2-wire high voltage system
D) DC 2-wire system
Correct: A

Q: In a 3-phase, 4-wire secondary distribution system, what is the purpose of the fourth wire (neutral)?
A) To carry the ground fault current to the generating station
B) To allow connection of single-phase loads between a phase and the neutral
C) To increase the phase-to-phase voltage profile
D) To act as a lightning protection shield
Correct: B

Q: Which factor is a major drawback of using a DC distribution system today?
A) DC motors are highly inefficient.
B) It cannot be used for lighting loads.
C) It is difficult to step up or down DC voltage levels efficiently without complex power electronics.
D) DC power causes higher transmission losses at all frequencies.
Correct: C

Q: Why is voltage regulation typically poorer in a radial system compared to a ring main system?
A) The current decreases as it moves away from the substation.
B) The consumer end of the long feeder experiences a cumulative voltage drop.
C) Power factor is always zero at the far end of the radial line.
D) Substations cannot regulate voltage in a radial setup.
Correct: B
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
