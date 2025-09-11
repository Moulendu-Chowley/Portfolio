"use client";

import React, { createContext, useContext, useState } from "react";

interface Project {
  tag: string;
  title: string;
  description: string;
  image: string;
  year: string | number;
  bulletPoints?: string[];
  detailedDescription?: string;
  technologies?: string[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
  gallery?: string[];
  challenge?: string;
  solution?: string;
}

interface ModalContextType {
  isModalOpen: boolean;
  currentProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, currentProject, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
