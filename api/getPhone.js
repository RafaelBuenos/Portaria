export default function handler(req, res) {
  const { houseNumber } = req.query;

  const telefonesPorCasa = {
    "02": ["+5511996964107"],
    "10": ["+5511980155926"],
    "19": ["+5511952042591", "+5511970276416"],
    "21": ["+5511932506701"],
    "27": ["+5511999621261", "+5511990192995"],
    "30": ["+5511987217160"],
    "31": ["+5511951672673"],
    "34": ["+5511959323171"],
    "42": ["+5511985447680"],
    "52": ["+5511947543037"],
    "53": ["+5511947543037"],
    "69": ["+5511932883943", "+5511944527594"],
    "70": ["+5511994307799"]
  };

  const phones = telefonesPorCasa[houseNumber];

  if (phones) {
    res.status(200).json({ phones });
  } else {
    res.status(404).json({ error: "Número não encontrado." });
  }
}
