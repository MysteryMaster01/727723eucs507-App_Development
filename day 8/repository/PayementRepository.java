package com.example.q1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.q1.model.Payment;

public interface PayementRepository extends JpaRepository<Payment,Integer> {

    
} 
