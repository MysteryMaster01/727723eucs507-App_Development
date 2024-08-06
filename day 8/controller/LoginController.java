package com.example.q1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



import com.example.q1.model.Login;
import com.example.q1.model.Register;
import com.example.q1.service.LoginService;
import com.example.q1.service.RegisterService;

@Controller
@RequestMapping("/login")
public class LoginController {

    @Autowired 
    private LoginService loginService;
    @Autowired RegisterService registerService;

    @PostMapping("/post")
    public ResponseEntity<Login> postLogin(@RequestBody Login login) {
        Login savedLogin = loginService.saveLogin(login);
        return new ResponseEntity<>(savedLogin, HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Login> showlogin(@RequestParam int id)
    {
        Login log=loginService.getLogin(id);
        if(log!=null)
        {
            return new ResponseEntity<>(log,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

     @PatchMapping("/put/{username}")
    public ResponseEntity<Login> putLogin(@PathVariable String username, @RequestBody Login login) {
        Register reg = registerService.findallList(username);
        if (reg != null) {
            Login updatedLogin = loginService.forgotLogin(username, login);
            return new ResponseEntity<>(updatedLogin, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
}
