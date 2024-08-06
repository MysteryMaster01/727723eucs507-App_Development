package com.example.q1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import com.example.q1.model.Payment;
import com.example.q1.service.PaymentService;

@Controller
@RequestMapping("/pay")
public class PayementController {
    @Autowired PaymentService paymentService;

    @PostMapping("/post")

    public ResponseEntity<Payment> posPayment(@RequestBody Payment payment)
    {
        Payment payment2=paymentService.savPayment(payment);
        return new ResponseEntity<>(payment2,HttpStatus.ACCEPTED);     
        
    }

    @GetMapping("/get/{id}")

    public ResponseEntity<Payment> getpayment(int id)
    {
        Payment payment=paymentService.findPayment(id);
        if(payment!=null)
        {
            return new  ResponseEntity<>(payment,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
    
}
