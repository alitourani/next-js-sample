import React from "react";
import fetch from "isomorphic-unfetch";

class serverMessage extends React.Component {
  static async getInitialProps(context) {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return <div>This is a server message: {this.props.stars}</div>;
  }
}

export default serverMessage;
