import React from "react";
import { QuoteCard } from "../components/QuoteCard";
import { dummyQuotes } from "../data/dummyData";
import { rowSpanClassName } from "../helper_functions/rowSpanClassName";

export const QuoteCards = React.forwardRef<HTMLDivElement>((_, ref) => {
  const rowSpan = 6 / Math.ceil(dummyQuotes.length / 4);
  const rowSpanName = rowSpanClassName[rowSpan - 1];

  return (
    <div ref={ref} className="main-grid min-h-[180px] break-all">
      {dummyQuotes.map((item, index) => (
        <div key={index} className={`grid col-span-1 ${rowSpanName}`}>
          <QuoteCard item={item} />
        </div>
      ))}
    </div>
  );
});
