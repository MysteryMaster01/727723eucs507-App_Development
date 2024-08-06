package com.example.q1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.q1.model.Materials;

public interface MaterialRepository extends JpaRepository<Materials,Integer> {
    List<Materials> findByMaterialsName(String materialsname);

    
} 