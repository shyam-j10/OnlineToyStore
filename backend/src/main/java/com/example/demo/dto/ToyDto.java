package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToyDto {
	private int pid;
	private String link;
	private String category;
	private String brand;
	private String age;
	private String des;
	private int price;
	private int dprice;
	private int save;


}
