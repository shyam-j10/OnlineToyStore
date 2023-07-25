package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.ToyModel;

public interface ToyRepository extends JpaRepository<ToyModel, Integer> {
	
	@Query("Select t from ToyModel t where t.brand=?1")
	public List<ToyModel> getToyByBrand(String brand);

}
