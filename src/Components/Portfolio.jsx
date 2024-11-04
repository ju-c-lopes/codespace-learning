/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workdesk.jpg";

const imageAltText = "desktop with work tools like a laptop, a book and a light bulb";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Classes management system in order to help teachers accomplish BNCC goals applications",
    description:
      "A Web Application made with Django to register classes, helping teachers and academic coordinators to understand how the BNCC has been applied.",
    url: "https://github.com/ju-c-lopes/aplicacao-django",
  },
  {
    title: "A Linux Shell Script to facilitate the choices of virtual environments in Python",
    description:
      "This script read all installed virtual environments and let you choose which one to activate whenever you open a terminal window.",
    url: "https://github.com/ju-c-lopes/virtual-environment-choice",
  },
  {
    title: "Photography Project Website",
    description:
      "An old project initiated in 2018 to show photography works from a friend. It was made with HTML, CSS and JavaScript.",
    url: "https://ju-c-lopes.github.io/projeto-fotografia/",
  },
  {
    title: "TicTacToe Javascript Game",
    description:
      "A simple webpage game made with HTML, CSS and JavaScript to play TicTacToe. It was made to practice several concepts of algorithms using JavaScript.",
    url: "https://ju-c-lopes.github.io/TicTacToe---JavaScript/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
