import { backgroundColors } from "../constants/colors";

export const generateRandomColor = () => {
    return backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
}