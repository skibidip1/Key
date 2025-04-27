export default function handler(req, res) {
  const validKeys = [
    "W-MB-JJE8-JEJE8-JE7S7",
    "W-MB-ABCD-EFGH1-23456",
    "W-MB-ABCD-EFGH1-918"
  ];

  const { key } = req.body || {};

  if (!key) {
    return res.status(400).json({ message: "Missing key" });
  }

  if (validKeys.includes(key)) {
    return res.status(200).json({ isValid: true });
  } else {
    return res.status(401).json({ isValid: false });
  }
}
