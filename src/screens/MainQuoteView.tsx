import React from "react";
import { FullScreen } from "../layout/FullScreen";
import { Subtitle } from "../typography/Subtitle";
import { Title } from "../typography/Title";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";

interface IMainQuoteProps {
  handleOnScrollClick: () => void;
}

export const MainQuote: React.FC<IMainQuoteProps> = ({handleOnScrollClick}) => {
  return (
    <FullScreen>
      <div className="px-14 py-0 row-span-5 col-span-full row-start-2">
        <Title>Quote comes here</Title>
        <Subtitle>author!!</Subtitle>
      </div>
      <div onClick={handleOnScrollClick} className="row-span-1 col-span-2 row-start-6 col-start-2 flex justify-center items-end cursor-pointer">
        <ArrowDown />
      </div>
    </FullScreen>
  );
};
