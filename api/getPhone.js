export default function handler(req, res) {
  const { houseNumber } = req.query;

  const telefonesPorCasa = {
    "19": ["+5511952042591"],
    "21": ["+5511932506701"],
    "27": ["+5511999621261", "+5511990192995"],
	"30": ["+5511987217160"],
	"52": ["+5511947543037"],
    "53": ["+5511947543037"]
  };

  const phones = telefonesPorCasa[houseNumber];

  if (phones) {
    res.status(200).json({ phones });
  } else {
    res.status(404).json({ error: "Número não encontrado." });
  }
}
