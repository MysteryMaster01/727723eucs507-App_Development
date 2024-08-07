import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/Enroll.css'; // Import your CSS file
import { PaymentContext } from './PaymentContext'; // Adjust the path as needed
import ac10 from '../img/Ac/ac10.jpg';
import imag from '../img/Adv/adv1.png';
import { courses } from './Courses'; // Adjust the path to where your courses array is located

const Enroll = () => {
  const [courseName, setCourseName] = useState('');
  const [details, setDetails] = useState('');
  const { paymentInfo, updateCourses, courses: enrolledCourses } = useContext(PaymentContext); // Use context to get payment information
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (courseName && details) {
      const isCourseAvailable = courses.some(course => course.title.toLowerCase() === courseName.toLowerCase());
      if (!isCourseAvailable) {
        toast.error('Course not available.');
        return;
      }
      if (paymentInfo && paymentInfo.amount !== null) {
        // Update the enrolled courses in context
        updateCourses('enrolled', [...enrolledCourses.enrolled, courseName]);
        toast.success('You are enrolled successfully.');
        // Perform any other actions needed upon successful enrollment
      } else {
        toast.error('Please purchase our plans first.');
        navigate('/plan');
      }
    } else {
      toast.error('Please fill out all fields.');
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(courseName.toLowerCase())
  );

  return (
    <div className='fobody'>
      <div className="enrollment-form-container">
        <div className="form-header">
          <h2>Enroll in Course</h2>
        </div>
        <div className="form-body">
          <Slider {...sliderSettings} className="image-slider">
            <div><img src={ac10} alt="Slide 1" /></div>
            <div><img src={imag} alt="Slide 2" /></div>
            {/* Add more slides as needed */}
          </Slider>
          <form className="enrollment-form">
            <label>
              Course Name:
              <input 
                type="text" 
                value={courseName} 
                onChange={handleCourseNameChange} 
                list="course-options"
                required 
              />
              <datalist id="course-options">
                {filteredCourses.map(course => (
                  <option key={course.id} value={course.title} />
                ))}
              </datalist>
            </label>
            <label>
              Details:
              <textarea 
                value={details} 
                onChange={(e) => setDetails(e.target.value)} 
                required 
              />
            </label>
          </form>
          <button type="button" onClick={handleEnroll}>Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
