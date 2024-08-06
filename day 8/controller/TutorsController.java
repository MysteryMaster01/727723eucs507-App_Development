package com.example.q1.controller;

import java.util.List;

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

import com.example.q1.model.Tutors;
import com.example.q1.service.TutorService;

@Controller
@RequestMapping("/tutors")
public class TutorsController {
    @Autowired TutorService tutorService;

    @PostMapping("/post")
    public ResponseEntity<Tutors> createTutor(@RequestBody Tutors tutors) {
        Tutors savedTutor = tutorService.saveTutors(tutors);
        return new ResponseEntity<>(savedTutor, HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Tutors> getTutorid(@RequestParam int id)
    {
        Tutors tutors=tutorService.findtutorid(id);
        if(tutors!=null)
        {
            return new ResponseEntity<>(tutors,HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/get/{name}")
    public ResponseEntity<List<Tutors>> getTutorNmae(@RequestParam String name)
    {
        List<Tutors> tutors=tutorService.findtutorname(name);
        if(tutors!=null)
        {
            return new ResponseEntity<>(tutors,HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<Tutors> putTutors(@RequestBody Tutors tutors,@PathVariable int id)
    {
        Tutors tutors1=tutorService.findtutorid(id);
        if(tutors1!=null)
        {
            Tutors tutors2=tutorService.updateTutors(tutors, id);
            return new ResponseEntity<>(tutors2,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Tutors> deleteTutors(@PathVariable int id)
    {
        Tutors tutors1=tutorService.findtutorid(id);
        if(tutors1!=null)
        {
            tutorService.deletetutorid(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
}
