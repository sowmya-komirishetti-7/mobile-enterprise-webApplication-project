package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistance.WishlistRepository;
import com.example.demo.entity.Wishlist;
@Service
public class WishlistImplementations {
  
private WishlistRepository wishrep;
	
    @Autowired  //DI
	public WishlistImplementations(WishlistRepository wishrep) 
	{
	this.wishrep = wishrep;
    }
	
	//to transfer data dao to controller
	public List<Wishlist>  displayAllData()
	{
		return wishrep.findAll();     //select all the data from entity
	}
	
	public Wishlist selectBasedById(int wId)
	{
		return wishrep.findById(wId).get(); //select data based on id
	}
	
	public void insorup(Wishlist wishlist)
	{
		wishrep.save(wishlist);   //insert or update
	}
	
	public void removebasedById(int wId)
	{
		wishrep.deleteById(wId);  //deletion based on pk column
	}

}
