package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Wishlist;

import com.example.demo.service.WishlistImplementations;
@RestController   //@Controller+@RequestBody
@RequestMapping("/wishlist")
public class WishlistController {
  
	private WishlistImplementations wishimp;

	@Autowired  //DI
	public WishlistController(WishlistImplementations wishimp) 
	{
		this.wishimp = wishimp;
	}
		
	    @GetMapping("/list")   //localhost:8080/cart/list
		public List<Wishlist>   getAllWishlistData()
		{
			 List<Wishlist> wishlist=wishimp.displayAllData();
			 return wishlist;
		}
	    
	    @GetMapping("/list/{wishId}")   //localhost:8080/category/list/id
	   	public Wishlist  getWishlistData(@PathVariable("wishId") int wId)
	   	{
	    	Wishlist wishlist=wishimp.selectBasedById(wId);
	   		 if(wishlist==null)
	   			 throw new RuntimeException("Cart not found with that wId");
	   	  return wishlist;
	   	}
	    
	    @PostMapping("/list")
	    public void insertWishlist(@RequestBody Wishlist wishlist)
	    {
	    	wishlist.setwId(0);
	    	wishimp.insorup(wishlist);
	    }
	    
	    @PutMapping("/list")
	    public void updateWishlist(@RequestBody Wishlist wishlist)
	    {
	    	wishimp.insorup(wishlist);
	    }
	    
	    @DeleteMapping("/list/{wishId}")
	    public String deleteById(@PathVariable("wishId") int wId)
	    {
	    	Wishlist wishlist=wishimp.selectBasedById(wId);
	  		 if(wishlist==null)
	  			 throw new RuntimeException("Wishlist not found with that wid ...deletion not possible");
	  	 wishimp.removebasedById(wId);
	  	 return "Deleted Wishlist id is "+wId;
	    }

}
