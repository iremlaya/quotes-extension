import { generateRandomColor } from "../helper_functions/generateRandomColor";
import { IQuote } from "../interfaces";
import { BodyText } from "../typography/BodyText";

interface IQuoteCardProps {
    item: IQuote;
}
export const QuoteCard: React.FC<IQuoteCardProps> = ({item}) => {
  const bgColor = generateRandomColor();

  return bgColor ? (
    <div
      className={`rounded-xl text-black ${bgColor} h-full w-full flex justify-center items-center p-4 hover:`}
    >
      <BodyText>{item.quote}</BodyText>
    </div>
  ) : (
    <></>
  );
};
