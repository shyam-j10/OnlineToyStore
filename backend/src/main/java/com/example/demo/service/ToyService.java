package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.ToyDto;
import com.example.demo.model.ToyModel;

public interface ToyService {

	public boolean addToy(ToyDto toy);
	
	public List<ToyModel> getAllToy();

	public ToyModel updateToy(ToyDto toy, int id);

	public boolean deleteToy(int id);


}
