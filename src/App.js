import React, { Component } from "react";

import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

// import Todo from "./components/todo/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "To Do List",
        sub: "Life is too short, you need to do it!",
      },
      contents: [
        { id: 1, title: "html", desc: "markup language" },
        { id: 2, title: "css", desc: "design language" },
        { id: 3, title: "javascript", desc: "interaction language" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content title="Hello" desc="Every one" />
        {/* <Todo /> */}
      </div>
    );
  }
}

export default App;
