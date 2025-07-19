const Session = require("../models/Session");

exports.addSession = async (req, res) => {
  const { date, entry, exit, duration } = req.body;
  try {
    const session = await Session.create({ date, entry, exit, duration });
    res.status(201).json(session);
  } catch (err) {
    res.status(400).json({ error: "Failed to add session" });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
};
