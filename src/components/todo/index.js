import React, { useState } from "react";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "Study",
      isDone: false,
    },
    {
      id: Date.now(),
      text: "Feeding Cats",
      isDone: false,
    },
  ]);

  return (
    <div>
      <Header />
      <Body todos={todos} />
      <Footer />
    </div>
  );
}

export default Todo;
