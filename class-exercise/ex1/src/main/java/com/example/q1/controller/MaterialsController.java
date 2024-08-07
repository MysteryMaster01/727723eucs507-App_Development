package com.example.q1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.q1.model.Materials;
import com.example.q1.service.MaterialService;

@Controller
@RequestMapping("/materials")
public class MaterialsController {
    @Autowired 
    MaterialService materialService;

    @PostMapping("/post")
    public ResponseEntity<Materials> postMaterials(@RequestBody Materials materials) {
        Materials materials2 = materialService.savMaterials(materials);
        return new ResponseEntity<>(materials2, HttpStatus.ACCEPTED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Materials> getMaterialsById(@PathVariable int id) {
        Materials mat = materialService.findMaterials(id);
        if (mat != null) {
            return new ResponseEntity<>(mat, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Materials>> getMaterialsByName(@RequestParam String name) {
        List<Materials> materials = materialService.findMaterialsname(name);
        if (materials != null) {
            return new ResponseEntity<>(materials, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<Materials> putMaterials(@RequestBody Materials materials, @PathVariable int id) {
        Materials mat = materialService.findMaterials(id);
        if (mat != null) {
            Materials materials2 = materialService.updateMaterials(materials, id);
            return new ResponseEntity<>(materials2, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMaterials(@PathVariable int id) {
        Materials mat = materialService.findMaterials(id);
        if (mat != null) {
            materialService.deletemateriall(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
