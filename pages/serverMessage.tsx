import React from "react";
import fetch from "isomorphic-unfetch";
import { NextPageContext } from "next";

interface Props {
  stars?: string;
}

class serverMessage extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    const { stars } = this.props;
    return <div>This is a server message: {stars} </div>;
  }
}

export default serverMessage;
