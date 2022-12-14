import React, { useRef } from "react";
import { ThemeContext } from "./layout/ThemeContext";
import { MainQuote } from "./screens/MainQuoteView";
import { QuoteCards } from "./screens/QuoteCardsView";


function App() {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: "smooth"})}

  return (
    <ThemeContext>
      <MainQuote handleOnScrollClick={handleScroll}/>
      <QuoteCards ref={ref}/>
    </ThemeContext>
  );
}

export default App;
