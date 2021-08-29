// import react
import React from 'react';

// import Project component
import Project from '../components/Project';

// import images and css
import progressiveBudgetImg from '../assets/images/Progressive-Budget.png';
import fitnessTrackerImg from '../assets/images/Fitness-Tracker.png';
import petConnectImg from '../assets/images/Pet-Connect.png';
import techBlogImg from '../assets/images/Tech-Blog.png';
import makeItBuyItImg from '../assets/images/MakeIt-BuyIt.png';
import weatherDashboardImg from '../assets/images/Weather-Dashboard.png';
import '../styles/pages.css';

// list projects (image, title, description, tech, and links to deployed app and repo)
function Portfolio() {

  // array of projects
  const projects = [
    {
      image: progressiveBudgetImg,
      alt: "Screenshot of Progressive Budget App",
      title: "Progressive Budget",
      description: "Progressive Budget is an application that enables a user to add expenses and deposits to their budget. The application is able to be accessed offline and will populate the total when the connection is reestablished.",
      tech: "HTML, CSS, Javascript, Compression, Express, Lite-server, Mongoose, Morgan, Heroku, MongoDB Atlas",
      deployed: "https://iamalittleforest-19-budget.herokuapp.com/",
      repo: "https://github.com/iamalittleforest/19-progressive-budget",
      id: 1
    },
    {
      image: fitnessTrackerImg,
      alt: "Screenshot of Fitness Tracker App",
      title: "Fitness Tracker",
      description: "Fitness Tracker is an application that enables a user to view, create, and track daily workouts. The application also has a dashboard feature that displays historical views of the total duration and total weight of each workout.",
      tech: "HTML, CSS, Javascript, Express, MongoDB, Mongoose, Morgan, Heroku, MongoDB Atlas",
      deployed: "https://iamalittleforest-18-fitness.herokuapp.com/",
      repo: "https://github.com/iamalittleforest/18-fitness-tracker",
      id: 2
    },
    {
      image: petConnectImg,
      alt: "Screenshot of Pet Connect App",
      title: "Pet Connect",
      description: "Pet Connect is a social media application that is designed to connect pet owners. Users can create posts to plan dog walks with others, get potty training lessons, provide product information, and ask questions from other pet owners.",
      tech: "HTML, CSS, JavaScript, Bootswatch, Handlebars, Node.js, Bcrypt, Dotenv, Express, Session, MySQL, Nodemailer, Sequelize, Heroku, Insomnia",
      deployed: "https://project-2-pet-connect.herokuapp.com/",
      repo: "https://github.com/iamalittleforest/pet-connect",
      id: 3
    },
    {
      image: techBlogImg,
      alt: "Screenshot of Tech Blog App",
      title: "Tech Blog",
      description: "Tech Blog is a CMS-style blog site that can be used to share technical concepts, recent advancements, and new technologies. Users can publish blog posts and comment on other users' posts.",
      tech: 'HTML, CSS, JavaScript, Bootswatch, Handlebars, Node.js, Bcrypt, Dotenv, Express, Session, MySQL, Nodemailer, Sequelize, Heroku, Insomnia',
      deployed: "https://iamalittleforest-14-tech-blog.herokuapp.com/",
      repo: "https://github.com/iamalittleforest/14-tech-blog",
      id: 4
    },
    {
      image: makeItBuyItImg,
      alt: "Screenshot of Make It / Buy It App",
      title: "Make It / Buy It",
      description: "Make it / Buy It is an application that is designed to help users who need help with deciding on their next meal. If a user decides to “Make It,” they will navigate to a page that will pull up recipes based on ingredients that the user wants to use. On the other hand, if the user decides to “Buy It,” they will navigate to a page that will pull up restaurants based on a location the user chooses.",
      tech: "HTML, CSS, JavaScript, jQuery, Materialize, Spoonacular API, Yelp API",
      deployed: "https://iamalittleforest.github.io/project-1-make-it-buy-it/",
      repo: "https://github.com/iamalittleforest/make-it-buy-it",
      id: 5
    },
    {
      image: weatherDashboardImg,
      alt: "Screenshot of Weather Dashboard App",
      title: "Weather Dashboard",
      description: "Weather Dashboard is an application that enables users to view the current weather and future forecast for a city they search for. Users can also select cities from their search history to view the current weather and future forecast for that city.",
      tech: "HTML, CSS, Javascript, Bootstrap, jQuery, jQuery UI, Moment.js, Open Weather Map API",
      deployed: "https://iamalittleforest.github.io/6-weather-dashboard/",
      repo: "https://github.com/iamalittleforest/6-weather-dashboard",
      id: 6
    },
  ]

  return (
    <div className='portfolio'>
      <div className='container'>
        <div className='center row-padding'>
          <h4 className='container-title'>Portfolio</h4>
          <div>
            {projects.map((project) => (
              <Project
                image={project.image}
                alt={project.alt}
                title={project.title}
                description={project.description}
                tech={project.tech}
                deployed={project.deployed}
                repo={project.repo}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;