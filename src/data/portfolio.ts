export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies?: string[];
  links?: ProjectLink[];
}

export interface Portfolio {
  description: string;
  profile: {
    name: string;
    role: string;
    institution: string;
    introduction: string;
    photo: string;
  };
  projects: Project[];
  about: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: { label: string; value: string }[];
  contact: {
    email: string;
    phone: { label: string; href: string };
    socialLinks: ProjectLink[];
    cv?: string;
  };
}

// Content source: Public/2021_miit_cse_024 CV form.pdf.
// No project-specific technologies or repository/demo URLs were supplied.
export const portfolio: Portfolio = {
  description:
    'Kyaw Thu Win — Computer Science Engineering student at MIIT, with experience in web development, programming, and database-driven applications.',
  profile: {
    name: 'Kyaw Thu Win',
    role: 'Computer Science Engineering Student',
    institution: 'Myanmar Institute of Information Technology',
    introduction:
      'Interested in web development and database-driven applications. Looking for an internship to apply my technical skills and gain practical industry experience.',
    photo: '/profile.png',
  },
  projects: [
    {
      title: 'Modern Personal Sport E-Commerce Website',
      category: 'Sports e-commerce website',
      year: '2026',
      description:
        'A sports website featuring products, training classes, coaches, and events, with membership options for additional benefits.',
    },
    {
      title: 'DSP Audio Pitch Studio',
      category: 'Audio processing project',
      year: '2025',
      description:
        'An audio project that changes a voice to deeper or softer tones, with the aim of disguising the speaker’s identity.',
    },
    {
      title: 'Web-Based SMEs Project',
      category: 'Online marketplace',
      year: '2023',
      description:
        'An online marketplace where sellers can upload and sell products, and buyers can shop through an account on the website.',
    },
  ],
  about: {
    paragraphs: [
      'I’m a final-year Computer Science Engineering student at MIIT.',
      'My academic projects cover web development and database-driven applications, with a focus on problem solving and database design.',
      'I’m looking for an internship to apply my skills and gain practical industry experience.',
    ],
    facts: [
      { label: 'Education', value: 'B.E. (Hons) in Computer Science Engineering' },
      { label: 'Institution', value: 'Myanmar Institute of Information Technology' },
      { label: 'Study period', value: '2022–2026' },
      { label: 'Graduation', value: 'Expected 2027' },
    ],
  },
  skills: [
    { label: 'Programming', value: 'Python, Java, C, JavaScript, C++' },
    { label: 'Web development', value: 'HTML, CSS, Django, Bootstrap' },
    { label: 'Databases', value: 'SQLite, SQL, MySQL' },
    { label: 'Tools', value: 'Git, GitHub, VS Code, RStudio, MATLAB' },
    {
      label: 'Core skills',
      value: 'OOP, Data Structures, Algorithms, Database Design, Data Analytics',
    },
    {
      label: 'Professional skills',
      value: 'Problem Solving, Debugging, Team Collaboration, Adaptability, Quick Learning, Creativity',
    },
  ],
  contact: {
    email: 'kthu00415@gmail.com',
    phone: { label: '09 789 076 182', href: 'tel:+959789076182' },
    socialLinks: [{ label: 'GitHub', url: 'https://github.com/Kywtyu' }],
    cv: '/2021_miit_cse_024%20CV%20form.pdf',
  },
};
