/**
 * YOUR EDITING STARTS HERE.
 * Customize text and URLs in this file. Empty URLs are hidden automatically.
 * Don't put private credentials, API keys, or passwords in a public portfolio.
 */
const PORTFOLIO = {
  name: "Your Name",
  initials: "YN",
  role: "Computer Science Graduate Student",
  university: "M.S. Computer Science · City College of New York",
  introduction: "I explore the space between software engineering, artificial intelligence, and practical problem solving — one project at a time.",
  aboutOne: "I'm currently pursuing a master's degree in Computer Science at the City College of New York. I enjoy taking ideas from concept to working prototypes and digging into how systems behave under the hood.",
  aboutTwo: "My projects range from voice-driven AI assistants to algorithms, desktop programming, and small automation tools. I like challenges where I can learn something new and produce something tangible.",
  email: "zhaosam0209@gmail.com", // e.g. "hello@example.com"
  github: "https://github.com/SamZ0209", // e.g. "https://github.com/yourusername"
  linkedin: "https://www.linkedin.com/in/samzhao2893/", // e.g. "https://www.linkedin.com/in/yourname/"
  resume: "updated_technical_resume_v3.pdf", // e.g. "resume.pdf" (add this file beside index.html)

  skills: [
    { heading: "Languages", items: ["Python", "Java", "C", "JavaScript", "HTML & CSS", "SQL", "MATLAB"] },
    { heading: "AI & systems", items: ["LiveKit", "LLM APIs", "Model Context Protocol", "Voice AI", "Computer Vision"] },
    { heading: "Development tools", items: ["Git & GitHub", "VS Code", "Linux / Unix", "MySQL", "Xlib"] }
  ],

  projects: [
    {
      title: "VEDA — Voice AI Assistant",
      category: "ai",
      categoryLabel: "AI / SYSTEMS",
      number: "01",
      featured: true,
      art: "ai",
      status: "Ongoing project",
      summary: "A conversational voice assistant that connects language models with real-time speech, tools, and optional memory.",
      details: [
        "Built a voice assistant using LiveKit and cloud-based language models.",
        "Integrated an MCP tool layer and Groq-powered vision for screen context.",
        "Added conversation history and user-approved persistent preferences."
      ],
      tech: ["Python", "LiveKit", "OpenAI", "Gemini", "Groq", "MCP"],
      source: "", // paste the project GitHub repository URL when ready
      demo: "" // paste a live demo or video link, if available
    },
    {
      title: "Bottleneck Path Visualizer",
      category: "algorithms",
      categoryLabel: "ALGORITHMS / DESKTOP",
      number: "02",
      featured: false,
      art: "graph",
      status: "Course project",
      summary: "An interactive C/Xlib application for exploring the bottleneck shortest path between points in a geometric graph.",
      details: [
        "Reads point coordinates from a text file and displays them in an X11 window.",
        "Lets the user select starting and target points with mouse clicks.",
        "Computes and displays a bottleneck path across a complete weighted graph."
      ],
      tech: ["C", "Xlib", "Graph algorithms"],
      source: "",
      demo: ""
    },
    {
      title: "Auto-Login Automation Bot",
      category: "ai",
      categoryLabel: "PYTHON / AUTOMATION",
      number: "03",
      featured: false,
      art: "terminal",
      status: "Personal project",
      summary: "A Python automation project focused on simplifying a repetitive sign-in workflow.",
      details: [
        "Explores how software can automate repetitive interactions.",
        "Organizes a small workflow into reusable Python code.",
        "Project details and a source-code link can be expanded after a final code review."
      ],
      tech: ["Python", "Automation"],
      source: "",
      demo: ""
    },
    {
      title: "Weather Web App",
      category: "web",
      categoryLabel: "WEB DEVELOPMENT",
      number: "04",
      featured: false,
      art: "weather",
      status: "Web project",
      summary: "A front-end weather application built as an exercise in interface design and JavaScript-driven functionality.",
      details: [
        "Created a web interface using HTML, CSS, and JavaScript.",
        "Separated page structure from client-side behavior for easier maintenance.",
        "Explored the workflow for running a web experience with Expo Go."
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      source: "",
      demo: ""
    }
  ]
};
