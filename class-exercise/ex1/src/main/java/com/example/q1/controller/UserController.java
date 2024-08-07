package com.example.q1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.q1.model.Login;
import com.example.q1.service.LoginService;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired 
    LoginService loginService;

    @PostMapping("/register")
    public ResponseEntity<Login> registerUser(@RequestBody Login login) {
        Login savedLogin = loginService.saveLogin(login);
        return new ResponseEntity<>(savedLogin, HttpStatus.ACCEPTED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Login> getUserById(@PathVariable int id) {
        Login login = loginService.getLogin(id);
        if (login != null) {
            return new ResponseEntity<>(login, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/forgot/{username}")
    public ResponseEntity<Login> forgotPassword(@PathVariable String username, @RequestBody Login login) {
        Login updatedLogin = loginService.forgotLogin(username, login);
        if (updatedLogin != null) {
            return new ResponseEntity<>(updatedLogin, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
