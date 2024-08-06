package com.example.q1.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.q1.model.Register;
import com.example.q1.repository.RegisterRepository;

@Service
public class RegisterService {
    @Autowired RegisterRepository registerRepository;

    public Register savRegister(Register register)
    {
        return registerRepository.save(register);
    }
    public Register findRegister(int id)
    {
        return registerRepository.findById(id).orElse(null);
    }
    public Register findallList(String username)
    {
        return registerRepository.findByUsername(username);
    }

    public void delRegister(int id)
    {
        Register prevRegister =registerRepository.findById(id).orElse(null);
        if(prevRegister!=null)
        {
           registerRepository.deleteById(id);
        }


    }
    public Register updateRegister(int id,Register register)
    {
        Register prevRegister =registerRepository.findById(id).orElse(null);
        if(prevRegister!=null)
        {
            prevRegister.setUsername(register.getUsername());
            prevRegister.setPhonenumber(register.getPhonenumber());
            return registerRepository.save(prevRegister);
        }
        return null;
    }

    // public void forgotpasssword(int id,Register register)
    // {
    //     Register prevRegister =registerRepository.findById(id).orElse(null);
    //     if(prevRegister!=null)
    //     {
    //         prevRegister.setPassword();
    //         return registerRepository.save(prevRegister);
    //     }
    //     return null;

    // }
}
