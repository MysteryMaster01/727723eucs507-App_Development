package com.example.q1.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.q1.model.Login;
import com.example.q1.model.Register;
import com.example.q1.repository.LoginRepository;
import com.example.q1.repository.RegisterRepository;

@Service
public class LoginService {
   @Autowired LoginRepository loginRepository;
   @Autowired RegisterRepository registerRepository;

    public Login saveLogin(Login login)
    {
      return loginRepository.save(login);
      
    }

    public Login getLogin(int id) {
      return loginRepository.findById(id).orElse(null);
  }
  public Login forgotLogin(String username, Login login) {
      Register reg = registerRepository.findByUsername(username);
      if (reg != null) {
          reg.setPassword(login.getPassword());
          registerRepository.save(reg);
          return login;
      }
      return null;
  }


    
}
