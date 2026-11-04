
import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

// =====================================
// CODE EDITOR ANIMATION SCENES
// =====================================

const scenes = [
  {
    title: "bash — battleship",
    color: "#ff725e",
    text: `> select all from targets where status = 'miss';
[ { id: 1, location: 'F2', status: 'MISS' } ]

> select all from targets where status = 'hit';
[ { id: 2, location: 'E5', status: 'HIT' } ]`
  },
  {
    title: "App.jsx — React",
    color: "#61dafb",
    text: `import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  {
    title: "main.py — Python",
    color: "#4B8BBE",
    text: `def fetch_user_data(user_id):
    # Simulate database call
    print(f"Fetching data for {user_id}...")
    return {"id": user_id, "status": "active"}

user = fetch_user_data(42)
print(user['status'])`
  }
];


// =====================================
// PROJECTS COMPONENT
// =====================================

const Projects = () => {

  // Animation states
  const [displayText, setDisplayText] = useState("");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // =====================================
  // TYPING ANIMATION
  // =====================================

  useEffect(() => {

    const currentScene = scenes[sceneIndex];
    let timeout;

    if (!isDeleting && charIndex < currentScene.text.length) {

      timeout = setTimeout(() => {

        setDisplayText(
          currentScene.text.substring(0, charIndex + 1)
        );

        setCharIndex(charIndex + 1);

      }, 30);

    }

    else if (!isDeleting && charIndex === currentScene.text.length) {

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);

    }

    else if (isDeleting && charIndex > 0) {

      timeout = setTimeout(() => {

        setDisplayText(
          currentScene.text.substring(0, charIndex - 1)
        );

        setCharIndex(charIndex - 1);

      }, 12);

    }

    else if (isDeleting && charIndex === 0) {

      setIsDeleting(false);

      setSceneIndex((prev) => (prev + 1) % scenes.length);

    }

    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, sceneIndex]);


  // =====================================
  // MAIN RETURN
  // =====================================

  return (

    <section className="projects" id="projects">

      {/* =====================================
          SECTION HEADER
      ===================================== */}

      <div className="projects__header">

        <h2 className="projects__title">
          Projects
        </h2>

        <div className="projects__line">
          <span className="projects__line-dot"></span>
        </div>

      </div>


      {/* =====================================
          ALL PROJECTS CONTAINER
      ===================================== */}

      <div className="projects__list">


        {/* =====================================
            PROJECT 1: BATTLESHIP & MORE
        ===================================== */}

        <div className="project-card">

          {/* LEFT: PROJECT INFORMATION */}

          <div className="project-card__info">

            <h3 className="project-card__title">
              Battleship & More
            </h3>

            <div className="project-card__tags">

              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Javascript</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>

            </div>

            <p className="project-card__desc">
              Used components of Javascript to implement basic
              data structures through the game of Battleship.
              Used a terminal to display ships and tracked
              where ships are hit or missed.
            </p>

            <div className="project-card__actions">

              <a
                href="#github"
                className="btn--primary"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>

              <a
                href="#live"
                className="btn--text"
                target="_blank"
                rel="noreferrer"
              >
                View project
                <span className="arrow-icon">↗</span>
              </a>

            </div>

          </div>


          {/* RIGHT: ANIMATED CODE EDITOR */}

          <div className="project-card__editor-wrapper">

            {/* Editor Header */}

            <div className="editor-header">

              <div className="editor-dots">

                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>

              </div>

              <span
                className="editor-title"
                style={{
                  color: scenes[sceneIndex].color
                }}
              >
                {scenes[sceneIndex].title}
              </span>

            </div>


            {/* Editor Body */}

            <div className="editor-body">

              <div
                className="code-line typed-line"
                style={{
                  color: scenes[sceneIndex].color
                }}
              >

                {displayText}

                <span
                  className="cursor"
                  style={{
                    backgroundColor: scenes[sceneIndex].color
                  }}
                ></span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            PROJECT 2: MOVIE TITLES API
        ===================================== */}

        <div className="project-card project-card--reverse">

          {/* LEFT: MOVIE POSTERS */}

          <div className="project-card__movies-wrapper">

            <div className="movie-poster">

              <img
                src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
                alt="The Godfather movie poster"
              />

            </div>

            <div className="movie-poster">

              <img
                src="https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
                alt="Top Gun Maverick movie poster"
              />

            </div>

          </div>


          {/* RIGHT: PROJECT INFORMATION */}

          <div className="project-card__info">

            <h3 className="project-card__title">
              Movie Titles API
            </h3>

            <div className="project-card__tags">

              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Javascript</span>
              <span className="tag">API</span>
              <span className="tag">Version control</span>

            </div>

            <p className="project-card__desc">
              Uses a public movie API to build a collection movie
              list that sorts from A to Z or vice versa. It also
              counts how many movies in each container and adds
              user's favorite movies into another container.
            </p>

            <div className="project-card__actions">

              <a
                href="#github"
                className="btn--primary"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>

              <a
                href="#live"
                className="btn--text"
                target="_blank"
                rel="noreferrer"
              >
                View project
                <span className="arrow-icon">↗</span>
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            PROJECT 3: JAVASCRIPT CALCULATOR
        ===================================== */}

        <div className="project-card">

          {/* LEFT: PROJECT INFORMATION */}

          <div className="project-card__info">

            <h3 className="project-card__title">
              Javascript Calculator
            </h3>

            <div className="project-card__tags">

              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Javascript</span>
              <span className="tag">Node.js</span>

            </div>

            <p className="project-card__desc">
              Uses simple algorithm concepts in Javascript to
              produce an arithmetic result in a terminal.
              Implements basic mathematical operations including
              addition, subtraction, multiplication and division.
            </p>

            <div className="project-card__actions">

              <a
                href="#github"
                className="btn--primary"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>

              <a
                href="#live"
                className="btn--text"
                target="_blank"
                rel="noreferrer"
              >
                View project
                <span className="arrow-icon">↗</span>
              </a>

            </div>

          </div>


          {/* RIGHT: CALCULATOR CODE PREVIEW */}

          <div className="calculator-preview">

            <div className="calculator-code">

              <div className="code-row">
                <span className="code-purple">if</span>
                <span className="code-white">
                  {" (prompt === '+') {"}
                </span>
              </div>

              <div className="code-row">
                &nbsp;&nbsp;console.log(
                <span className="code-yellow">
                  'The result is '
                </span>
                + (a + b));
              </div>

              <div className="code-row">
                <span className="code-purple">
                  {"} else if"}
                </span>
                <span className="code-white">
                  {" (prompt === '-') {"}
                </span>
              </div>

              <div className="code-row">
                &nbsp;&nbsp;console.log(
                <span className="code-yellow">
                  'The result is '
                </span>
                + (a - b));
              </div>

              <div className="code-row">
                <span className="code-purple">
                  {"} else if"}
                </span>
                <span className="code-white">
                  {" (prompt === '*') {"}
                </span>
              </div>

              <div className="code-row">
                &nbsp;&nbsp;console.log(
                <span className="code-yellow">
                  'The result is '
                </span>
                + (a * b));
              </div>

              <div className="code-row">
                <span className="code-purple">
                  {"} else if"}
                </span>
                <span className="code-white">
                  {" (prompt === '/') {"}
                </span>
              </div>

              <div className="code-row">
                &nbsp;&nbsp;console.log(
                <span className="code-yellow">
                  'The result is '
                </span>
                + (a / b));
              </div>

              <div className="code-comment">
                // Trying to get the operation from user
              </div>

              <div className="code-row">

                <span className="code-blue">if</span>
                {" (prompt === "}

                <span className="code-yellow">'+'</span>

                {" || prompt === "}

                <span className="code-yellow">'-'</span>

                {")"}

              </div>

              <div className="code-row">
                &nbsp;&nbsp;calculateNum(num1, num2);
              </div>

            </div>

          </div>

        </div>


{/* =====================================
    PROJECT 4: SAAS LANDING PAGE
===================================== */}

<div className="project-card project-card--reverse">

  {/* LEFT: WEBSITE PREVIEW */}

 <div className="project-card__saas-wrapper">
   <img
    src={`${import.meta.env.BASE_URL}images/SaaS.png`}
    alt="SaaS Landing Page screenshot"
    className="saas-preview-img"
  />
</div>


  {/* RIGHT: PROJECT INFORMATION */}

  <div className="project-card__info">

    <h3 className="project-card__title">
      SaaS Landing Page
    </h3>

    <div className="project-card__tags">

      <span className="tag">HTML</span>
      <span className="tag">CSS</span>

    </div>

    <p className="project-card__desc">
      Used HTML concepts such as creating a form and a basic
      skeleton. It also used components of both the grid and
      flexbox elements to produce a landing page.
    </p>

    <div className="project-card__actions">

      <a
        href="#github"
        className="btn--primary"
        target="_blank"
        rel="noreferrer"
      >
        View Github
      </a>

      <a
        href="#live"
        className="btn--text"
        target="_blank"
        rel="noreferrer"
      >
        View project
        <span className="arrow-icon">↗</span>
      </a>

    </div>

  </div>

</div>


      </div>

    </section>

  );

};

export default Projects;
