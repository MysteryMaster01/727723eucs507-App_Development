import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Button, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions
} from '@mui/material';
import { Menu, BarChart, People, School, Book, Add, Delete } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const studentData = {
  labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6', 'Student 7', 'Student 8', 'Student 9', 'Student 10'],
  datasets: [
    {
      label: 'Progress (%)',
      data: [80, 70, 85, 60, 90, 75, 65, 88, 92, 77],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const tutorData = {
  labels: ['Tutor 1', 'Tutor 2', 'Tutor 3', 'Tutor 4', 'Tutor 5', 'Tutor 6', 'Tutor 7', 'Tutor 8', 'Tutor 9', 'Tutor 10'],
  datasets: [
    {
      label: 'Success Rate (%)',
      data: [90, 75, 80, 85, 70, 88, 78, 92, 81, 76],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const Admin = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('');
  const [openAddCourse, setOpenAddCourse] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseArticle, setCourseArticle] = useState('');
  const [courseImage, setCourseImage] = useState(null);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setDrawerOpen(false);
  };

  const handleOpenAddCourse = () => {
    setOpenAddCourse(true);
  };

  const handleCloseAddCourse = () => {
    setOpenAddCourse(false);
  };

  const handleAddCourse = () => {
    // Add your course adding logic here
    console.log({ courseName, courseArticle, courseImage });
    handleCloseAddCourse();
  };

  const handleRemoveCourse = () => {
    // Add your course removing logic here
  };

  const handleImageUpload = (event) => {
    setCourseImage(event.target.files[0]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
            <Menu />
          </IconButton>
          <Typography variant="h6">Admin Page</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={() => handleTabChange('studentProgress')}>
              <ListItemIcon><BarChart /></ListItemIcon>
              <ListItemText primary="Student Progress" />
            </ListItem>
            <ListItem button onClick={() => handleTabChange('tutorProgress')}>
              <ListItemIcon><School /></ListItemIcon>
              <ListItemText primary="Tutor Progress" />
            </ListItem>
            <ListItem button onClick={() => handleTabChange('manageCourses')}>
              <ListItemIcon><Book /></ListItemIcon>
              <ListItemText primary="Manage Courses" />
            </ListItem>
            <ListItem button onClick={() => handleTabChange('manageStudyMaterials')}>
              <ListItemIcon><Book /></ListItemIcon>
              <ListItemText primary="Manage Study Materials" />
            </ListItem>
            <ListItem button onClick={() => handleTabChange('manageTutors')}>
              <ListItemIcon><People /></ListItemIcon>
              <ListItemText primary="Add and Remove Tutor" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {!selectedTab && (
          <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Avatar sx={{ width: 100, height: 100 }} src="/admin-avatar.jpg" alt="Admin" />
            <Typography variant="h4" sx={{ mt: 2 }}>Admin Name</Typography>
            <Typography variant="h6">Company Name</Typography>
            <Typography variant="body1">Degree: Master's in Education</Typography>
            <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.
            </Typography>
          </Container>
        )}
        {selectedTab === 'studentProgress' && (
          <Container>
            <Typography variant="h5">Student Progress</Typography>
            <Bar data={studentData} />
            {/* Add student details section here */}
          </Container>
        )}
        {selectedTab === 'tutorProgress' && (
          <Container>
            <Typography variant="h5">Tutor Progress</Typography>
            <Bar data={tutorData} />
            {/* Add tutor details section here */}
          </Container>
        )}
        {selectedTab === 'manageCourses' && (
          <Container>
            <Typography variant="h5">Manage Courses</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <IconButton color="primary" onClick={handleOpenAddCourse}>
                <Add />
              </IconButton>
              <Typography>Add Course</Typography>
            </Box>
            <Dialog open={openAddCourse} onClose={handleCloseAddCourse}>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Course Name"
                  fullWidth
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Course Article"
                  fullWidth
                  multiline
                  rows={4}
                  value={courseArticle}
                  onChange={(e) => setCourseArticle(e.target.value)}
                />
                <Button variant="contained" component="label">
                  Upload Image
                  <input type="file" hidden onChange={handleImageUpload} />
                </Button>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAddCourse}>Cancel</Button>
                <Button onClick={handleAddCourse}>Add</Button>
              </DialogActions>
            </Dialog>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <IconButton color="secondary" onClick={handleRemoveCourse}>
                <Delete />
              </IconButton>
              <Typography>Remove Course</Typography>
            </Box>
            {/* Add remove course search bar here */}
          </Container>
        )}
        {/* Add other sections here */}
      </Box>
    </Box>
  );
};

export default Admin;
