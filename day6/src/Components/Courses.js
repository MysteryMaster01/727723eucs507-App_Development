import React, { useState } from 'react';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/Courses.css';
import cou1 from '../img/cou/cou-1.jpg';
import cou2 from '../img/cou/cou-17.jpg';
import cou3 from '../img/cou/cou-3.jpg';
import cou4 from '../img/cou/cou-4.png';
import cou5 from '../img/cou/cou-5.png';
import cou6 from '../img/cou/cou-6.png';
import cou7 from '../img/cou/cou-7.png';
import cou8 from '../img/cou/cou-8.jpg';
import cou9 from '../img/cou/cou-9.jpg';
import cou10 from '../img/cou/cou-10.png';
import cou11 from '../img/cou/cou-11.jpg';
import cou12 from '../img/cou/cou-12.jpg';
import cou13 from '../img/cou/cou-13.jpg';
import cou14 from '../img/cou/cou-14.jpg';
import cou15 from '../img/cou/cou-15.jpg';
import { Link } from 'react-router-dom';
const courses = [
  { id: 0, image: cou1, title: 'Course 1', article: 'This is a detailed article for Course 1.' },
  { id: 1, image: cou2, title: 'Course 2', article: 'This is a detailed article for Course 2.' },
  { id: 2, image: cou3, title: 'Course 3', article: 'This is a detailed article for Course 3.' },
  { id: 3, image: cou4, title: 'Course 4', article: 'This is a detailed article for Course 4.' },
  { id: 4, image: cou5, title: 'Course 5', article: 'This is a detailed article for Course 5.' },
  { id: 5, image: cou6, title: 'Course 6', article: 'This is a detailed article for Course 6.' },
  { id: 6, image: cou7, title: 'Course 7', article: 'This is a detailed article for Course 7.' },
  { id: 7, image: cou8, title: 'Course 8', article: 'This is a detailed article for Course 8.' },
  { id: 8, image: cou9, title: 'Course 9', article: 'This is a detailed article for Course 9.' },
  { id: 9, image: cou10, title: 'Course 10', article: 'This is a detailed article for Course 10.' },
  { id: 10, image: cou11, title: 'Course 11', article: 'This is a detailed article for Course 11.' },
  { id: 11, image: cou12, title: 'Course 12', article: 'This is a detailed article for Course 12.' },
  { id: 12, image: cou13, title: 'Course 13', article: 'This is a detailed article for Course 13.' },
  { id: 13, image: cou14, title: 'Course 14', article: 'This is a detailed article for Course 14.' },
  { id: 14, image: cou15, title: 'Course 15', article: 'This is a detailed article for Course 15.' }
];

const Header = () => (
  <header>
    <h1>Courses</h1>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Courses</p>
  </footer>
);

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <div className="LayoutContainer">
        <div className="ProjectorContainer">
          <img className="ProjectorImage" src={selectedCourse.image} alt={selectedCourse.title} />
          <article className="ProjectorArticle">{selectedCourse.article}</article>
        </div>
        <div className="SliderContainer">
          <Slider {...sliderSettings}>
            {courses.map((course) => (
              <div key={course.id} onClick={() => handleCourseClick(course)} className="SliderItem">
                <img className="CourseImage" src={course.image} alt={course.title} />
                <div className="SliderTitle">{course.title}</div>
              </div>
            ))}
          </Slider>
          {/* <Button className="JoinButton" variant="contained" color="primary">Join Now</Button> */}
        </div>
        <Link to="/enroll" className='join'>Join Now</Link>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
