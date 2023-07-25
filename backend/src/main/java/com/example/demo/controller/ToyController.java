package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ToyDto;
import com.example.demo.model.ToyModel;
import com.example.demo.service.ToyService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
public class ToyController {
	@Autowired
	public ToyService service;
	
	@PostMapping("/products")
	public boolean addToy(@RequestBody ToyDto toy) {
		return service.addToy(toy);
	}
	
	@GetMapping("/products")
	public List<ToyModel> getAllToy(){
		return service.getAllToy();
	}
	
	@GetMapping("/products/{id}")
	public Optional<ToyModel> getToyById(@PathVariable int id) {
		return service.getToyById(id);
	}
	
	@PutMapping("/products/{id}")
	public ToyModel updateToy(@RequestBody ToyDto toy,@PathVariable int id) {
		return service.updateToy(toy,id);
	}
	
	@DeleteMapping("/products/{id}")
	public boolean deleteToy(@PathVariable int id) {
		return service.deleteToy(id);
	}
	
	
	
	
}
