export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  image: string;
  alt: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'office' | 'logistics';
}

export interface ModalityItem {
  name: string;
  acronym?: string;
  description: string;
  iconName: string;
}

export interface TherapistProfile {
  name: string;
  degree: string;
  title: string;
  license: string;
  location: {
    city: string;
    state: string;
    zip: string;
    fullAddress: string;
    area: string;
  };
  office: {
    address: string;
    highlights: string[];
    description: string;
    images: {
      headshot: string;
      office1: string;
      office2: string;
      officeGrid: string;
    };
  };
  formats: {
    inPerson: boolean;
    telehealth: boolean;
    telehealthScope: string;
  };
  bio: {
    headline: string;
    subtext: string;
    intro: string;
    clientPattern: string;
    approach: string;
    traumaFocus: string;
    burnoutFocus: string;
    philosophy: string;
  };
  services: ServiceItem[];
  modalities: ModalityItem[];
  faqs: FAQItem[];
  seoKeywords: string[];
}

export const therapistProfile: TherapistProfile = {
  name: "Dr. Maya Reynolds",
  degree: "PsyD",
  title: "Licensed Clinical Psychologist",
  license: "Licensed Clinical Psychologist (California)",
  location: {
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    fullAddress: "123th Street 45 W, Santa Monica, CA 90401",
    area: "Santa Monica & Westside Los Angeles",
  },
  office: {
    address: "123th Street 45 W, Santa Monica, CA 90401",
    description: "A quiet, private space designed to feel calm and grounding, with abundant natural light, exposed brick, and a comfortable, uncluttered environment where clients instantly feel at ease.",
    highlights: [
      "Quiet, private & confidential practice space",
      "Abundant natural light & comfortable modern seating",
      "Uncluttered, serene physical environment",
      "Located in central Santa Monica, CA"
    ],
    images: {
      headshot: "/images/dr-maya-reynolds.jpg",
      office1: "/images/office-1.jpg",
      office2: "/images/office-2.jpg",
      officeGrid: "/images/office-1.jpg"
    }
  },
  formats: {
    inPerson: true,
    telehealth: true,
    telehealthScope: "Secure telehealth sessions available for clients located anywhere across California."
  },
  bio: {
    headline: "Evidence-Based Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA",
    subtext: "Providing a warm, collaborative, and grounded space for high-achieving adults, professionals, and creatives to slow down, process past experiences, and find lasting relief.",
    intro: "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    clientPattern: "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
    approach: "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
    traumaFocus: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
    burnoutFocus: "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    philosophy: "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time."
  },
  services: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic Relief",
      shortDesc: "Targeted support for constant worry, internal tension, overthinking, and feeling emotionally on edge.",
      fullDesc: "Many high-achieving adults function well externally while quietly carrying overwhelming anxiety, body tension, or sleep disruption. We work together to understand both the mental loops and physiological signals of stress.",
      symptoms: [
        "Constant worry and overthinking loops",
        "Physical tension and difficulty sleeping",
        "Feeling quietly on edge or bracing for impact",
        "Panic attacks or overwhelming physiological stress"
      ],
      image: "/images/office-1.jpg",
      alt: "Calm Santa Monica counseling room with natural lighting and comfortable seating",
      badge: "Anxiety & Stress"
    },
    {
      id: "trauma-emdr",
      title: "Trauma & EMDR Therapy",
      shortDesc: "Paced, trauma-informed care for single-incident events, childhood patterns, and relational stress.",
      fullDesc: "Trauma work in my practice prioritizes safety and stabilization first. Utilizing EMDR and somatic tools, we carefully process single-event or complex trauma so you feel regulated in daily life.",
      symptoms: [
        "Single-incident trauma or chronic relational stress",
        "Childhood patterns affecting adult relationships",
        "Hypervigilance and feeling unsafe or disconnected",
        "Lingering emotional impacts from past experiences"
      ],
      image: "/images/office-2.jpg",
      alt: "Serene Santa Monica office consultation space with quiet atmosphere",
      badge: "EMDR & Somatic"
    },
    {
      id: "burnout-perfectionism",
      title: "Burnout & Perfectionism Support",
      shortDesc: "Tailored therapy for high-achievers, entrepreneurs, and professionals dealing with internal pressure.",
      fullDesc: "For creatives, entrepreneurs, and high-performing professionals exhausted from years of pushing through high stress. Therapy becomes a grounded space to reconnect and build sustainable living.",
      symptoms: [
        "Exhaustion from relentless high internal pressure",
        "Perfectionism leading to internal burnout",
        "Feeling disconnected despite outward success",
        "Desire for more sustainable ways of living and working"
      ],
      image: "/images/office-1.jpg",
      alt: "Quiet uncluttered therapy seating designed for professionals and creatives",
      badge: "Professionals & Creatives"
    }
  ],
  modalities: [
    {
      name: "EMDR Therapy",
      acronym: "EMDR",
      description: "Eye Movement Desensitization & Reprocessing helps reprocess traumatic memories and distressful experiences.",
      iconName: "Eye"
    },
    {
      name: "Cognitive Behavioral Therapy",
      acronym: "CBT",
      description: "Evidence-based practical tools to identify and reframe unhelpful thought patterns and anxious loops.",
      iconName: "Brain"
    },
    {
      name: "Mindfulness-Based Practices",
      description: "Grounding techniques to cultivate presence, self-awareness, and emotional regulation.",
      iconName: "Sparkles"
    },
    {
      name: "Body-Oriented / Somatic Techniques",
      description: "Somatic approaches addressing physiological tension, nervous system stabilization, and bodily safety.",
      iconName: "HeartPulse"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      category: "general",
      question: "Who is your therapy practice designed for?",
      answer: "I specialize in working with adults who feel overwhelmed by anxiety, stress, trauma, or professional burnout. Many of my clients are high-achieving, thoughtful, and self-aware individuals who appear 'functional' on the outside but internally feel exhausted, stuck in overthinking, or emotionally on edge."
    },
    {
      id: "faq-2",
      category: "logistics",
      question: "Do you offer in-person sessions or online telehealth?",
      answer: "I offer both in-person therapy sessions at my quiet, private office located at 123th Street 45 W, Santa Monica, CA 90401, as well as secure telehealth sessions for clients located anywhere in California."
    },
    {
      id: "faq-3",
      category: "services",
      question: "What is your approach to trauma therapy and EMDR?",
      answer: "Trauma work is paced very carefully with an emphasis on safety, stabilization, and helping you feel regulated in your daily life—not just during sessions. I integrate EMDR, somatic (body-oriented) techniques, and CBT to address both single-incident trauma and complex long-standing patterns."
    },
    {
      id: "faq-4",
      category: "office",
      question: "What can I expect when visiting your Santa Monica office?",
      answer: "My office is a quiet, private space designed to feel calm and grounding. It features natural light, exposed brick accents, and a comfortable, uncluttered environment. Clients frequently share that the space itself helps them feel more at ease the moment they arrive."
    },
    {
      id: "faq-5",
      category: "general",
      question: "What makes your therapeutic style unique?",
      answer: "I combine practical evidence-based tools with depth-oriented reflection. Sessions are structured enough to feel supportive while leaving space for exploration, helping you understand both the emotional and physiological sides of what you are experiencing."
    }
  ],
  seoKeywords: [
    "Santa Monica CA psychologist",
    "Licensed clinical psychologist Santa Monica",
    "Anxiety therapist Santa Monica",
    "EMDR trauma therapist Santa Monica CA",
    "Burnout therapy for professionals Santa Monica",
    "California telehealth psychologist"
  ]
};
