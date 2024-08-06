package com.example.q1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.q1.model.Tutors;
import com.example.q1.repository.TutorsRepository;

@Service
public class TutorService {
    @Autowired TutorsRepository tutorsRepository;

    public Tutors saveTutors(Tutors tutors)
    {
        return tutorsRepository.save(tutors);
    }

    public Tutors  findtutorid(int id)
    {
        return tutorsRepository.findById(id).orElse(null);
    }

    public List<Tutors> findtutorname(String tutorName)
    {
        return tutorsRepository.findByTutorName(tutorName);
    }
    public Tutors updateTutors(Tutors tutors,int id)
    {
        Tutors tu=tutorsRepository.findById(id).orElse(null);
        if(tu!=null)
        {
            tu.setTutorName(tutors.getTutorName());
            tu.setQualification(tutors.getQualification());
            tu.setCoursesName(tutors.getCoursesName());
            tu.setDescription(tutors.getDescription());
            return tutorsRepository.save(tu);
        }
        return null;
    }

    public void  deletetutorid(int id)
    {
        Tutors tutors=tutorsRepository.findById(id).orElse(null);
        if(tutors!=null)
        {
            tutorsRepository.deleteById(id);
        }
    }
    
}
