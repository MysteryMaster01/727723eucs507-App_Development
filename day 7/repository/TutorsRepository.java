package com.example.q1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.q1.model.Tutors;

public interface TutorsRepository extends JpaRepository<Tutors,Integer>{
    List<Tutors> findByTutorName(String tutorName);
    
} 
