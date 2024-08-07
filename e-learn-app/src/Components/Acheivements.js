import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../Assets/Placement.css'; // Make sure to include your styles
import ac1 from '../img/Ac/ac1.jpg';
import ac2 from '../img/Ac/ac2.jpg';
import ac3 from '../img/Ac/ac3.jpg';
import ac4 from '../img/Ac/ac4.jpg';
import ac5 from '../img/Ac/ac5.jpg';
import ac6 from '../img/Ac/ac6.jpg';
import ac7 from '../img/Ac/ac7.jpg';
import ac8 from '../img/Ac/ac8.jpg';
import ac9 from '../img/Ac/ac9.jpg';
import ac10 from '../img/Ac/ac10.jpg';

const images = [ac1, ac2, ac3, ac4, ac5, ac6, ac7, ac8, ac9, ac10];

const descriptions = [
  'Description for Image 1: This image shows a beautiful landscape.',
  'Description for Image 2: A serene view of the ocean at sunset.',
  'Description for Image 3: A bustling cityscape at night.',
  'Description for Image 4: A close-up of a blooming flower.',
  'Description for Image 5: A scenic mountain range during sunrise.',
  'Description for Image 6: A tranquil forest with morning mist.',
  'Description for Image 7: A historic landmark in the city.',
  'Description for Image 8: A vibrant marketplace filled with activity.',
  'Description for Image 9: A calm lake surrounded by trees.',
  'Description for Image 10: A starry night sky over a desert landscape.',
];

const articles = [
  'Article for Image 1: This is a detailed description of the first image. It provides insights and additional information about the content.',
  'Article for Image 2: This article gives an overview of the second image, including context and relevant details.',
  'Article for Image 3: The third article describes the third image and provides further background and context.',
  'Article for Image 4: Information related to the fourth image is covered in this article, offering valuable insights.',
  'Article for Image 5: This article elaborates on the fifth image, giving more detailed information and context.',
  'Article for Image 6: The sixth article provides a thorough description of the sixth image and its significance.',
  'Article for Image 7: Description and details related to the seventh image are included in this article.',
  'Article for Image 8: This article offers information and context for the eighth image, explaining its relevance.',
  'Article for Image 9: A detailed description of the ninth image is provided in this article.',
  'Article for Image 10: The final article offers insights and information about the tenth image.',
];

const Acheivements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const articleRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const startSlider = () => {
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startSlider();
    } else {
      stopSlider();
    }

    return () => stopSlider();
  }, [isPaused]);

  useEffect(() => {
    gsap.fromTo(
      `.image-container img`,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      articleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [currentIndex]);

  return (
    <div className="page-container">
      <header className="header">
        <h1>Acheivements</h1>
      </header>
      <div className="content">
        <div className="image-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <div className="description">
            {descriptions[currentIndex]}
          </div>
        </div>
        <div className="article-container" ref={articleRef}>
          {articles[currentIndex]}
        </div>
        <button className='but' onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>                                                
    </div>
  );
};

export default Acheivements;
