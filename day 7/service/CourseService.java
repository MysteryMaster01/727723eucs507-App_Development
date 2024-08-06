package com.example.q1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.q1.model.Course;
import com.example.q1.repository.CoursesRepo;

@Service
public class CourseService {
    @Autowired CoursesRepo coursesRepo;

    public Course saveCourse(Course course)
    {
        return coursesRepo.save(course);
    }

    public Course findCourseid(int id)
    {
        return coursesRepo.findById(id).orElse(null);
    }
    public Course findCoursename(String courseName)
    {
        return coursesRepo.findByCourseName(courseName);
    }
    public Course updatCourse(int id,Course course)
    {
        Course course2=coursesRepo.findById(id).orElse(null);
        if(course2!=null)
        {
            course2.setCourseName(course.getCourseName());
            course2.setCourseDescription(course.getCourseDescription());
            return coursesRepo.save(course2);
        }
        return null;
    }
    public Course updatCoursebyname(String courseName,Course course)
    {
        Course course2=coursesRepo.findByCourseName(courseName);
        if(course2!=null)
        {
            course2.setCourseName(course.getCourseName());
            course2.setCourseDescription(course.getCourseDescription());
            return coursesRepo.save(course2);
        }
        return null;
    }
    public void deleteCourseid(int id)
    {
       Course co= coursesRepo.findById(id).orElse(null);
        if(co!=null)
        {
            coursesRepo.deleteById(id);

        }
    }
}
