package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistance.ProductRepository;
import com.example.demo.entity.Product;

@Service  
public class ProductImplementations {


	
private ProductRepository prorep;
	
    @Autowired  //DI
	public ProductImplementations(ProductRepository prorep) 
	{
	this.prorep = prorep;
    }
	
	//to transfer data dao to controller
	public List<Product>  displayAllData()
	{
		return prorep.findAll();     //select all the data from entity
	}
	
	public Product selectBasedById(int pId)
	{
		return prorep.findById(pId).get(); //select data based on id
	}
	
	public void insorup(Product product)
	{
		prorep.save(product);   //insert or update
	}
	
	public void removebasedById(int pId)
	{
		prorep.deleteById(pId);  //deletion based on pk column
	}
}