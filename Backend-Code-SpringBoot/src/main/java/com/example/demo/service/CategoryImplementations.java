package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistance.CategoryRepository;
import com.example.demo.entity.Category;

@Service  
public class CategoryImplementations {


	
private CategoryRepository catrep;
	
    @Autowired  //DI
	public CategoryImplementations(CategoryRepository catrep) 
	{
	this.catrep = catrep;
    }
	
	//to transfer data dao to controller
	public List<Category>  displayAllData()
	{
		return catrep.findAll();     //select all the data from entity
	}
	
	public Category selectBasedById(int pcId)
	{
		return catrep.findById(pcId).get(); //select data based on id
	}
	
	public void insorup(Category category)
	{
		catrep.save(category);   //insert or update
	}
	
	public void removebasedById(int pcId)
	{
		catrep.deleteById(pcId);  //deletion based on pk column
	}
}
