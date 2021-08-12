import React from "react";
import Email from "../Email/Email";

export class Inbox extends React.Component {
  render() {
    const { incrementAge, updateTitle, emails } = this.props;

    const emailCards = emails.map((e) => <Email key={e.id} email={e} />);

    return (
      <div>
        <button onClick={incrementAge}>Increment age</button>
        <button onClick={updateTitle}>Update title</button>
        <ul>{emailCards}</ul>
      </div>
    );
  }
}
