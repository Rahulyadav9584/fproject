import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const addContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;

  if (!fullName || !email || !mobile || !city) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const newContact = new Contact({ fullName, email, mobile, city });
  const saved = await newContact.save();
  res.status(201).json(saved);
};
