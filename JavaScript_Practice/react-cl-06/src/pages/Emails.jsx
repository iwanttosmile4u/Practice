import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Emails = () => {
  const [allEmails, setAllEmails] = useState(null);
  useEffect(() => {
    fetch("emails.json")
      .then((res) => res.json())
      .then((data) => setAllEmails(data));
  }, []);

  if (!allEmails) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Emails</h1>

      <Sidebar folderList={Object.keys(allEmails)} />
      {/* <EmailsList list={} /> */}
    </div>
  );
};

export default Emails;
