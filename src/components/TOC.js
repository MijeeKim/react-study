import React, { Component } from "react";

class TOC extends Component {
  render() {
    var Lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      Lists.push(
        <li key={data[i].id}>
          <a href={data[i].title + ".html"}>{data[i].title}</a>
        </li>
      );
      i++;
    }
    return (
      <nav>
        <ul>{Lists}</ul>
      </nav>
    );
  }
}

export default TOC;
