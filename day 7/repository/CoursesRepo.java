package com.example.q1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.q1.model.Course;

public interface CoursesRepo extends JpaRepository<Course,Integer> {
    Course findByCourseName(String courseName);
} 
