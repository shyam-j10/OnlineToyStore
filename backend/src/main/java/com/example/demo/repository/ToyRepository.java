package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ToyModel;

public interface ToyRepository extends JpaRepository<ToyModel, Integer> {

}
