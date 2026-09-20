// Central place for personal / brand information.
// Update this file to change contact details, socials, or hero copy site-wide.

export const site = {
  name: "Horlar Jnr",
  brand: "Horlar.dev",
  role: "Frontend Developer",
  headline:
    "Crafting clean code and thoughtful design into seamless web experiences",
  statement:
    "I'm driven by a passion for puzzle-solving and practical impact. What I love most about web development is turning abstract ideas into tangible applications that solve real-world problems and bring value to users.",
  aboutHeading: {
    line1: "Turning Ideas into",
    line2: "Real Solutions",
  },
  aboutParagraphs: [
    "I'm a Frontend Developer with a growing interest in backend development, currently pursuing a B.Sc. in Computer Science with Mathematics. I enjoy building responsive, accessible, and user-friendly web applications using modern technologies like React, Next.js, TypeScript and Supabase.",
    "I'm constantly learning, exploring new tools, and looking for opportunities to work on meaningful projects, collaborate with great teams, and grow into a full stack developer.",
  ],
  location: "Osun, Nigeria",
  availability: "Open to new opportunities",
  availabilityShort: "Available for work",
  email: "olayemimotin2021@gmail.com",
  whatsapp: "08125313072",
  cvPath: "/assets/documents/cv.pdf",
};

export const socials = {
  github: "https://github.com/Horlarjnr",
  linkedin: "https://www.linkedin.com/in/olayemi-motin-074aa535b/",
  x: "https://x.com/motin_olay64162",
  facebook: "https://www.facebook.com/Horlarjnr1",
  email: `mailto:${site.email}`,
};

export const contactDetails = [
  { label: "Location", value: site.location, href: undefined },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "Phone / WhatsApp",
    value: site.whatsapp,
    href: `https://wa.me/234${site.whatsapp.replace(/^0/, "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/Horlarjnr",
    href: socials.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/olayemi-motin-074aa535b",
    href: socials.linkedin,
  },
  { label: "X", value: "x.com/motin_olay64162", href: socials.x },
  {
    label: "Facebook",
    value: "facebook.com/Horlarjnr1",
    href: socials.facebook,
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
