import React from "react";
import Email from "../Email/Email";

export class Inbox extends React.Component {
  render() {
    const {emails } = this.props;

    const emailCards = emails.map((e) => <Email key={e.id} email={e} />);

    return (
      <div>
        {emails.length === 0 && <div>You dont`t have any emails</div>}
        <ul>{emailCards}</ul>
      </div>
    );
  }
}
