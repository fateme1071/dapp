import React from "react";
import { Button, Collapse, Modal, ToggleSwitch } from "../components";

const Components = () => {
  const [col, setCol] = React.useState(false);
  const [mod, setMod] = React.useState(false);
  return (
    <div dir="ltr" className="flex flex-col items-start p-4 gap-2">
      <h2>Button: </h2> <Button>button</Button>
      <h2>Button with loading: </h2> <Button loading>button</Button>
      <h2>Collapse: </h2>
      <Button onClick={() => setCol(s => !s)}>collapse</Button>
      <Collapse open={col}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores aut
        quia esse hic ullam! Minima reiciendis veniam laboriosam dicta modi
        iure, atque cum debitis beatae aliquam placeat adipisci vel recusandae!
      </Collapse>
      <h2>Modal:</h2> <Button onClick={() => setMod(true)}>open modal</Button>
      <Modal locked={false} open={mod} onClose={() => setMod(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ratione
        illum voluptatem? Accusamus eaque quasi velit, deleniti obcaecati vero
        laudantium reiciendis blanditiis recusandae. Numquam reprehenderit
        cupiditate in minima optio repellendus.
      </Modal>
      <h2>ToggleSwitch:</h2>
      <div dir="rtl">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Components;
