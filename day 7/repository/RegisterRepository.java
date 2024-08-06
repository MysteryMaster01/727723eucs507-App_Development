package com.example.q1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.q1.model.Register;


public interface RegisterRepository extends JpaRepository<Register, Integer> {
    Register findByUsername(String username);
}
