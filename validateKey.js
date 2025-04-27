module.exports = (req, res) => {
  // Danh sách key hợp lệ
  const validKeys = [
    "W-MB-JJE8-JEJE8-JE7S7",
    "W-MB-ABCD-EFGH1-23456",
    "W-MB-ABCD-EFGH1-918"
  ];

  const { key } = req.body;

  // Kiểm tra xem key có hợp lệ không
  if (validKeys.includes(key)) {
    res.status(200).json({ isValid: true });
  } else {
    res.status(400).json({ isValid: false });
  }
};
