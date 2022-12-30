import { IQuote } from "../interfaces";
import { BodyText } from "../typography/BodyText";

interface IQuoteCardProps {
    item: IQuote;
    bgColor: `bg-${string}`;
    shadow: `hover:shadow-${string}`;
}
export const QuoteCard: React.FC<IQuoteCardProps> = ({item, bgColor, shadow}) => {
  return bgColor ? (
    <div
      className={`rounded-xl text-black ${bgColor} hover:shadow-default ${shadow} h-full w-full flex justify-center items-center p-4 hover:`}
    >
      <BodyText>{item.quote}</BodyText>
    </div>
  ) : (
    <></>
  );
};
