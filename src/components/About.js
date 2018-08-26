import React from 'react';
import { Helmet } from "react-helmet";
import AppHeader from './AppHeader';

// Site About page
const About = () => {
  return (
    <div className="About">

      <Helmet>
        <title>About The Site | Risk Dice Roller</title>
        <meta name="description" content="The Risk Dice Roller speeds up the board game Risk by letting the computer roll for you. Get rolling results right away." />
      </Helmet>

      <AppHeader />
      <div className="About-contents">
        <h2>About</h2>

        <p>I have fond memories of going on vacation as a kid and playing long games of Risk with my cousins late into the night. But sometimes things just went on too long. As the game progresses and the number of armies accumulate, the time it takes to roll starts to become a drag, with rolling easily taking ten or more minutes per turn. It starts to feel less like a game of global domination and more like a game of endless rolling.</p>

        <p>That's the problem I wanted to solve with this site. By letting the computer handle the rolling, the game can speed up and the focus can move back to strategy. Just enter your rolling preferences and the computer will handle the rest. You can even add additional stop conditions, and the computer will automatically adjust the number of dice rolled as needed. I hope you find it helpful.</p>

        <h3>About Me</h3>

        <p>My name is Michael Buckley, and I’m a web developer. I built this site using React and Redux, and the code is available to view on my GitHub account in the <a href="https://www.github.com/mjbuckley/risk-dice-roller">risk-dice-roller</a> repository. While you're there, take a look at my <a href="https://github.com/mjbuckley">GitHub profile</a> to see some of my other projects. If you would like to get in touch with me about this site or about your web development needs, you can reach me at <span className="About-email">contactmichaelbuckley@gmail.com</span>.</p>
      </div>
    </div>
  );
};

export default About;
