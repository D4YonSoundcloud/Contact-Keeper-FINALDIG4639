import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        This is my final project for the my DIG4639 class at UCF! This was
        created in MongoDB, Express, React, and NodeJS! I already have
        experience with SQL databases and PHP and wanted to try a noSQL database
        and NodeJS, which I've heard so much about!
      </p>
      <p className="my-1">
        This project taught me ALOT of things, as it was my first major project
        using MongoDB and Express. While debugging is part of any web dev
        project, debugging for this particular project was quite tough, as I
        also decided to use reacts new Context and Hooks features, and while I
        do have a much better understanding of them now, it was not that easy. I
        had to deal with new bugs and error messages I had never seen before, as
        well as read through quite a bit of documentation. I will say going
        foward though, that I will probably prefer to use Context and Hooks over
        the older class based components React offers. As for my opinion on the
        backend side of things. I will say that using nodeJS, Express, and
        MongoDB were not as bad I thought, integrating with my Context was not
        that difficult either, I could definetly see myself doing more projects
        with these languages in the future, I felt it was easier to work with
        than PHP and mySQL at least
      </p>
      <p className="bg-dark p">
        Version<strong>1.0.0</strong>
      </p>
    </div>
  );
};

export default About;
