import React from 'react'
import img1 from '../project/p1.png'
import img2 from '../project/p2.png'
import img3 from '../project/p3.png'
import img4 from '../project/p4.png.png'
import Card from 'react-bootstrap/Card';
import './project.css'
const Project = () => {
  const projects = [
    {
      img: img1,
      title: 'G-Shop',
      text: 'G-Shop is a fully functional e-commerce grocery store built with React. The application allows users to browse and purchase groceries online',
      liveLink: 'https://g-shopping-gamma.vercel.app/',
      codeLink: 'https://github.com/karthickeyam/G-Shopping',
    },
    {
      img: img2,
      title: 'Weather App',
      text: ' Weather is a modern and intuitive weather application built with React, OpenWeatherMap API. The application provides users with real-time weather information, forecasts, and alerts, helping them plan their daily activities and stay safe in severe weather conditions.',
      liveLink: 'https://weather-app-hosting.netlify.app/',
      codeLink: 'https://github.com/karthickeyam/react_weather_app',
    },
    {
      img: img3,
      title: 'TO DO LIST',
      text: 'Todo is a simple yet powerful to-do list application built with React, LocalStorage. The application allows users to create, edit, and manage their to-do lists, helping them stay organized and productive.',
      liveLink: 'https://react-to-do-list-kohl.vercel.app/',
      codeLink: 'https://github.com/karthickeyam/react_to_do_list',
    },
    {
      img: img4,
      title: 'FIRST PROJECT',
      text: 'Its an simple project which i have using HTML and CSS.',
      codeLink:'https://github.com/karthickeyam/firstproject',
    },
  ];

  return (
    <div className='allprojects' id='project'>
      <h1>PROJECTS</h1>
      <div className='center'>
        {projects.map((project, index) => (
          <Card key={index}  className='card'>
            <Card.Img variant="top" src={project.img}/>
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>{project.title}</Card.Title>
              <Card.Text className='card-text'>
                {project.text}
              </Card.Text>
              <div className='main-link'>
              <Card.Link href={project.liveLink} className='card-link'>
                <button>View Live</button>
                 </Card.Link>
              <Card.Link href={project.codeLink} className='card-link'>
                <button>View code</button>
                </Card.Link>
                </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project