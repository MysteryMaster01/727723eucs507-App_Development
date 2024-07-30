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

const Enroll = () => {
  const [courseName, setCourseName] = useState('');
  const [details, setDetails] = useState('');
  const { paymentInfo, updateCourses } = useContext(PaymentContext); // Use context to get payment information
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (courseName && details) {
      if (paymentInfo && Array.isArray(paymentInfo.enrolled)) { // Check if paymentInfo.enrolled is an array
        // Update the enrolled courses in context
        updateCourses('enrolled', [...paymentInfo.enrolled, courseName]);
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
              onChange={(e) => setCourseName(e.target.value)} 
              required 
            />
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
