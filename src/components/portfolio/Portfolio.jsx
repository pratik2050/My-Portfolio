import React from 'react';
import IMG1 from '../../assets/anarc.png';
import IMG2 from '../../assets/tictacApp.png';
import IMG3 from '../../assets/pokedex.png'
import IMG4 from '../../assets/lyriks.png';
import IMG5 from '../../assets/videocallApp.png';
import IMG6 from '../../assets/template.png'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'ANARC Website',
      img: IMG1,
      description:
        'Developed the ANARC Robotics Club website from scratch',
      technologies: 'HTML | CSS | JS',
      link: 'https://anarcnita.in/',
      github: 'https://github.com/pratik2050/anarc-website',
    },
    {
      id: 2,
      title: 'Tic Tac Toe',
      img: IMG2,
      description:
        'Tic Tac Toe game made with React Js where a player can also track history of moves',
      technologies: 'React | Firebase',
      link: 'https://tictacby-pratik.surge.sh/',
      github: 'https://github.com/pratik2050/tic-tac-toe',
    },
    {
      id: 3,
      title: 'Pokedex App',
      img: IMG3,
      description:
        'Pokedex App that gives all information regarding a particular Pokemon',
      technologies: 'React | Poke-API | Firebase',
      link: 'https://pokedex-4e348.web.app/gen-i',
      github: 'https://github.com/pratik2050/Pokedex-App',
    },
    {
      id: 4,
      title: 'Lyriks Player',
      img: IMG4,
      description: 'Fully functional Music Player with search feature',
      technologies: 'React | Redux | RapidAPI',
      link: 'https://pratik-lyriks-player.web.app/',
      github: 'https://github.com/pratik2050/React-Music-Player',
    },
    {
      id: 5,
      title: 'PChatz App',
      img: IMG5,
      description:
        'Group Video Calling App made with Django and Agora SDK',
      technologies: 'Django | Agora SDK',
      link: 'https://videoapp-yl3w.onrender.com',
      github: 'https://github.com/pratik2050/VideoCall-App',
    },
    {
      id: 6,
      title: 'Front End Templates',
      img: IMG6,
      description:
        'Front End Templates for various types of websites',
      technologies: 'HTML | CSS',
      link: 'https://github.com/pratik2050/Practice_Website_Templates',
      github: 'https://github.com/pratik2050/Practice_Website_Templates',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
