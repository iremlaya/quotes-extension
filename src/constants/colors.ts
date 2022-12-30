// todo :: find a better way to store these colors, since it needs to be updated in tailwind config as well
export const backgroundColorsWithHover = [
  { bg: "bg-pink", shadow: "hover:shadow-pink" },
  { bg: "bg-coral", shadow: "hover:shadow-coral" },
  { bg: "bg-lemon", shadow: "hover:shadow-lemon" },
  { bg: "bg-green", shadow: "hover:shadow-green" },
  { bg: "bg-lightBlue", shadow: "hover:shadow-lightBlue" },
  { bg: "bg-blue", shadow: "hover:shadow-blue" },
  { bg: "bg-yellow", shadow: "hover:shadow-yellow" },
] as const;

export type IBackgroundColorWithHover = typeof backgroundColorsWithHover[number];
