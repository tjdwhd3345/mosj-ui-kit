import React from "react";
import { Button } from "../../components";

function ButtonPage() {
  return (
    <section>
      <header>Button Component</header>
      <main>
        <Button
          text="버튼1"
          onClick={(e) => {
            console.log(e);
          }}
        />
        <Button />
        <Button />
      </main>
    </section>
  );
}

export default ButtonPage;
