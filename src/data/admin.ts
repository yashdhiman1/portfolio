// Admin configuration and editable content
export interface AdminConfig {
  about: {
    title: string;
    description: string;
    experience: string;
    specialties: string;
    location: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    instagram: string;
    description: string;
  };
  campaigns: {
    [id: string]: {
      name: string;
      date: string;
      description: string;
      images: string[];
    };
  };
}

export const defaultAdminConfig: AdminConfig = {
  about: {
    title: "About",
    description: "I'm Beej Lakhani, a creative professional passionate about design, photography, and visual storytelling. With years of experience in the creative industry, I specialize in creating compelling visual narratives that connect with audiences on a deeper level.",
    experience: "5+ years in creative design",
    specialties: "Digital Design, Photography, Brand Identity",
    location: "Based in New York"
  },
  contact: {
    email: "beej@example.com",
    phone: "+1 (234) 567-890",
    linkedin: "https://linkedin.com/in/beejlakhani",
    instagram: "https://instagram.com/beejlakhani",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
  },
  campaigns: {}
};

// Load admin config from localStorage or use default
export const loadAdminConfig = (): AdminConfig => {
  const saved = localStorage.getItem('adminConfig');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error('Error loading admin config:', error);
    }
  }
  return defaultAdminConfig;
};

// Save admin config to localStorage
export const saveAdminConfig = (config: AdminConfig): void => {
  localStorage.setItem('adminConfig', JSON.stringify(config));
}; 