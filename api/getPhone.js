export default function handler(req, res) {
  const phones = {
    "19": "+5511952042591",
    "21": "+5511932506701",
    "27": "+5511999621261",
    "30": "+5511987217160",
    "52": "+5511963473502",
    "53": "+5511947543037"
  };

  const houseNumber = req.query.houseNumber?.padStart(2, "0");
  const phone = phones[houseNumber] || `+55119${(10000000 + parseInt(houseNumber)).toString().slice(-8)}`;

  res.status(200).json({ phone });
}
