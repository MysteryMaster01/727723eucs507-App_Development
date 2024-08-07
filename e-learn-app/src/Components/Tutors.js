import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Bubble } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import p1 from '../img/alu/p1.png';
import p2 from '../img/alu/p2.png';
import p3 from '../img/alu/p3.png';
import p4 from '../img/alu/p4.png';
import p5 from '../img/alu/p5.png';
import p6 from '../img/alu/p6.png';
import p7 from '../img/alu/p7.png';
import p8 from '../img/alu/p8.png';
import p9 from '../img/alu/p9.png';
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
import cou16 from '../img/cou/cou-1.jpg';
import cou17 from '../img/cou/cou-17.jpg';
import cou18 from '../img/cou/cou-3.jpg';
import cou19 from '../img/cou/cou-4.png';
import cou20 from '../img/cou/cou-5.png';
import cou21 from '../img/cou/cou-6.png';
import cou22 from '../img/cou/cou-8.jpg';
import cou23 from '../img/cou/cou-9.jpg';
import cou24 from '../img/cou/cou-10.png';
import cou25 from '../img/cou/cou-11.jpg';
import cou26 from '../img/cou/cou-12.jpg';
import cou27 from '../img/cou/cou-13.jpg';

const tutorImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9]; // Assuming you have 9 images
const courseImages = [cou1, cou2, cou3, cou4, cou5, cou6, cou7, cou8, cou9, cou10, cou11, cou12, cou13, cou14, cou15, cou16, cou17, cou18, cou19, cou20, cou21, cou22, cou23, cou24, cou25, cou26, cou27];

const tutorsData = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  image: tutorImages[i],
  name: `Tutor ${i + 1}`,
  degree: `Degree ${i + 1}`,
  description: `Description for Tutor ${i + 1}`,
  schedule: [
    { sessionName: `Session ${i + 1}-1`, previousLink: `#`, joinLink: `#` },
    { sessionName: `Session ${i + 1}-2`, previousLink: `#`, joinLink: `#` },
  ],
  previousCourses: courseImages.slice(i * 3, (i + 1) * 3).map((img, j) => ({
    courseName: `Course ${i + 1}-${j + 1}`,
    courseLink: `#`,
    courseImage: img,
  })),
  successRate: Math.random() * 100,
  failureRate: Math.random() * 100,
}));

const Header = () => (
  <header style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <h1>Tutor Schedules</h1>
  </header>
);

const Footer = () => (
  <footer style={{ padding: '10px', textAlign: 'center', background: '#f5f5f5' }}>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </footer>
);

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 80px)', // Adjust height based on header and footer
});

const MainContent = styled('div')({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

const LeftPanel = styled('div')({
  width: '250px',
  overflowY: 'auto',
  paddingRight: '20px',
  borderRight: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const CenterPanel = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'row', // Make this row to place bubble chart beside details
  paddingLeft: '20px',
  overflowY: 'auto',
  alignItems: 'flex-start',
});

const TutorImage = styled('img')({
  width: '100%',
  cursor: 'pointer',
  marginBottom: '5px',
});

const TutorDetail = styled('div')({
  flex: 1,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
});

const TutorImageLarge = styled('img')({
  maxWidth: '200px', // Adjust the max width as needed
  height: '200px',
  marginRight: '20px',
  borderRadius: '10px', // Add border radius for a nicer look
});

const CoursesGridContainer = styled('div')({
  padding: '10px 20px',
});

const CoursesGridTitle = styled('h2')({
  textAlign: 'center',
  margin: '20px 0',
});

const CoursesGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  width: '100%',
});

const CourseItem = styled('div')({
  textAlign: 'center',
});

const CourseImage = styled('img')({
  width: '100%',
  height: '100px', // Set height to 100px
  objectFit: 'cover', // Ensure image fits within the box
  borderRadius: '8px',
});

const BubbleChartContainer = styled('div')({
  width: '600px', // Increased width
  height: '400px', // Increased height
  marginTop: '20px',
  marginLeft: '20px', // Ensure there's space between the details and the chart
});

const Tutors = () => {
  const [selectedTutor, setSelectedTutor] = useState(tutorsData[0]); // Ensure this has previousCourses

  const handleTutorClick = (tutor) => {
    setSelectedTutor(tutor);
  };

  const bubbleChartData = {
    datasets: [
      {
        label: 'Success Rate',
        data: [
          {
            x: selectedTutor.successRate,
            y: selectedTutor.failureRate,
            r: 20,
          },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <>
      <Header />
      <LayoutContainer>
        <MainContent>
          <LeftPanel>
            {tutorsData.map((tutor) => (
              <div key={tutor.id} style={{ display: 'flex', alignItems: 'center' }}>
                <TutorImage
                  src={tutor.image}
                  alt={tutor.name}
                  onClick={() => handleTutorClick(tutor)}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <div>{tutor.name}</div>
                  <div>{tutor.degree}</div>
                </div>
              </div>
            ))}
          </LeftPanel>
          <CenterPanel>
            <TutorDetail>
              <TutorImageLarge src={selectedTutor.image} alt={selectedTutor.name} />
              <h2>{selectedTutor.name}</h2>
              <h3>{selectedTutor.degree}</h3>
              <p>{selectedTutor.description}</p>
            </TutorDetail>
            <BubbleChartContainer>
              <Bubble data={bubbleChartData} />
            </BubbleChartContainer>
          </CenterPanel>
        </MainContent>
        <CoursesGridContainer>
          <CoursesGridTitle>Courses</CoursesGridTitle>
          <CoursesGrid>
            {selectedTutor.previousCourses && selectedTutor.previousCourses.map((course, index) => (
              <CourseItem key={index}>
                <CourseImage src={course.courseImage} alt={course.courseName} />
              </CourseItem>
            ))}
          </CoursesGrid>
        </CoursesGridContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Tutors;
