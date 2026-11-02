// Kleuren en vaste stijlen van de Compass-app (~/dev/compass, components/report/*), voor de voorbeeldschermen.
export const AW = {
  navy: "#0F2D52", turquoise: "#048192", slate: "#5B6B7F", ink: "#33475E",
  wolk: "#F5F8FA", line: "#C9CED6", tile: "#DDE2E8", hair: "#EEF1F4",
  forest: "#2D6A4F", forestDark: "#1A4A35", forestLight: "#EDF4F0", forest900: "#1A2E22",
};

// Controle-diagnosekaart (L2ReportView.tsx): scoreColor / scoreBg
export const scoreColor = (v: number) => (v < 2.0 ? "#E24B4A" : v < 3.0 ? "#EF9F27" : "#639922");
export const scoreBg = (v: number) =>
  v < 2.0 ? "rgba(226, 75, 74, 0.12)" : v < 3.0 ? "rgba(239, 159, 39, 0.14)" : "rgba(99, 153, 34, 0.14)";

export const kader = `background-color:#ffffff; border:1px solid ${AW.tile}; border-radius:10px; overflow:hidden; color:${AW.navy};`;
export const eyebrow = `margin:0 0 14px; font-size:11px; font-weight:600; letter-spacing:0.12em; color:${AW.slate}; text-transform:uppercase;`;
export const zoneLabel = `margin:0 0 4px; font-size:11px; font-weight:600; letter-spacing:0.12em; color:${AW.forest}; text-transform:uppercase;`;
