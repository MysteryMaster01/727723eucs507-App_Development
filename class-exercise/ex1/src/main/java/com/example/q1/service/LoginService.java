package com.example.q1.service;

import com.example.q1.model.Login;
import com.example.q1.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Login saveLogin(Login login) {
        login.setPassword(passwordEncoder.encode(login.getPassword()));
        return loginRepository.save(login);
    }

    public Login getLogin(int id) {
        return loginRepository.findById(id).orElse(null);
    }

    public Login forgotLogin(String username, Login login) {
        Login existingLogin = loginRepository.findByUsername(username);
        if (existingLogin != null) {
            existingLogin.setPassword(passwordEncoder.encode(login.getPassword()));
            loginRepository.save(existingLogin);
            return existingLogin;
        }
        return null;
    }
}
