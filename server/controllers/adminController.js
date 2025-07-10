 export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  let envEmail = process.env.ADMIN_EMAIL;
  let envPassword = process.env.ADMIN_PASSWORD;

  if (email !== envEmail || password !== envPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.status(200).json({ message: "Login successful" });
};

