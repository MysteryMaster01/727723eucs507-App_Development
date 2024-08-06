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

import com.example.q1.model.Course;
import com.example.q1.service.CourseService;

@Controller
@RequestMapping("/course")
public class CoursesController {
    @Autowired CourseService courseService;

    @PostMapping("/post")

    public ResponseEntity<Course> postCourse(@RequestBody Course course)
    {
       Course co= courseService.saveCourse(course);
        return new ResponseEntity<>(co,HttpStatus.ACCEPTED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Course> getCourseId(@PathVariable int id)
    {

        Course course2=courseService.findCourseid(id);
        if(course2!=null)
        {

            return new ResponseEntity<>(course2,HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/get/{name}")

    public ResponseEntity<Course> getCourseName(@PathVariable String name)
    {
        Course course=courseService.findCoursename(name);
        if(course!=null)
        {
            return new  ResponseEntity<>(course,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);                         

    }

    @PutMapping("/put/{id}")

    public ResponseEntity<Course> updateidEntity(@RequestBody Course course,@PathVariable int id)
    {
        Course course2=courseService.findCourseid(id);
        if(course2!=null)
        {
           Course co= courseService.updatCourse(id, course2);
           return new ResponseEntity<>(co,HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @PutMapping("/put/{name}")

    public ResponseEntity<Course> updatecoursenamEntity(@RequestBody Course course,@PathVariable String  name)
    {
        Course course2=courseService.findCoursename(name);
        if(course2!=null)
        {
           Course co= courseService.updatCoursebyname(name, course2);
           return new ResponseEntity<>(co,HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @DeleteMapping("delete/{id}")

    public ResponseEntity<Course> delEntity(@PathVariable int id)
    {
        Course co=courseService.findCourseid(id);
        if(co!=null)
        {
            courseService.deleteCourseid(id);
            return new ResponseEntity<>(HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
