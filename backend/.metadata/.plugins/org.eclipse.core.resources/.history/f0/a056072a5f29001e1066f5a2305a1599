package com.example.demo.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ToyDto;
import com.example.demo.model.ToyModel;
import com.example.demo.repository.ToyRepository;

@Service
public class ToyServiceImpl implements ToyService{
	@Autowired
	ToyRepository repo;
	
	@Override
	public List<ToyModel> getAllToy(){
		return repo.findAll();
	};

	@Override
	public ToyModel updateToy(ToyDto toy, int id) {
		ToyModel model=repo.findById(id).get();
		model.setAge(toy.getAge());
		model.setBrand(toy.getBrand());
		model.setCategory(toy.getCategory());
		model.setDesc(toy.getDes());
		model.setDprice(toy.getDprice());
		model.setPid(toy.getPid());
		model.setLink(toy.getLink());
		model.setPrice(toy.getPrice());
		model.setSave(toy.getSave());
		
		repo.save(model);
		return model;
	};

	@Override
	public boolean deleteToy(int id) {
		repo.deleteById(id);
		return true;
	}

	@Override
	public boolean addToy(ToyDto toy) {
		ToyModel model=new ToyModel();
		BeanUtils.copyProperties(toy, model);
		repo.save(model);
		return true;
	}

	
}
