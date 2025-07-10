import Newsletter from "../models/Newsletter.js";

export const getSubscribers = async (req, res) => {
  const emails = await Newsletter.find();
  res.json(emails);
};

export const addSubscriber = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Email is required");
  }

  const newSub = new Newsletter({ email });
  const saved = await newSub.save();
  res.status(201).json(saved);
};
