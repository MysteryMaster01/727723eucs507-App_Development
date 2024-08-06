package com.example.q1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.q1.model.Payment;
import com.example.q1.repository.PayementRepository;

@Service
public class PaymentService {
    @Autowired PayementRepository payementRepository;
    
    public Payment savPayment(Payment payment)
    {
        return payementRepository.save(payment);
    }
    
    public Payment findPayment(int id)
    {
        return payementRepository.findById(id).orElse(null);
    }
}
