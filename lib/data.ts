import { IProject } from '@/types';
export const GENERAL_INFO = {
    email: 'priyansh3k123@gmail.com',
    emailSubject: "Let's connect about opportunities",
    emailBody: "Hi Priyansh,\n\nI came across your portfolio and wanted to get in touch. I'd love to connect and explore any potential opportunities or collaborations.\n\nLooking forward to hearing from you.",
};


export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/priyanshkhandelwall' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/piyanshkhandelwal' },
];

export const MY_STACK = {
 analytics: [
    { name: 'Python', icon: '/logo/python.png' },
    { name: 'SQL', icon: '/logo/sql.png' },
    { name: 'Excel', icon: '/logo/excel.png' },
    { name: 'Power BI', icon: '/logo/powerbi.png' },
    { name: 'Tableau', icon: '/logo/tableau.png' },
    { name: 'Pandas', icon: '/logo/pandas.png' },
    { name: 'NumPy', icon: '/logo/numpy.png' },
  ],

 machine_learning: [
    { name: 'Supervised Learning', icon: '/logo/supervised_learning.png' },
    { name: 'Unsupervised Learning', icon: '/logo/unsupervised_learning.png' },
    { name: 'Feature Engineering', icon: '/logo/feature_engineering.png' },
    { name: 'Hypothesis Testing', icon: '/logo/hypothesis_testing.png' },
    { name: 'Model Evaluation', icon: '/logo/model_evaluation.png' },
  ],
  databases: [
    { name: 'MySQL', icon: '/logo/mysql.png' },
    { name: 'PostgreSQL', icon: '/logo/postgresql.png' },
  ],

  tools: [
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'GitHub', icon: '/logo/github.png' },
    { name: 'Jupyter Notebook', icon: '/logo/jupyter.png' },
    { name: 'VS Code', icon: '/logo/vscode.png' },
    { name: 'HTML', icon: '/logo/html.png' },
    { name: 'CSS', icon: '/logo/css.png' },
    { name: 'JavaScript', icon: '/logo/javascript.png' },
  ],
};


export const PROJECTS: IProject[] = [

{
  title: 'AI Data Analyst Chatbot',
  slug: 'ai-data-analyst-chatbot',
  year: 2026,
  liveUrl: 'https://github.com/priyanshkhandelwall/AI-Data-Analyst-Chatbot.git',
  image: 'projects/images/ai-chatbot.png',
  description: `
    An AI-powered data analysis assistant designed to help users explore and understand
    structured datasets through natural language conversations. The chatbot allows users
    to upload CSV or Excel files and ask analytical questions in plain English, receiving
    meaningful statistical insights, explanations, and visual outputs in real time.
    <br/><br/>

    The system bridges the gap between raw data and decision-making by automating common
    analytical tasks that would traditionally require SQL queries, notebooks, or manual
    scripting.
    <br/><br/>

    Why this project matters<br/>
    This project addresses the difficulty non-technical users face when working with data.
    It focuses on reducing the dependency on SQL or notebooks for everyday analysis and
    demonstrates how conversational interfaces can support practical, decision-oriented
    analytics workflows.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>🤖 Natural language querying over structured datasets</li>
      <li>📊 Automated data profiling and summary statistics</li>
      <li>🧹 Detection of missing values and data quality issues</li>
      <li>📈 Interactive charts for exploratory analysis</li>
      <li>🔍 Identification of outliers, correlations, and high-variance features</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>⚙️ LLM-based reasoning using LangChain</li>
      <li>📐 Statistical analysis with pandas and SciPy</li>
      <li>🚀 Low-latency inference using Groq-hosted LLaMA models</li>
      <li>🖥️ Lightweight interactive interface built with Streamlit</li>
    </ul>
  `,
  role: `
    <ul>
      <li>🧩 Designed the conversational data analysis workflow</li>
      <li>🖥️ Built the Streamlit-based user interface</li>
      <li>📊 Implemented automated data profiling and statistical analysis</li>
      <li>🔗 Integrated LLM orchestration via LangChain</li>
    </ul>
  `,
  techStack: [
    'Python',
    'Streamlit',
    'pandas',
    'NumPy',
    'SciPy',
    'Plotly',
    'LangChain',
    'Groq LLM',
  ],
},

{
  title: 'Australian NEM Power & Emissions Dashboard',
  slug: 'australian-nem-power-emissions-dashboard',
  year: 2025,
  liveUrl: 'https://github.com/priyanshkhandelwall/NEM-Real-Time-Power-Emissions-Dashboard.git',
  image: 'projects/images/nem-dashboard.png',
  description: `
    An end-to-end data pipeline and interactive dashboard for monitoring real-time
    electricity generation and greenhouse gas emissions across the Australian
    National Electricity Market (NEM), enabling timely insights into power production,
    emissions trends, and the operational footprint of large-scale energy facilities.
    <br/><br/>

    Why this project matters<br/>
    This project focuses on making complex, real-time energy and emissions data
    observable and interpretable. It highlights how live data pipelines can support
    operational monitoring and informed decision-making in large-scale systems.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>⚡ Real-time power generation tracking at 5-minute intervals</li>
      <li>🌍 Facility-level emissions monitoring across the NEM</li>
      <li>📊 Interactive geospatial and time-series visualisations</li>
      <li>🔁 Continuous execution with automatic recovery</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>📡 Change-aware MQTT publishing to minimise network load</li>
      <li>🔗 Seamless integration of live operational and historical datasets</li>
      <li>🧠 Modular, scalable data pipeline architecture</li>
      <li>🛠️ Automated execution, error handling, and recovery</li>
    </ul>
  `,
  role: `
    <ul>
      <li>⚙️ Developed real-time ingestion pipelines using the OpenElectricity API</li>
      <li>📐 Designed facility-level data aggregation and transformation logic</li>
      <li>📡 Implemented efficient MQTT-based messaging workflows</li>
      <li>🧪 Optimised pipeline performance and operational reliability</li>
    </ul>
  `,
  techStack: [
    'Python',
    'Dash',
    'Plotly',
    'MQTT',
    'pandas',
    'Requests',
  ],
},

{
  title: 'US COVID-19 Disparities Analysis',
  slug: 'us-covid-19-disparities',
  year: 2025,
  liveUrl: 'https://github.com/priyanshkhandelwall/US-COVID-19-Disparities-Factors-and-Insights-at-the-County-Level.git',
  image: 'projects/images/covid-analysis.png',
  description: `
    A county-level analysis examining how demographic characteristics, mobility
    behaviour, education levels, and healthcare capacity contributed to disparities
    in COVID-19 case rates across the United States.
    <br/><br/>

    Why this project matters<br/>
    This analysis aims to understand why certain communities were disproportionately
    affected during the pandemic. It emphasises the role of data in informing public
    health decisions and identifying structural inequalities.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>🛒 Analysis of mobility patterns using Google Mobility data</li>
      <li>👴 Assessment of age structure and demographic risk factors</li>
      <li>🎓 Evaluation of education-level correlations with case rates</li>
      <li>🏥 Examination of healthcare capacity</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>📊 County-level statistical analysis performed in R</li>
      <li>📈 Interpretable visualisations for regional comparison</li>
      <li>🧾 Reproducible reporting using R Markdown</li>
      <li>🔗 Integration of multiple public datasets</li>
    </ul>
  `,
  role: `
    <ul>
      <li>📊 Performed exploratory and statistical analysis</li>
      <li>🔗 Integrated public health and mobility datasets</li>
      <li>🧠 Interpreted results for policy insights</li>
      <li>📄 Authored reproducible reports</li>
    </ul>
  `,
  techStack: [
    'R',
    'RStudio',
    'tidyverse',
    'lubridate',
    'R Markdown',
  ],
},

{
  title: 'JARVIS Voice Assistant — Awarded Best Project (BCA)',
  slug: 'jarvis-voice-assistant',
  year: 2022,
  liveUrl: 'https://github.com/priyanshkhandelwall/JARVIS.git',
  image: 'projects/images/jarvis.png',
  description: `
    A Python-based desktop voice assistant designed to automate everyday system
    tasks through natural voice commands.
    <br/><br/>

    Why this project matters<br/>
    This project explores human-computer interaction beyond traditional interfaces.
    It demonstrates how automation and voice-driven workflows can improve everyday
    productivity and accessibility.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>🎙️ Real-time voice command recognition</li>
      <li>🖥️ Voice-controlled system operations</li>
      <li>🌦️ Live information retrieval</li>
      <li>⏰ Task automation</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>🧠 Speech recognition and intent handling</li>
      <li>⚙️ Desktop automation via PyAutoGUI</li>
      <li>🌐 API integrations</li>
      <li>🔔 System-level feedback</li>
    </ul>
  `,
  role: `
    <ul>
      <li>🎧 Implemented speech recognition pipelines</li>
      <li>🖥️ Built desktop automation</li>
      <li>🌐 Integrated APIs</li>
      <li>🛠️ Designed command handling</li>
    </ul>
  `,
  techStack: [
    'Python',
    'SpeechRecognition',
    'pyttsx3',
    'PyAutoGUI',
    'Requests',
    'BeautifulSoup',
  ],
},

{
  title: 'Spotify Data Analysis Pipeline',
  slug: 'spotify-data-analysis-pipeline',
  year: 2024,
  liveUrl: 'https://github.com/priyanshkhandelwall/Spotify-Data-Analysis.git',
  image: 'projects/images/spotify.jpg',
  description: `
    An automated data analysis pipeline built to explore Spotify track metadata
    and audio features to understand patterns behind popularity and genres.
    <br/><br/>

    Why this project matters<br/>
    This project focuses on turning large, messy datasets into structured insights.
    It highlights the importance of reproducibility and clear analytical workflows
    when exploring consumer behaviour data.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>🎵 Audio feature analysis</li>
      <li>📊 Trend exploration</li>
      <li>🤖 Popularity prediction models</li>
      <li>💾 Automated reporting</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>🧠 Modular pipeline design</li>
      <li>📈 Visual exploratory analysis</li>
      <li>🤖 ML models with scikit-learn</li>
      <li>🛡️ Data validation</li>
    </ul>
  `,
  role: `
    <ul>
      <li>📦 Designed data pipelines</li>
      <li>📊 Conducted exploratory analysis</li>
      <li>🤖 Implemented ML models</li>
      <li>📈 Built visual outputs</li>
    </ul>
  `,
  techStack: [
    'Python',
    'pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'scikit-learn',
  ],
},

{
  title: 'Inventory Management System',
  slug: 'inventory-management-system',
  year: 2022,
  liveUrl: 'https://github.com/priyanshkhandelwall/Inventory_Management.git',
  image: 'projects/images/inventory-management.jpg',
  description: `
    A desktop-based inventory management system designed to help small businesses
    track stock levels and reduce manual inventory errors.
    <br/><br/>

    Why this project matters<br/>
    This project addresses everyday operational challenges faced by small businesses.
    It demonstrates how simple, well-designed systems can improve visibility,
    accuracy, and decision-making in resource-constrained environments.
    <br/><br/>

    <strong>Key Features</strong>
    <ul>
      <li>📦 Inventory management</li>
      <li>📉 Low-stock alerts</li>
      <li>📊 Visual dashboards</li>
      <li>📄 Exportable reports</li>
    </ul>
<br>
    <strong>Technical Highlights</strong>
    <ul>
      <li>🗄️ SQLite-based storage</li>
      <li>🖥️ PyQt5 interface</li>
      <li>📈 Visualisations</li>
      <li>📄 Automated reporting</li>
    </ul>
  `,
  role: `
    <ul>
      <li>🖥️ Built the desktop UI</li>
      <li>🗄️ Implemented storage</li>
      <li>📊 Created dashboards</li>
      <li>📄 Automated reports</li>
    </ul>
  `,
  techStack: [
    'Python',
    'PyQt5',
    'SQLite',
    'Pandas',
    'Matplotlib',
    'ReportLab',
  ],
},
];



export const MY_EXPERIENCE = [
  {
    title: 'Data Analyst Intern',
    company: 'Automatorr',
    duration: 'Sydney, Australia · Nov 2025 – Present',
    points: [
      'Built automated data workflows using Python and Excel to clean and transform 1,000+ rows of weekly operational data, improving consistency and reliability of internal reports.',
      'Developed and maintained 3+ interactive dashboards in Power BI and Excel, giving stakeholders clear visibility into key operational KPIs.',
      'Standardised reporting templates and workflows, reducing manual reporting effort by ~20% and improving turnaround time for weekly decision-making.',
    ],
  },
  {
    title: 'Python Developer',
    company: 'Alphonic Network Solutions',
    duration: 'Jaipur, India · Aug 2024 – Jan 2025',
    points: [
      'Developed and maintained 10+ Python backend scripts and modules supporting internal systems and automation workflows.',
      'Automated repetitive, high-volume tasks through custom scripting, reducing manual operational effort by ~30%.',
      'Refactored existing code to improve efficiency and maintainability, achieving 15–25% performance improvements in key processing tasks.',
    ],
  },
  {
    title: 'Data Analytics & Visualisation Intern',
    company: 'Accenture',
    duration: 'Remote · Mar 2024 – May 2024',
    points: [
      'Cleaned, validated, and prepared datasets with 5,000+ records to support analysis and reporting activities.',
      'Supported the development of 4+ dashboards and reports for internal teams, improving visibility into project progress and resource usage.',
      'Performed exploratory data analysis (EDA) to identify trends and data quality issues, contributing to more reliable reporting outputs.',
    ],
  },
];


export const CERTIFICATIONS = [
  {
    name: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    year: 'Dec - 2025',
    url: 'https://www.credly.com/badges/d69e94fa-0658-44fb-82f9-0eeb4a50778f/public_url', 
  },

  {
    name: 'Oracle Cloud Infrastructure – Data Science Professional',
    issuer: 'Oracle',
    year: 'Oct - 2025',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A384672EC6972B4CA10E6B51CEF379DF0B0BB5AC540A17AB21463B64D79A1967',
  },

  {
    name: 'Oracle Cloud Infrastructure DevOps Professional',
    issuer: 'Oracle',
    year: 'Oct - 2025',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F1B92E741241597B016E6D18E96062D599C69E74C5579F9BC40FDDA9D5F64E76',
  },

  {
    name: 'Data Analytics Virtual Experience Program',
    issuer: 'Deloitte Australia (Forage)',
    year: 'Aug - 2025',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ia3h6XtPHxmypbYf4_1756103339596_completion_certificate.pdf',
  },

  {
    name: 'Professional Certificate in Artificial Intelligence',
    issuer: 'DRDO',
    year: 'Jan - 2024',
    url: 'https://drive.google.com/file/d/1TgwUTCDDpsLt0eIc4VxzKX4abeai2PH7/view?usp=sharing',
  },

  {
    name: 'Google Analytics for Beginners',
    issuer: 'Google',
    year: 'Oct - 2022',
    url: 'https://drive.google.com/file/d/1w0K4wBzyQ3i6hA1IecNjrsiHlxXUWnSI/view?usp=sharing',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    year: 'Apr - 2022',
    url: 'https://coursera.org/share/88d3f7363d842da4a4f7075ef2ea8a31',
  },
];

