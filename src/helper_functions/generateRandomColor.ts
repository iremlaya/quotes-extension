import {
  backgroundColorsWithHover,
  IBackgroundColorWithHover,
} from "../constants/colors";
import { IQuote } from "../interfaces";

export const generateRandomColor = (): IBackgroundColorWithHover => {
  return backgroundColorsWithHover[
    Math.floor(Math.random() * backgroundColorsWithHover.length)
  ];
};

// Ensure no two same colors follow each other by row or column
export const generateDifferentRandomColorArray = (data: IQuote[]) => {
  let arr: any[] = [];
  let prevArr: any[] = [];

  for (let index = 0; index < data.length; index++) {
    let color: IBackgroundColorWithHover;
    color = generateRandomColor();
    console.log("initial color: ", color);

    while (true) {
      if (
        (prevArr.length > 0 && prevArr[index - 1]?.bg === color.bg) ||
        (prevArr.length > 4 && prevArr[index - 4]?.bg === color.bg)
      ) {
        console.log("index: ", index);
        console.log("arr[index - 5]?.bg: ", prevArr[index - 4]?.bg);
        color = generateRandomColor();
      } else {
        break;
      }
    }

    console.log("pushing color: ", color);
    arr.push(color);
    prevArr.push(color);
    console.log('prevArr: ', prevArr);
}
  return arr;
};

// import { backgroundColorsWithHover, IBackgroundColorWithHover } from "../constants/colors";
// import { IQuote } from "../interfaces";

// export const generateRandomColor = (): IBackgroundColorWithHover => {
//     return backgroundColorsWithHover[Math.floor(Math.random()*backgroundColorsWithHover.length)];
// }

// export const generateDifferentRandomColorArray = (data: IQuote[]) => {
//     let arr: IBackgroundColorWithHover[] = [];
//     let prevColor: IBackgroundColorWithHover | undefined;

//     for (let index = 0; index < data.length; index++) {
//       let color: IBackgroundColorWithHover;
//       color = generateRandomColor();

//       if (prevColor?.bg && prevColor.bg === color.bg) {
//         while(color.bg === prevColor.bg){
//           color = generateRandomColor();
//         }
//       }
//       arr.push(color);
//       prevColor = color;
//     }
//     return arr;
// }
