import { useState } from "react";
import ButtonTailwind from "./ButtonTailwind";
import ConditionalRendering from "./ConditionalRendering";
import Postcards from "./Postcards";
function App() {
  const [show, setShow] = useState(false);
  const changer = (value) => {
    setShow(value);
  };

  return (
    <>
      <h1 className="text-5xl text-center mt-3">پروژه حامدیخواه</h1>
      <section className="flex flex-col gap-10 my-10">
        <ButtonTailwind OnChanger={changer} />
        {show && <ConditionalRendering />}
        <Postcards />
      </section>
    </>
  );
}

export default App;
