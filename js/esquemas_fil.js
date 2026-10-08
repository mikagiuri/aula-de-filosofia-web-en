// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/esquemas_fil.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const ESQUEMAS_FIL = {
 "FIL-T1-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 1",
  "title": "What is philosophy?",
  "mermaid": "flowchart TD\n  center[\"WHAT IS PHILOSOPHY?\"]:::axis\n  origen[\"from myth to logos\"]:::key\n  mito[\"myth: explanation through the gods\"]\n  logos[\"logos: rational explanation\"]\n  carac[\"characteristics\"]:::key\n  c1[\"rational (gives reasons)\"]\n  c2[\"critical (accepts nothing without examination)\"]\n  c3[\"radical (goes to the root)\"]\n  c4[\"universal (everything can be thought about)\"]\n  saber[\"second-order knowledge: asks about foundations\"]:::key\n  center -->|\"is born\"| origen\n  origen --> mito\n  origen -->|\"moves on to\"| logos\n  center -->|\"is a kind of knowledge\"| carac\n  carac --> c1\n  carac --> c2\n  carac --> c3\n  carac --> c4\n  center -->|\"that is why it is\"| saber\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What kind of knowledge is philosophy and how does it differ from others?",
   "raiz": "PHILOSOPHY",
   "raiz_d": "Philía (love) + sophía (wisdom): love of wisdom. Whoever philosophises does not possess the truth: they desire it and seek it.",
   "ramas": [
    {
     "rel": "is born of",
     "t": "Wonder",
     "a": "Plato, Aristotle",
     "d": "Being struck by what seems obvious to everyone else; together with curiosity and doubt.",
     "c": [
      {
       "rel": "begins by recognising",
       "t": "One’s own ignorance",
       "a": "Socrates",
       "d": "‘I know that I know nothing’: knowing that I do not know is the first step to learning."
      }
     ]
    },
    {
     "rel": "arises with the move",
     "t": "From myth to logos",
     "k": true,
     "a": "Thales of Miletus",
     "d": "Greece, 6th century BC: from stories about gods to explanations with reasons.",
     "c": [
      {
       "rel": "abandons",
       "t": "Myth",
       "d": "Traditional and dogmatic story: everything happens through the capricious will of the gods."
      },
      {
       "rel": "adopts",
       "t": "Logos",
       "d": "It seeks natural causes (the arkhé) with arguments that anyone can discuss."
      }
     ]
    },
    {
     "rel": "is distinguished as",
     "t": "Knowledge of ultimate causes",
     "k": true,
     "d": "As opposed to common knowledge (spontaneous) and scientific knowledge (partial), it seeks to understand reality as a whole.",
     "c": [
      {
       "rel": "by its method",
       "t": "Rational and critical",
       "k": true,
       "d": "It rests on arguments, not on authority, and accepts nothing ‘just because’, not even its own claims."
      },
      {
       "rel": "by its scope",
       "t": "Radical and universal",
       "d": "It goes to the root of problems and takes an interest in the whole of reality."
      },
      {
       "rel": "by its aim",
       "t": "Practical",
       "d": "It also thinks about how to live: from this are born ethics and political philosophy."
      }
     ]
    },
    {
     "rel": "today it serves to",
     "t": "Its functions",
     "c": [
      {
       "rel": "teaches",
       "t": "The critical function",
       "d": "To think for oneself and to be protected against manipulation and propaganda."
      },
      {
       "rel": "offers",
       "t": "Orientation and meaning",
       "d": "It helps us decide how to live and understand who we are."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The critical function",
     "rel": "puts into practice the attitude of",
     "a": "Rational and critical"
    }
   ],
   "idea": "‘Sapere aude (dare to know): have the courage to use your own reason’ (Kant). To philosophise is to seek the truth with arguments, without losing one’s sense of wonder."
  }
 },
 "FIL-T1-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 1",
  "title": "The branches of philosophy",
  "mermaid": "flowchart TD\n  fil[\"PHILOSOPHY\"]:::axis\n  q1[\"what is reality?\"]\n  met[\"Metaphysics and Ontology\"]:::key\n  q2[\"what can we know?\"]\n  epi[\"Epistemology\"]:::key\n  q3[\"how should we act?\"]\n  eti[\"Ethics\"]:::key\n  q4[\"how should we organise living together?\"]\n  pol[\"Political philosophy\"]:::key\n  q5[\"what are beauty and art?\"]\n  est[\"Aesthetics\"]:::key\n  q6[\"how do we reason correctly?\"]\n  log[\"Logic\"]:::key\n  fil --> q1 --> met\n  fil --> q2 --> epi\n  fil --> q3 --> eti\n  fil --> q4 --> pol\n  fil --> q5 --> est\n  fil --> q6 --> log\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Which great question does each branch of philosophy set out to answer?",
   "raiz": "THE BRANCHES OF PHILOSOPHY",
   "raiz_d": "Since its object is the whole of reality, philosophy is divided into disciplines, each centred on a type of question.",
   "ramas": [
    {
     "rel": "what is there and what do we know?",
     "t": "Theoretical philosophy",
     "k": true,
     "c": [
      {
       "rel": "what is reality?",
       "t": "Metaphysics",
       "d": "What ‘being’ means, what exists and what the ultimate properties of things are."
      },
      {
       "rel": "what can we know?",
       "t": "Theory of knowledge",
       "d": "Also epistemology or gnoseology: the origin and limits of knowledge, and what truth is."
      },
      {
       "rel": "how do we reason well?",
       "t": "Logic",
       "d": "It analyses the form of reasoning in order to separate valid arguments from those that are not."
      }
     ]
    },
    {
     "rel": "how should we live?",
     "t": "Practical philosophy",
     "k": true,
     "c": [
      {
       "rel": "how should I act?",
       "t": "Ethics",
       "d": "Good and evil, and the foundation of moral norms."
      },
      {
       "rel": "how do we live together?",
       "t": "Political philosophy",
       "d": "Life in community: power, justice and forms of government."
      }
     ]
    },
    {
     "rel": "what are we and what moves us?",
     "t": "The human being and their experience",
     "k": true,
     "c": [
      {
       "rel": "what is the human being?",
       "t": "Philosophical anthropology",
       "d": "What defines us, seen from the biological, social and cultural points of view."
      },
      {
       "rel": "what is the beautiful?",
       "t": "Aesthetics",
       "d": "Beauty and art, and what our judgements about the beautiful, the ugly or the sublime are based on."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Philosophical anthropology",
     "rel": "asks what we are before",
     "a": "Ethics"
    }
   ],
   "idea": "Each branch is born of a great question. In the course: anthropology (Topic 2), knowledge (3), logic (4), ethics (5), politics (6) and aesthetics (7)."
  }
 },
 "FIL-T2-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 2",
  "title": "Nature and culture in the human being",
  "mermaid": "flowchart TD\n  center[\"THE HUMAN BEING\"]:::axis\n  bio[\"biological dimension\"]:::key\n  hom[\"hominisation: evolution of the body\"]\n  ev[\"hominids, bipedalism, hand, brain\"]\n  cul[\"cultural dimension\"]:::key\n  hum[\"humanisation: social learning\"]\n  simb[\"symbolic animal: language, technique, culture\"]\n  sintesis[\"nature and culture intertwine\"]:::key\n  center --> bio\n  bio --> hom --> ev\n  center --> cul\n  cul --> hum --> simb\n  bio -->|\"combine in\"| sintesis\n  cul -->|\"combine in\"| sintesis\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Are we the product of biology or of culture?",
   "raiz": "NATURE AND CULTURE",
   "raiz_d": "The human being is at once the product of biological evolution and of what is learned by living in society.",
   "ramas": [
    {
     "rel": "is inherited",
     "t": "Nature (the biological)",
     "k": true,
     "d": "What we bring at birth: body, brain and abilities. It is common to the whole species.",
     "c": [
      {
       "rel": "is explained by",
       "t": "Evolution",
       "a": "Darwin, Wallace",
       "d": "Species change through natural selection: the best adapted survive and reproduce more."
      },
      {
       "rel": "in our species, the",
       "t": "Hominisation",
       "k": true,
       "d": "Biological process up to Homo sapiens: bipedal gait, encephalisation, hand with opposable thumb."
      }
     ]
    },
    {
     "rel": "is learned",
     "t": "Culture (the learned)",
     "k": true,
     "a": "Tylor",
     "d": "Knowledge, beliefs, morality and customs acquired as a member of a society; it varies between peoples.",
     "c": [
      {
       "rel": "makes us human: the",
       "t": "Humanisation",
       "k": true,
       "d": "Becoming fully human thanks to fire, tools, agriculture and social organisation."
      },
      {
       "rel": "is transmitted through",
       "t": "Socialisation",
       "d": "Family, school, friends, media, language: this is how we form personal and collective identity."
      }
     ]
    },
    {
     "rel": "are intertwined in the",
     "t": "Nature–culture dialectic",
     "d": "They are not opposed: they need each other. We are both at once.",
     "c": [
      {
       "rel": "because we are born",
       "t": "Biologically ‘unfinished’",
       "d": "With reduced instincts and an open world to build: culture is a ‘second womb’."
      },
      {
       "rel": "links them",
       "t": "Language",
       "d": "It is the hinge between the two processes: it allows what has been learned to be passed from one generation to the next."
      },
      {
       "rel": "goes beyond the debate",
       "t": "Innatism versus environmentalism",
       "d": "Neither the inherited alone nor what is learned from the environment alone decides."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Hominisation",
     "rel": "on top of it is built the",
     "a": "Humanisation"
    }
   ],
   "idea": "We do not descend from the chimpanzee: we share a common ancestor with it. Biology makes us possible; culture finishes making us human."
  }
 },
 "FIL-T2-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 2",
  "title": "The mind–body problem",
  "mermaid": "flowchart TD\n  q[\"BODY AND MIND?\"]:::axis\n  dual[\"Dualism\"]:::key\n  d1[\"two distinct realities: soul and body (Plato, Descartes)\"]\n  mon[\"Monism\"]:::key\n  m1[\"a single reality\"]\n  mat[\"materialism: everything is matter\"]\n  emer[\"emergentism: the mind arises from the brain\"]\n  q --> dual --> d1\n  q --> mon --> m1\n  m1 --> mat\n  m1 --> emer\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Are we a body, a soul, or both at once?",
   "raiz": "THE MIND–BODY PROBLEM",
   "raiz_d": "What are we made of: a single reality or two? The answers fall into two great positions and an intermediate route.",
   "ramas": [
    {
     "rel": "two realities",
     "t": "Dualism",
     "k": true,
     "d": "A material body and an immaterial soul or mind; the soul is the higher and can exist without the body.",
     "c": [
      {
       "rel": "ancient version",
       "t": "The body, prison of the soul",
       "a": "Plato",
       "d": "The soul is immortal and has three parts: rational, irascible and concupiscible (myth of the winged chariot)."
      },
      {
       "rel": "modern version",
       "t": "Res cogitans and res extensa",
       "a": "Descartes",
       "d": "Two substances: the ‘thinking thing’ (the mind) and the ‘extended thing’ (the body, almost a machine)."
      }
     ]
    },
    {
     "rel": "a single reality",
     "t": "Materialist monism",
     "k": true,
     "a": "Democritus, Hobbes, La Mettrie; today, Dennett and the Churchlands",
     "d": "We are body: the mind is not a separate substance, but activity of the body, above all of the brain.",
     "c": [
      {
       "rel": "is supported today by",
       "t": "Neuroscience",
       "d": "Much of present-day science understands the mental as dependent on the brain."
      },
      {
       "rel": "therefore",
       "t": "There is no separable soul",
       "d": "With the death of the body everything ends."
      }
     ]
    },
    {
     "rel": "intermediate position",
     "t": "The soul, form of the body",
     "k": true,
     "a": "Aristotle",
     "d": "The soul is the principle of life of the body and cannot exist without it.",
     "c": [
      {
       "rel": "distinguishes",
       "t": "Vegetative, sensitive and rational soul"
      },
      {
       "rel": "today we speak of",
       "t": "The psychosomatic structure",
       "d": "The psychic (psyche) and the bodily (soma) understood as a whole."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Materialist monism",
     "rel": "denies the immortality defended by",
     "a": "Dualism"
    },
    {
     "de": "The soul, form of the body",
     "rel": "rejects separating, as does",
     "a": "Dualism"
    }
   ],
   "idea": "Dualism separates soul and body; monism reduces the mind to the body; Aristotle unites them. Today we tend to see ourselves as a psychosomatic unity."
  }
 },
 "FIL-T3-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 3",
  "title": "Rationalism, empiricism and Kant",
  "mermaid": "flowchart TD\n  con[\"KNOWLEDGE\"]:::axis\n  fuente[\"what is its source?\"]:::key\n  rac[\"Rationalism\"]:::key\n  r1[\"reason; innate ideas (Descartes)\"]\n  emp[\"Empiricism\"]:::key\n  e1[\"experience; the mind as tabula rasa (Locke, Hume)\"]\n  kant[\"Kant: critical synthesis\"]:::key\n  k1[\"we know phenomena: experience + a priori forms\"]\n  con --> fuente\n  fuente --> rac --> r1\n  fuente --> emp --> e1\n  rac -->|\"brings them together\"| kant\n  emp -->|\"brings them together\"| kant\n  kant --> k1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Where does our knowledge come from and how far does it reach?",
   "raiz": "THE ORIGIN OF KNOWLEDGE",
   "raiz_d": "In the Modern Age, three answers to the same question: reason, experience or both?",
   "ramas": [
    {
     "rel": "first answer",
     "t": "Rationalism",
     "k": true,
     "a": "Descartes",
     "d": "The source of secure knowledge is reason.",
     "c": [
      {
       "rel": "because",
       "t": "There are innate ideas",
       "d": "The mind brings from birth ideas that do not come from the senses."
      },
      {
       "rel": "distrusts",
       "t": "The senses",
       "d": "They deceive: they are not a secure source of truth."
      },
      {
       "rel": "limit",
       "t": "Reason, well used, reaches reality"
      }
     ]
    },
    {
     "rel": "second answer",
     "t": "Empiricism",
     "k": true,
     "a": "Locke, Hume",
     "d": "All knowledge comes from the experience of the senses.",
     "c": [
      {
       "rel": "because",
       "t": "The mind is a blank sheet",
       "d": "There are no innate ideas: everything we know has entered through the senses."
      },
      {
       "rel": "limit",
       "t": "We cannot go beyond experience"
      }
     ]
    },
    {
     "rel": "synthesis",
     "t": "Criticism",
     "k": true,
     "a": "Kant",
     "d": "The two sources need each other and complete each other.",
     "c": [
      {
       "rel": "the senses provide",
       "t": "The content",
       "d": "The impressions we receive."
      },
      {
       "rel": "the understanding provides",
       "t": "The forms and categories",
       "d": "They order those impressions."
      },
      {
       "rel": "limit",
       "t": "We only know things as they appear to us",
       "d": "Not things ‘in themselves’."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Criticism",
     "rel": "partly agrees with",
     "a": "Rationalism"
    },
    {
     "de": "Criticism",
     "rel": "partly agrees with",
     "a": "Empiricism"
    }
   ],
   "idea": "‘Thoughts without content are empty; intuitions without concepts are blind’ (Kant): we know by combining experience and reason."
  }
 },
 "FIL-M-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · M",
  "title": "Reality: what is there and what is it like?",
  "mermaid": "flowchart TD\n  center[\"METAPHYSICS: WHAT IS THERE AND WHAT IS IT LIKE?\"]:::axis\n  apa[\"appearance and reality\"]:::key\n  a1[\"Parmenides: change is appearance\"]\n  a2[\"Plato: the Forms, more real than the sensible\"]\n  sus[\"what is everything made of?\"]:::key\n  s1[\"how many realities: monism, dualism, pluralism\"]\n  s2[\"of what kind: materialism or idealism\"]\n  ari[\"Aristotle: substance\"]:::key\n  r1[\"substance and accidents; matter and form\"]\n  r2[\"actuality and potentiality: they explain change\"]\n  r3[\"essence (what it is) and existence (that it is)\"]\n  men[\"mind and body\"]:::key\n  m1[\"dualism, identity theory, functionalism\"]\n  m2[\"Turing test versus Chinese room\"]\n  tie[\"time and change\"]:::key\n  t1[\"Heraclitus versus Parmenides and Zeno\"]\n  t2[\"absolute (Newton) or relative (Leibniz) time\"]\n  lib[\"are we free?\"]:::key\n  l1[\"hard determinism, libertarianism, compatibilism\"]\n  dios[\"does God exist?\"]:::key\n  d1[\"in favour: ontological, cosmological, design\"]\n  d2[\"against: the problem of evil\"]\n  d3[\"theism, atheism, agnosticism, fideism\"]\n  center --> apa\n  apa --> a1\n  apa --> a2\n  center --> sus\n  sus --> s1\n  sus --> s2\n  center --> ari\n  ari --> r1\n  ari --> r2\n  ari --> r3\n  center --> men\n  men --> m1\n  men -->|\"can a machine think?\"| m2\n  center --> tie\n  tie --> t1\n  tie --> t2\n  center --> lib\n  lib --> l1\n  center --> dios\n  dios --> d1\n  dios --> d2\n  dios --> d3\n  r2 -->|\"answers\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T3-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 3",
  "title": "Science and its method",
  "mermaid": "flowchart TD\n  ci[\"SCIENCE\"]:::axis\n  met[\"hypothetico-deductive method\"]:::key\n  h[\"problem, hypothesis, testing, law\"]\n  pop[\"Popper: falsificationism\"]:::key\n  p1[\"a theory is scientific if it can be refuted\"]\n  kuhn[\"Kuhn: paradigms\"]:::key\n  ku[\"normal science, crisis, revolution, new paradigm\"]\n  ci --> met --> h\n  ci --> pop --> p1\n  ci --> kuhn --> ku\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How does science work and how does it advance?",
   "raiz": "SCIENTIFIC KNOWLEDGE",
   "raiz_d": "A rational, objective, systematic, methodical and verifiable knowledge.",
   "ramas": [
    {
     "rel": "is divided into",
     "t": "Types of science",
     "c": [
      {
       "rel": "prove by coherence",
       "t": "Formal sciences",
       "d": "Logic and mathematics: they study abstract forms and relations, without experiments."
      },
      {
       "rel": "test against experience",
       "t": "Empirical sciences",
       "d": "Natural (physics, chemistry, biology) and social (history, economics, sociology)."
      }
     ]
    },
    {
     "rel": "proceeds with",
     "t": "The method",
     "c": [
      {
       "rel": "generalises",
       "t": "Inductive method",
       "d": "From many particular cases to a general law; not all cases are ever observed, so it gives only probable conclusions."
      },
      {
       "rel": "is improved by the",
       "t": "Hypothetico-deductive method",
       "k": true,
       "a": "Galileo",
       "d": "Problem, hypothesis, deduced consequences and experimental testing; if confirmed, law."
      }
     ]
    },
    {
     "rel": "advances, according to Popper, through",
     "t": "Falsifiability",
     "k": true,
     "a": "Popper",
     "d": "A theory is scientific if one can conceive an experiment capable of refuting it.",
     "c": [
      {
       "rel": "hence",
       "t": "Conjectures and refutations",
       "d": "No theory is fully proved: it only withstands attempts to refute it (trial and error)."
      }
     ]
    },
    {
     "rel": "advances, according to Kuhn, through",
     "t": "Paradigms",
     "k": true,
     "a": "Kuhn",
     "d": "A shared framework within which scientists work for long periods.",
     "c": [
      {
       "rel": "if anomalies accumulate",
       "t": "Scientific revolution",
       "d": "One paradigm replaces another, as Einstein’s physics replaced Newton’s."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Empirical sciences",
     "rel": "use above all the",
     "a": "Hypothetico-deductive method"
    },
    {
     "de": "Inductive method",
     "rel": "never fully proves: hence the",
     "a": "Falsifiability"
    }
   ],
   "idea": "Science does not reach definitive truths: it proposes hypotheses, tests them and changes framework when anomalies accumulate."
  }
 },
 "FIL-T5-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 5",
  "title": "Ethics and morality: types of theories",
  "mermaid": "flowchart TD\n  center[\"ETHICS\"]:::axis\n  moral[\"reflects on MORALITY\"]:::key\n  m1[\"norms and values of a community\"]\n  tipos[\"types of ethical theories\"]:::key\n  mat[\"material: they say what the good or end is\"]:::key\n  form[\"formal: they give the form of duty, not the content\"]:::key\n  tele[\"teleological: they look at the end and the consequences\"]\n  deon[\"deontological: they look at duty itself\"]\n  center -->|\"thinks about\"| moral --> m1\n  center --> tipos\n  tipos --> mat\n  tipos --> form\n  mat -->|\"are usually\"| tele\n  form -->|\"are usually\"| deon\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is the difference between morality and ethics, and how are ethical theories classified?",
   "raiz": "ETHICS AND MORALITY",
   "raiz_d": "They start from Socrates’s question, ‘how should we live?’, which is not technical but a question about ends.",
   "ramas": [
    {
     "rel": "what is lived",
     "t": "Morality",
     "d": "Norms and values that in fact govern a community."
    },
    {
     "rel": "what is thought",
     "t": "Ethics",
     "k": true,
     "d": "Philosophical reflection on morality: it asks whether its norms are good and justified."
    },
    {
     "rel": "presuppose",
     "t": "Freedom",
     "c": [
      {
       "rel": "allows",
       "t": "Moral responsibility",
       "d": "If everything were determined, it would make no sense to praise or blame."
      },
      {
       "rel": "one’s own law",
       "t": "Autonomy",
       "k": true,
       "a": "Kant",
       "d": "Giving oneself the moral law with one’s own reason."
      },
      {
       "rel": "another’s law",
       "t": "Heteronomy",
       "d": "Receiving the norm from outside: fear, custom, authority."
      }
     ]
    },
    {
     "rel": "what makes an action good?",
     "t": "Types of ethical theories",
     "c": [
      {
       "rel": "set an end",
       "t": "Material ethics",
       "k": true,
       "d": "They say what the good to be pursued is: happiness, pleasure, utility.",
       "c": [
        {
         "rel": "are usually",
         "t": "Teleological",
         "a": "Aristotle, Epicurus, utilitarianism",
         "d": "From telos (end): they judge the action by its consequences."
        }
       ]
      },
      {
       "rel": "set a form",
       "t": "Formal ethics",
       "k": true,
       "d": "They do not say what to do, but the form that every moral norm must have.",
       "c": [
        {
         "rel": "are usually",
         "t": "Deontological",
         "a": "Kant",
         "d": "From déon (duty): they judge the action by duty and intention, not by its results."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ethics",
     "rel": "examines and justifies (or criticises)",
     "a": "Morality"
    },
    {
     "de": "Autonomy",
     "rel": "is the foundation of",
     "a": "Formal ethics"
    }
   ],
   "idea": "Morality is lived; ethics thinks it. Faced with an action, material ethics look at the end and the consequences; formal ethics, at duty and intention."
  }
 },
 "FIL-T5-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 5",
  "title": "The great ethical theories",
  "mermaid": "flowchart TD\n  et[\"ETHICAL THEORIES\"]:::axis\n  ar[\"Eudaimonism (Aristotle)\"]:::key\n  a1[\"end: happiness (eudaimonia) through virtue\"]\n  ep[\"Hedonism and Utilitarianism (Epicurus, Mill)\"]:::key\n  e1[\"end: pleasure, or the greatest happiness for the greatest number\"]\n  ka[\"Deontology (Kant)\"]:::key\n  k1[\"duty out of respect for the law: categorical imperative\"]\n  em[\"Emotivism (Hume)\"]:::key\n  h1[\"moral judgements express feelings\"]\n  et --> ar --> a1\n  et --> ep --> e1\n  et --> ka --> k1\n  et --> em --> h1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What makes an action good: the end it pursues, duty or feeling?",
   "raiz": "THE GREAT ETHICAL THEORIES",
   "raiz_d": "Three great answers: the good as an end (material ethics), as duty (Kant) or as feeling (Hume).",
   "ramas": [
    {
     "rel": "the good is an end",
     "t": "Material ethics",
     "d": "They judge the action by the end it achieves: they are teleological.",
     "c": [
      {
       "rel": "the end is",
       "t": "Happiness (eudaimonia)",
       "k": true,
       "a": "Aristotle",
       "d": "A life that has gone well as a whole, not a moment of pleasure.",
       "c": [
        {
         "rel": "is attained through",
         "t": "Virtue as a mean",
         "d": "Between two extremes, guided by reason and habit: courage, between cowardice and recklessness."
        }
       ]
      },
      {
       "rel": "the end is",
       "t": "Serene pleasure (ataraxia)",
       "a": "Epicurus",
       "d": "Absence of pain and disturbance: a serene life, with friends and without fear of the gods or of death."
      },
      {
       "rel": "the end is",
       "t": "The greatest happiness of the greatest number",
       "k": true,
       "a": "Bentham, Mill",
       "d": "Utilitarianism: the criterion of pleasure applied to society. Mill adds that there are higher pleasures."
      }
     ]
    },
    {
     "rel": "the good is duty",
     "t": "Formal ethics",
     "a": "Kant",
     "d": "An action is moral when it is done out of respect for the moral law, not for its consequences.",
     "c": [
      {
       "rel": "is expressed in the",
       "t": "Categorical imperative",
       "k": true,
       "d": "Unconditional command of reason: act only according to a maxim that you can will as a universal law."
      },
      {
       "rel": "commands us to treat the person",
       "t": "Always as an end",
       "d": "And never merely as a means: the basis of human dignity."
      }
     ]
    },
    {
     "rel": "the good is felt",
     "t": "Emotivism",
     "k": true,
     "a": "Hume",
     "d": "Moral judgements are not deduced from reason: they express feelings of approval or rejection.",
     "c": [
      {
       "rel": "because",
       "t": "Reason, slave of the passions",
       "d": "‘Reason is, and ought only to be, the slave of the passions’ (Hume)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Formal ethics",
     "rel": "rejects founding morality on",
     "a": "Happiness (eudaimonia)"
    },
    {
     "de": "Emotivism",
     "rel": "denies the rational foundation of",
     "a": "Categorical imperative"
    }
   ],
   "idea": "Aristotle, Epicurus and utilitarianism look to the end; Kant, to duty; Hume, to feeling. In today’s applied ethics the same questions reappear."
  }
 },
 "FIL-T7-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 7",
  "title": "What is beauty?",
  "mermaid": "flowchart TD\n  bel[\"BEAUTY\"]:::axis\n  q[\"where is it?\"]:::key\n  obj[\"Objectivism: in the object\"]:::key\n  o1[\"proportion and harmony (the classics)\"]\n  sub[\"Subjectivism: in the subject\"]:::key\n  s1[\"there is no accounting for taste\"]\n  jui[\"the aesthetic judgement\"]:::key\n  j1[\"Kant: taste without a concept, with a claim to universality\"]\n  bel --> q\n  q --> obj --> o1\n  q --> sub --> s1\n  bel -->|\"is resolved by\"| jui --> j1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Is beauty in things or in the person who looks at them?",
   "raiz": "THE BEAUTIFUL",
   "raiz_d": "Aesthetics (from aísthesis, ‘sensation’) thinks about beauty, art and the experience of contemplating something for its own sake.",
   "ramas": [
    {
     "rel": "is in the object",
     "t": "Objective beauty",
     "k": true,
     "a": "Pythagoreans, Polykleitos, Augustine, Thomas",
     "d": "Classical conception: the beautiful is the well proportioned.",
     "c": [
      {
       "rel": "consists in",
       "t": "Proportion, harmony and measure",
       "d": "That is why it can be measured and taught: music as number, the Canon of the body."
      }
     ]
    },
    {
     "rel": "is in the subject",
     "t": "Subjective beauty",
     "k": true,
     "d": "Modern conception: the beautiful is the pleasure we feel before something.",
     "c": [
      {
       "rel": "its risk",
       "t": "‘There is no accounting for taste’",
       "d": "If everything depends on the one who looks, no judgement would be better than another."
      }
     ]
    },
    {
     "rel": "is it valid for everyone?",
     "t": "The judgement of taste",
     "k": true,
     "d": "Saying ‘this is beautiful’: is it just ‘I like it’ or does it ask for the agreement of others?",
     "c": [
      {
       "rel": "saves it with the",
       "t": "Competent critic",
       "a": "Hume",
       "d": "Sensitivity, experience, comparison and no prejudice: there is such a thing as good taste."
      },
      {
       "rel": "defines it as",
       "t": "Disinterested and universal without a concept",
       "a": "Kant",
       "d": "I contemplate without wanting to possess or use; I ask for everyone’s agreement, but I cannot prove it with rules."
      }
     ]
    },
    {
     "rel": "beyond the beautiful",
     "t": "The sublime",
     "a": "Kant",
     "d": "Fear and admiration before the immense or the powerful (a storm, the sea, the cosmos)."
    }
   ],
   "cruces": [
    {
     "de": "Competent critic",
     "rel": "qualifies, without denying it, the",
     "a": "Subjective beauty"
    },
    {
     "de": "Disinterested and universal without a concept",
     "rel": "asks for universal agreement for the",
     "a": "Subjective beauty"
    }
   ],
   "idea": "For the classics, beauty is in the object; for the moderns, in the subject. Hume and Kant seek for taste, though subjective, not to be pure whim."
  }
 },
 "FIL-T7-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 7",
  "title": "Theories of what art is",
  "mermaid": "flowchart TD\n  art[\"WHAT IS ART?\"]:::axis\n  mim[\"Mimesis: imitating reality\"]:::key\n  exp[\"Expression: communicating emotions\"]:::key\n  form[\"Formalism: form is what matters (art for art’s sake)\"]:::key\n  inst[\"Institutional theory: art is what the art world recognises\"]:::key\n  fun[\"functions of art\"]:::key\n  f1[\"aesthetic, cognitive, social and critical\"]\n  art --> mim\n  art --> exp\n  art --> form\n  art --> inst\n  art -->|\"fulfils\"| fun --> f1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What turns something into a work of art?",
   "raiz": "ART",
   "raiz_d": "What do a cathedral, a symphony and a urinal signed by Duchamp have in common? Four answers, each with its problem.",
   "ramas": [
    {
     "rel": "art imitates",
     "t": "Mimesis",
     "k": true,
     "d": "Representing reality; it dominates from Greece to the Renaissance.",
     "c": [
      {
       "rel": "struggles to explain",
       "t": "Music and abstract art",
       "d": "They imitate nothing."
      }
     ]
    },
    {
     "rel": "art expresses",
     "t": "Expression",
     "k": true,
     "d": "From Romanticism: communicating the artist’s inner world and making us feel it.",
     "c": [
      {
       "rel": "struggles to explain",
       "t": "Why a cry is not art",
       "d": "A cry or a scream also expresses emotions."
      }
     ]
    },
    {
     "rel": "art is form",
     "t": "Formalism",
     "k": true,
     "d": "The artistic is form: composition, colour, rhythm, structure.",
     "c": [
      {
       "rel": "struggles to explain",
       "t": "Meaning and subject matter"
      }
     ]
    },
    {
     "rel": "art is what is recognised",
     "t": "Institutional theory",
     "k": true,
     "a": "Danto, Dickie",
     "d": "Art is what the art world (museums, critics, art history) treats as art.",
     "c": [
      {
       "rel": "responds to the",
       "t": "Ready-made",
       "a": "Duchamp",
       "d": "A signed and exhibited industrial object: neither skill nor beauty counts any more."
      },
      {
       "rel": "its risk",
       "t": "‘Art is whatever the experts say’"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Formalism",
     "rel": "does make room for",
     "a": "Music and abstract art"
    },
    {
     "de": "Ready-made",
     "rel": "breaks with the",
     "a": "Mimesis"
    }
   ],
   "idea": "No definition closes the debate: each theory explains one type of art well and fails with another. Since Duchamp, art is also a question."
  }
 },
 "FIL-TA-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Argumentation workshop",
  "title": "The argument: validity and truth",
  "mermaid": "flowchart TD\n  arg[\"THE ARGUMENT\"]:::axis\n  prem[\"premises\"]:::key\n  conc[\"conclusion\"]:::key\n  tipos[\"types\"]:::key\n  ded[\"deductive: the conclusion follows with necessity\"]\n  ind[\"inductive: the conclusion is only probable\"]\n  eval[\"evaluation\"]:::key\n  val[\"validity: the form is correct\"]\n  ver[\"truth: the premises are true\"]\n  sol[\"sound: valid + true premises\"]:::key\n  arg --> prem\n  prem -->|\"support the\"| conc\n  arg --> tipos\n  tipos --> ded\n  tipos --> ind\n  arg --> eval\n  eval --> val\n  eval --> ver\n  val -->|\"together give\"| sol\n  ver -->|\"together give\"| sol\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "When does an argument really prove its conclusion?",
   "raiz": "THE ARGUMENT",
   "raiz_d": "To argue is to give reasons: a set of propositions in which some, the premises, support another, the conclusion.",
   "ramas": [
    {
     "rel": "is made up of",
     "t": "Premises and conclusion",
     "d": "Premises usually come after ‘because’, ‘since’; the conclusion, after ‘therefore’, ‘so’.",
     "c": [
      {
       "rel": "each one is a",
       "t": "Proposition",
       "d": "A statement of which it makes sense to say that it is true or false: ‘it is raining’, ‘7 is prime’."
      }
     ]
    },
    {
     "rel": "reasons in two ways",
     "t": "Deduction and induction",
     "c": [
      {
       "rel": "necessary conclusion",
       "t": "Deduction",
       "k": true,
       "d": "If the premises are true, the conclusion cannot be false: ‘All humans are mortal…’."
      },
      {
       "rel": "probable conclusion",
       "t": "Induction",
       "d": "From particular cases to a general law: many white swans do not prove that all swans are white."
      }
     ]
    },
    {
     "rel": "is evaluated by",
     "t": "Validity and truth",
     "k": true,
     "d": "They are independent: validity is a matter of form; truth, of content.",
     "c": [
      {
       "rel": "property of the form",
       "t": "Validity",
       "d": "The conclusion follows correctly from the premises.",
       "c": [
        {
         "rel": "with false premises",
         "t": "It proves nothing",
         "d": "‘Fish fly; Nemo is a fish; so Nemo flies’: valid form, false conclusion."
        }
       ]
      },
      {
       "rel": "property of the content",
       "t": "Truth",
       "d": "The premises say how things in fact are."
      },
      {
       "rel": "if both are present",
       "t": "Sound argument",
       "k": true,
       "d": "Valid and with true premises: the conclusion is guaranteed."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Deduction",
     "rel": "well constructed, it has",
     "a": "Validity"
    },
    {
     "de": "Proposition",
     "rel": "is what can be present or not in",
     "a": "Truth"
    }
   ],
   "idea": "A valid argument is not enough: to prove its conclusion it has to be sound, that is, valid and with true premises."
  }
 },
 "FIL-TA-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Argumentation workshop",
  "title": "Fallacies",
  "mermaid": "flowchart TD\n  fal[\"FALLACIES\"]:::axis\n  def[\"arguments that seem valid but are not\"]\n  formal[\"formal: a flaw in the logical structure\"]:::key\n  inf[\"informal: a flaw in the content or the language\"]:::key\n  ah[\"ad hominem: attacking the person\"]\n  ap[\"ad populum: appealing to the majority\"]\n  aver[\"ad verecundiam: appealing to authority\"]\n  fc[\"false cause: mistaking correlation for cause\"]\n  hp[\"straw man: distorting the opposing thesis\"]\n  fal --> def\n  fal --> formal\n  fal --> inf\n  inf --> ah\n  inf --> ap\n  inf --> aver\n  inf --> fc\n  inf --> hp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How can we recognise reasoning that seems good but is not?",
   "raiz": "FALLACIES",
   "raiz_d": "Arguments that seem valid and are not. Formal: the form fails. Informal: the content or the language fails.",
   "ramas": [
    {
     "rel": "the form fails",
     "t": "Formal fallacies",
     "k": true,
     "d": "The logical structure is incorrect, even though each sentence may be true.",
     "c": [
      {
       "rel": "for example",
       "t": "Affirming the consequent",
       "d": "‘If it rains, the ground gets wet; the ground is wet; therefore it has rained.’ It could have been a hosepipe."
      }
     ]
    },
    {
     "rel": "informal: they look at who says it",
     "t": "They appeal to people",
     "d": "They replace reasons with who says it or how many say it.",
     "c": [
      {
       "rel": "attacks the person",
       "t": "Ad hominem",
       "k": true,
       "d": "‘You can’t have an opinion about war: you haven’t done military service.’ Who is speaking does not refute what they say."
      },
      {
       "rel": "irrelevant authority",
       "t": "Ad verecundiam",
       "d": "‘A Nobel Prize winner in Physics says homeopathy works’: they are not an expert in medicine."
      },
      {
       "rel": "appeals to the majority",
       "t": "Ad populum",
       "d": "‘All my friends buy this brand; it must be the best’: being popular does not make something true."
      }
     ]
    },
    {
     "rel": "informal: they distort",
     "t": "They distort or exaggerate",
     "d": "They argue against a false or exaggerated version of what was said.",
     "c": [
      {
       "rel": "caricatures the opponent",
       "t": "Straw man",
       "k": true,
       "d": "‘You want to regulate social media? So you want to censor everything?’ Regulating is not censoring everything."
      },
      {
       "rel": "chains evils together without proof",
       "t": "Slippery slope",
       "d": "‘If we allow phones at break, they’ll end up using them in class and in the end nobody will study.’"
      }
     ]
    },
    {
     "rel": "informal: they jump without grounds",
     "t": "They conclude without sufficient grounds",
     "d": "They draw conclusions that the data do not allow.",
     "c": [
      {
       "rel": "correlation is not causation",
       "t": "False cause",
       "k": true,
       "d": "‘Since this party has been in government unemployment has risen; therefore it caused it’: there may be other causes."
      },
      {
       "rel": "few cases",
       "t": "Hasty generalisation",
       "d": "‘Two friends failed with that teacher: he fails everybody.’ Two cases are not enough."
      }
     ]
    }
   ],
   "idea": "Faced with any argument, ask: does the conclusion really follow? What does who says it have to do with it? Is that what was actually said? Is there enough evidence?"
  }
 },
 "FIL-T6-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 6",
  "title": "The origin of the State: nature or contract?",
  "mermaid": "flowchart TD\n  est[\"THE ORIGIN OF THE STATE\"]:::axis\n  nat[\"Nature? (Aristotle)\"]:::key\n  n1[\"human beings are zoon politikón: the polis is natural\"]\n  con[\"Contract? (the moderns)\"]:::key\n  c1[\"the State is an artifice: a pact to leave the state of nature\"]\n  ho[\"Hobbes\"]:::key\n  h1[\"war of all against all → absolute sovereign (Leviathan)\"]\n  lo[\"Locke\"]:::key\n  l1[\"natural rights → liberal State and separation of powers\"]\n  ro[\"Rousseau\"]:::key\n  r1[\"general will → popular sovereignty\"]\n  est --> nat --> n1\n  est --> con --> c1\n  con --> ho --> h1\n  con --> lo --> l1\n  con --> ro --> r1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why does the State exist: does it spring from our nature, or do we create it with a pact?",
   "raiz": "THE ORIGIN OF THE STATE",
   "raiz_d": "Aristotle: it is natural. The contract theorists: it is an artifice, a pact to leave the state of nature (a hypothesis, not a fact).",
   "ramas": [
    {
     "rel": "ancient answer",
     "t": "Natural origin",
     "k": true,
     "a": "Aristotle",
     "d": "Human beings are zoon politikón, political animals: the community springs from our social condition.",
     "c": [
      {
       "rel": "whoever lives in isolation",
       "t": "‘Is either a beast or a god’",
       "d": "Outside the polis nobody becomes fully human."
      }
     ]
    },
    {
     "rel": "pact out of fear",
     "t": "Absolute sovereign",
     "k": true,
     "a": "Hobbes",
     "d": "Everyone surrenders their power to one alone, the Leviathan, who guarantees peace.",
     "c": [
      {
       "rel": "to leave the",
       "t": "War of all against all",
       "d": "‘Man is a wolf to man’: fear and insecurity dominate."
      }
     ]
    },
    {
     "rel": "limited pact",
     "t": "Liberal State",
     "k": true,
     "a": "Locke",
     "d": "Limited power, separation of powers and the right to rebel against the tyrant.",
     "c": [
      {
       "rel": "to protect",
       "t": "Natural rights",
       "d": "Life, liberty and property: they exist without the State, but an impartial judge is lacking."
      }
     ]
    },
    {
     "rel": "pact of each with all",
     "t": "Popular sovereignty",
     "k": true,
     "a": "Rousseau",
     "d": "The people govern themselves: the root of modern democracy.",
     "c": [
      {
       "rel": "each one obeys the",
       "t": "General will",
       "d": "The common good, not private interest."
      },
      {
       "rel": "starts from the",
       "t": "Noble savage",
       "d": "Free and equal; it is society that corrupts him with inequality and property."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Liberal State",
     "rel": "limits the power concentrated by the",
     "a": "Absolute sovereign"
    },
    {
     "de": "Popular sovereignty",
     "rel": "places in the people the power of the",
     "a": "Absolute sovereign"
    }
   ],
   "idea": "For Aristotle the State is natural; for the moderns, a pact. Depending on how they imagine life without the State, Hobbes, Locke and Rousseau arrive at very different States."
  }
 },
 "FIL-T6-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 6",
  "title": "Justice, power and forms of government",
  "mermaid": "flowchart TD\n  pol[\"POLITICAL LIFE\"]:::axis\n  jus[\"Justice\"]:::key\n  j1[\"Plato: each part performs its function · Rawls: the veil of ignorance\"]\n  leg[\"Power and legitimacy (Weber)\"]:::key\n  le1[\"tradition · charisma · rational legality\"]\n  gob[\"Forms of government\"]:::key\n  g1[\"one (monarchy) · a few (aristocracy) · many (democracy)\"]\n  dem[\"Democracy\"]:::key\n  d1[\"popular sovereignty, freedoms and separation of powers; enemies: manipulation and inequality\"]\n  dh[\"Human rights and the rule of law\"]:::key\n  dh1[\"a limit that no power may cross (Arendt: against totalitarianism)\"]\n  pol --> jus --> j1\n  pol --> leg --> le1\n  pol --> gob --> g1\n  gob --> dem --> d1\n  pol --> dh --> dh1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What makes a power legitimate and a society just?",
   "raiz": "JUSTICE, POWER AND DEMOCRACY",
   "raiz_d": "Political philosophy does not describe what societies are like, but what they should be like.",
   "ramas": [
    {
     "rel": "why do we obey?",
     "t": "Legitimacy",
     "k": true,
     "a": "Weber",
     "d": "Power is making others obey; legitimacy, the right to command that is recognised as just.",
     "c": [
      {
       "rel": "three sources",
       "t": "Tradition, charisma and legality",
       "d": "‘It’s always been done this way’; the strength of a leader; obeying laws and not people (modern State)."
      }
     ]
    },
    {
     "rel": "what distribution is just?",
     "t": "Justice",
     "k": true,
     "d": "Giving each person what they are due and distributing burdens and benefits fairly.",
     "c": [
      {
       "rel": "according to Plato",
       "t": "Each part performs its function",
       "d": "The just city of the Republic: its parts live in harmony."
      },
      {
       "rel": "according to Rawls",
       "t": "The veil of ignorance",
       "d": "Choosing the rules without knowing what place you will occupy: equal liberties and only those inequalities that help the worst off."
      }
     ]
    },
    {
     "rel": "who rules?",
     "t": "Forms of government",
     "d": "One (monarchy), a few (aristocracy) or many (democracy); they degenerate into tyranny, oligarchy and demagogy.",
     "c": [
      {
       "rel": "government by the people",
       "t": "Democracy",
       "k": true,
       "d": "Popular sovereignty, participation, equality before the law, pluralism and separation of powers.",
       "c": [
        {
         "rel": "its enemies",
         "t": "Manipulation, inequality and apathy"
        }
       ]
      }
     ]
    },
    {
     "rel": "what limit does power have?",
     "t": "Human rights",
     "k": true,
     "d": "Minimum demands of every person simply by being a person (Universal Declaration, 1948).",
     "c": [
      {
       "rel": "guaranteed by the",
       "t": "Rule of law",
       "d": "The government, too, is subject to the law."
      },
      {
       "rel": "annulled by",
       "t": "Totalitarianism",
       "a": "Arendt",
       "d": "Power that suppresses freedom, plurality and public life."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Rule of law",
     "rel": "is a condition of",
     "a": "Democracy"
    },
    {
     "de": "Tradition, charisma and legality",
     "rel": "legality is the basis of the",
     "a": "Rule of law"
    }
   ],
   "idea": "A power is legitimate when those who obey it recognise it as just; in a democracy, that power is limited by law and human rights."
  }
 },
 "FIL-T4-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Topic 4",
  "title": "Formal logic: connectives, truth tables and Boole",
  "mermaid": "flowchart TD\n  log[\"FORMAL LOGIC\"]:::axis\n  con[\"Connectives\"]:::key\n  c1[\"¬ not · ∧ and · ∨ or · → if...then · ↔ if and only if\"]\n  tv[\"Truth tables\"]:::key\n  t1[\"evaluate whether a formula is true or false according to its parts\"]\n  bo[\"Boolean algebra\"]:::key\n  b1[\"the true and the false as 1 and 0\"]\n  pu[\"Logic gates (Shannon)\"]:::key\n  p1[\"AND (∧), OR (∨), NOT (¬): logic turned into electricity → the computer\"]\n  log --> con --> c1\n  log --> tv --> t1\n  log --> bo --> b1\n  bo --> pu --> p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How do you calculate whether a formula is true, and what does that have to do with a computer?",
   "raiz": "FORMAL LOGIC",
   "raiz_d": "A language of symbols, free of the ambiguities of everyday language, for studying the form of reasoning.",
   "ramas": [
    {
     "rel": "joins propositions with",
     "t": "Connectives",
     "k": true,
     "d": "The truth value of the whole (T or F) depends only on the value of its parts.",
     "c": [
      {
       "rel": "inverts the value",
       "t": "Negation ¬p (‘not p’)",
       "d": "True if p is false; false if p is true."
      },
      {
       "rel": "requires both",
       "t": "Conjunction p ∧ q (‘p and q’)",
       "d": "True only if p and q are both true."
      },
      {
       "rel": "one is enough",
       "t": "Disjunction p ∨ q (‘p or q’)",
       "d": "True if at least one is true; false only if both are false."
      },
      {
       "rel": "fails in only one case",
       "t": "Conditional p → q (‘if p, then q’)",
       "d": "False only if p is true and q false; in the other three cases, true."
      }
     ]
    },
    {
     "rel": "are calculated with",
     "t": "Truth tables",
     "k": true,
     "d": "They run through all the possible combinations of T and F of the propositions.",
     "c": [
      {
       "rel": "it is valid if there is no",
       "t": "Row with premises T and conclusion F",
       "d": "If in no row the premises are true and the conclusion false, the argument is valid."
      },
      {
       "rel": "true in every row",
       "t": "Tautology"
      },
      {
       "rel": "false in every row",
       "t": "Contradiction"
      }
     ]
    },
    {
     "rel": "becomes calculation in the",
     "t": "Boolean algebra",
     "k": true,
     "a": "George Boole (1854)",
     "d": "1 = true and 0 = false: conjunction works like a product; disjunction, like a sum (1 + 1 = 1).",
     "c": [
      {
       "rel": "is built with",
       "t": "Logic gates",
       "a": "Claude Shannon (1938)",
       "d": "AND, OR and NOT circuits: the AND gate gives 1 only if both its inputs are 1, like conjunction.",
       "c": [
        {
         "rel": "are the basis of",
         "t": "Computers",
         "d": "Every operation of a processor is, at bottom, logic."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Logic gates",
     "rel": "reproduce with electricity the",
     "a": "Connectives"
    }
   ],
   "idea": "With connectives and their truth tables we can check whether an argument is valid. Boole and Shannon turned that calculation into the circuits of every computer."
  }
 },
 "FIL-PRE-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · The Presocratics",
  "title": "The Presocratics: the search for the arkhé",
  "mermaid": "flowchart TD\n  pre[\"THE PRESOCRATICS\"]:::axis\n  ml[\"From myth to logos: explaining nature with reason\"]\n  arc[\"They seek the ARKHÉ: the first principle of everything\"]:::key\n  mil[\"The Milesians\"]:::key\n  ta[\"Thales: water\"]\n  an[\"Anaximander: the apeiron (the indefinite)\"]\n  ax[\"Anaximenes: air\"]\n  je[\"Xenophanes: critique of anthropomorphic gods\"]:::key\n  pi[\"Pythagoras: number\"]:::key\n  par[\"Parmenides: being is one and unmoving (change, an illusion)\"]:::key\n  her[\"Heraclitus: everything flows, governed by the logos\"]:::key\n  pre --> ml\n  pre --> arc\n  arc --> mil\n  mil --> ta\n  mil --> an\n  mil --> ax\n  arc --> pi\n  pre --> je\n  pre --> par\n  pre --> her\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is the world made of, and why does it change?",
   "raiz": "THE PRESOCRATICS",
   "raiz_d": "The first Greek thinkers (7th–5th century BC), called ‘physicists’: they seek the arkhé, the common principle of nature (physis).",
   "ramas": [
    {
     "rel": "a material arkhé",
     "t": "The Milesians",
     "k": true,
     "d": "Miletus, 6th century BC: they think ‘against Hesiod’, starting from experience and not from the gods.",
     "c": [
      {
       "rel": "according to Thales",
       "t": "Water",
       "d": "An observable principle, as opposed to Homer’s god Oceanus."
      },
      {
       "rel": "according to Anaximander",
       "t": "The apeiron",
       "d": "The unlimited and indeterminate: the principle cannot be a concrete element."
      },
      {
       "rel": "according to Anaximenes",
       "t": "Air",
       "d": "Through rarefaction (heat) and condensation (cold) it generates all things."
      }
     ]
    },
    {
     "rel": "criticises myth",
     "t": "Against anthropomorphic gods",
     "a": "Xenophanes",
     "d": "If oxen could paint, they would paint gods shaped like oxen.",
     "c": [
      {
       "rel": "proposes",
       "t": "One God",
       "d": "Spherical and unmoving, who ‘embraces the whole’."
      }
     ]
    },
    {
     "rel": "an intelligible arkhé",
     "t": "Number",
     "k": true,
     "a": "Pythagoras",
     "d": "The universe is harmonious and musical: its essence is mathematical.",
     "c": [
      {
       "rel": "the soul, immortal,",
       "t": "Is reincarnated (metempsychosis)",
       "d": "It is purified through science and the contemplative life; it will influence Plato."
      }
     ]
    },
    {
     "rel": "only reason grasps it",
     "t": "Being",
     "k": true,
     "a": "Parmenides",
     "d": "Thinking and being are identified: being is eternal and unchanging.",
     "c": [
      {
       "rel": "is shown by",
       "t": "The way of truth (reason)",
       "d": "The intelligible: being, without change."
      },
      {
       "rel": "is opposed to",
       "t": "The way of opinion (senses)",
       "d": "The senses show us a changing world."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The way of opinion (senses)",
     "rel": "distrusts the experience of",
     "a": "The Milesians"
    },
    {
     "de": "Number",
     "rel": "leaves behind the material principle of",
     "a": "The Milesians"
    }
   ],
   "idea": "The Presocratics change the question: no longer which god made the world, but what principle it is made of. Some seek it in experience; Parmenides, only in reason."
  }
 },
 "FIL-HEL-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Philosophy · Hellenism",
  "title": "The Hellenistic schools: paths to happiness",
  "mermaid": "flowchart TD\n  hel[\"HOW CAN HAPPINESS BE ACHIEVED?\"]:::axis\n  ep[\"Epicureans (Epicurus)\"]:::key\n  e1[\"calm pleasure and absence of pain: ataraxia\"]\n  es[\"Stoics (Zeno, Seneca)\"]:::key\n  s1[\"live according to reason; accept what does not depend on me (apatheia)\"]\n  ci[\"Cynics (Diogenes)\"]:::key\n  c1[\"autarky: being self-sufficient, without conventions\"]\n  esc[\"Sceptics (Pyrrho)\"]:::key\n  x1[\"suspend judgement (epoché): tranquillity\"]\n  hel --> ep --> e1\n  hel --> es --> s1\n  hel --> ci --> c1\n  hel --> esc --> x1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How is happiness achieved?",
   "raiz": "THE HELLENISTIC SCHOOLS",
   "raiz_d": "After Aristotle and Alexander’s conquests, the polis loses its autonomy and philosophy turns towards personal life.",
   "ramas": [
    {
     "rel": "the pleasure of the moment",
     "t": "Hedonism",
     "a": "Aristippus of Cyrene",
     "d": "Pleasure is the supreme good and the aim of life.",
     "c": [
      {
       "rel": "is achieved through",
       "t": "Carpe diem",
       "d": "Enjoying immediate pleasure: food, rest, everyday pleasures."
      }
     ]
    },
    {
     "rel": "moderate pleasure",
     "t": "Epicureanism",
     "k": true,
     "a": "Epicurus",
     "d": "Pleasure lies not in excess, but in moderation.",
     "c": [
      {
       "rel": "is attained through",
       "t": "Ataraxia",
       "k": true,
       "d": "Peace of the soul: avoiding pain and eliminating the fear of death and of the gods."
      }
     ]
    },
    {
     "rel": "virtue and reason",
     "t": "Stoicism",
     "k": true,
     "a": "Zeno of Citium, Seneca",
     "d": "We do not control what happens, but we do control our reaction.",
     "c": [
      {
       "rel": "is achieved through",
       "t": "Self-mastery (apatheia)",
       "k": true,
       "d": "Living in accordance with nature, accepting fate and mastering the passions."
      }
     ]
    },
    {
     "rel": "needing the bare minimum",
     "t": "Cynicism",
     "a": "Diogenes of Sinope",
     "d": "‘The less I need, the happier I am.’",
     "c": [
      {
       "rel": "is attained through",
       "t": "Self-sufficiency",
       "d": "An austere life, without material possessions and questioning social norms."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Epicureanism",
     "rel": "moderates the pleasure sought by",
     "a": "Hedonism"
    },
    {
     "de": "Self-mastery (apatheia)",
     "rel": "also seeks serenity, like",
     "a": "Ataraxia"
    }
   ],
   "idea": "One question, four answers: enjoy the moment, enjoy with measure, accept what does not depend on me, or need the bare minimum."
  }
 }
};
