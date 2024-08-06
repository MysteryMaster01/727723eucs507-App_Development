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

import com.example.q1.model.Materials;
import com.example.q1.service.MaterialService;

@Controller
@RequestMapping("/materials")
public class MaterialsController {
    @Autowired MaterialService materialService;

    @PostMapping("/post")

    public ResponseEntity<Materials> postMaterials(@RequestBody Materials materials)
    {
        Materials materials2=materialService.savMaterials(materials);
        return new ResponseEntity<>(materials2,HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/get/{id}")

    public ResponseEntity<Materials> getMaterialsid(@PathVariable int id)
    {
        Materials mat=materialService.findMaterials(id);
        if(mat!=null)
        {
            return new ResponseEntity<>(mat,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get/{name}")

    public ResponseEntity<List<Materials>> getMaterialsname(@RequestParam String Materialsname)
    {
        List<Materials> materials=materialService.findMaterialsname(Materialsname);
        if(materials!=null)
        {
            return new ResponseEntity<>(materials,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/put/{id}")

    public ResponseEntity<Materials> putMaterials(@RequestBody Materials materials,@RequestParam int id)
    {
        Materials mat=materialService.findMaterials(id);
        if(mat!=null)
        {
            Materials materials2=materialService.updateMaterials(materials, id);
            return new ResponseEntity<>(materials2,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @DeleteMapping("/delete/{id}")

    public ResponseEntity<Materials> deleteMaterials(@RequestParam int id)
    {
        Materials mat=materialService.findMaterials(id);
        if(mat!=null)
        {
             materialService.deletemateriall(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    
}
