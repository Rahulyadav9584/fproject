import Project from "../models/Project.js";


export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const addProject = async (req, res) => {
  const { name, imageUrl, description } = req.body;

  if (!name || !imageUrl || !description) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const newProject = new Project({ name, imageUrl, description });
  const saved = await newProject.save();
  res.status(201).json(saved);
};

