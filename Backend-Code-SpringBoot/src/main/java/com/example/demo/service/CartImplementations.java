package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistance.CartRepository;
import com.example.demo.entity.Cart;

@Service  
public class CartImplementations {
	
	private CartRepository cartrep;
	
    @Autowired  //DI
	public CartImplementations(CartRepository cartrep) 
	{
	this.cartrep = cartrep;
    }
	
	//to transfer data dao to controller
	public List<Cart>  displayAllData()
	{
		return cartrep.findAll();     //select all the data from entity
	}
	
	public Cart selectBasedById(int cId)
	{
		return cartrep.findById(cId).get(); //select data based on id
	}
	
	public void insorup(Cart cart)
	{
		cartrep.save(cart);   //insert or update
	}
	
	public void removebasedById(int cId)
	{
		cartrep.deleteById(cId);  //deletion based on pk column
	}
}