import React from "react";
import { Email } from "../Email/Email";

export class Body extends React.Component {
  render() {
    const { user, incrementAge, updateTitle, emails } = this.props;

    const emailCards = emails.map((email) => (
      <Email key={email.id} email={email} />
    ));

    return (
      <div>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <button onClick={incrementAge}>Increment age</button>
        <button onClick={updateTitle}>Update title</button>
        {emailCards}

        {user.email && <div className="email">{user.email}</div>}
      </div>
    );
  }
}
