import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {


  // useEffect(() => {
  //   authContext.loadUser();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <ContactFilter></ContactFilter>
        <Contacts className="container-contacts"></Contacts>
      </div>
    </div>
  );
};

export default Home;
