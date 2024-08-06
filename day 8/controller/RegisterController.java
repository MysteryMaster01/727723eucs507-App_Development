package com.example.q1.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.q1.model.Register;
import com.example.q1.service.RegisterService;

@Controller
@RequestMapping("/reg")
public class RegisterController {
    @Autowired RegisterService registerService;

    @PostMapping("/post")

    public ResponseEntity<Register> postEntity(@RequestBody Register register)
    {
        Register register2=registerService.savRegister(register);
        return new ResponseEntity<>(register2, HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/{id}")

    public ResponseEntity<Register>  getidEntity(@PathVariable int id)
    {
        Register register2=registerService.findRegister(id);
        if(register2!=null)
        {
            return new ResponseEntity<>(register2,HttpStatus.FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/get/{username}")
    public ResponseEntity<Register> getUsernameEntity(@PathVariable String username) {
        Register register = registerService.findallList(username);
        if (register != null) {
            return new ResponseEntity<>(register, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")

    public ResponseEntity<Register> deleteuser(@RequestParam int id)
    {
        Register register2=registerService.findRegister(id);

        if(register2!=null)
        {
            registerService.delRegister(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PutMapping("/put/{id}")

    public ResponseEntity<Register> updaEntity(@RequestParam int id,Register register)
    {
        Register register2=registerService.findRegister(id);

        if(register2!=null)
        {
            Register reg=registerService.updateRegister(id, register);
            return new ResponseEntity<>(reg,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
