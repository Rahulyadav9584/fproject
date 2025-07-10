import Client from "../models/Client.js";

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const addClient = async (req, res) => {
  const { name, imageUrl, description, designation } = req.body;

  if (!name || !imageUrl || !description || !designation) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const newClient = new Client({ name, imageUrl, description, designation });
  const saved = await newClient.save();
  res.status(201).json(saved);
};
