import project_padim_Cpp_Cs from "../assets/projects/padim_on_Cpp_Cs.png";
import project_3D_modeling from "../assets/projects/camera_and_LED_3Dmodeling.png";
import project_portolio from "../assets/projects/portfolio.png";

// updated
export const HERO_CONTENT = `I am a dedicated developer with a strong background in image processing for inspection devices. Over the years, I have developed expertise in 3D modeling, electrical control systems, and machine learning, which allow me to create sophisticated and precise solutions. My primary programming languages are C# and Python, and I aim to leverage my technical skills to deliver cutting-edge innovations that enhance operational efficiency and drive technological advancement.`;

export const ABOUT_TEXT = `I am an project engineer with a passion for developing inspection devices centered around image processing. Leveraging my experience in 3D modeling, electrical control, and machine learning, I build precise and efficient systems. My primary development work is done using C# and Python, and I continuously seek to acquire new knowledge to solve technical challenges. My career began with a curiosity for technology, and now, my mission is to explore cutting-edge advancements and contribute to technological innovation. I value collaboration within teams and find fulfillment in solving complex problems to deliver high-quality solutions. Outside of work, I enjoy exploring the latest technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Project Engineer",
    company: "Lonza",
    description: `Leading the development project for image inspection machines, utilizing various advanced technologies. Spearheading efforts to innovate and optimize inspection processes, ensuring high precision and reliability in product quality assessment.`,
    technologies: ["C#", "AIL", "Python", "OpenCV", "PyTorch", "Blender"],
  },
  {
    year: "2022 - 2023",
    role: "Image Processing Developer",
    company: "Union Tool",
    description: `Developed control systems using C# and created product inspection algorithms utilizing various image processing libraries. Designed and implemented Deep Learning-based inspection algorithms with PyTorch.`,
    technologies: ["C#", "HALCON", "Python", "OpenCV", "PyTorch"],
  },
  {
    year: "2020 - 2021",
    role: "Electrical Control Engineer",
    company: "Micro-tec",
    description: `Developed and maintained electrical control systems for industrial machinery using PLC and MC.`,
    technologies: ["PLC", "MC"],
  },
  {
    year: "2018 - 2020",
    role: "Student",
    company: "Nagaoka University of Technology",
    description: `Developed, implemented, and tested control methods for inverters. Conducted experiments to validate the methodologies. Authored and submitted three papers to peer-reviewed international conferences, all of which were published by IEEE.`,
    technologies: ["FPGA", "C", "Velilog"],
  },
];

export const PROJECTS = [
  {
    title: "PaDiM on C++ and C#",
    image: project_padim_Cpp_Cs,
    description:
      "A PaDiM implementation using C#, C++, and ONNX Runtime, enabling training and inference WITHOUT Python dependency.",
    technologies: ["C#", "C++", "ONNX"],
  },
  {
    title: "Machine 3D Modeling",
    image: project_3D_modeling,
    description:
      "Conducted 3D modeling of development machines using Blender, with motion verification through partial physical simulations.",
    technologies: ["Blender", "Python"],
  },
  {
    title: "Portfolio Profile",
    image: project_portolio,
    description:
      "Created a portfolio using React to gain expertise in modern UI design and web application development.",
    technologies: ["HTML", "Tailwind CSS", "Javascript", "React", "Vite"],
  },
];

export const CONTACT = {
  address: "Sagamihara, Kanaagawa, Japan",
  phoneNo: "+81 90 8433 6612",
  email: "omomo1017@gmail.com",
};
