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

import com.example.demo.entity.Cart;
import com.example.demo.service.CartImplementations;

@RestController   //@Controller+@RequestBody
@RequestMapping("/cart")  //classMapping
public class CartController 
{
private CartImplementations cartimp;

@Autowired  //DI
public CartController(CartImplementations cartimp) 
{
	this.cartimp = cartimp;
}
	
    @GetMapping("/list")   //localhost:8080/cart/list
	public List<Cart>   getAllCartData()
	{
		 List<Cart> cart=cartimp.displayAllData();
		 return cart;
	}
    
    @GetMapping("/list/{cartId}")   //localhost:8080/category/list/id
   	public Cart  getCartData(@PathVariable("cartId") int cId)
   	{
    	Cart cart=cartimp.selectBasedById(cId);
   		 if(cart==null)
   			 throw new RuntimeException("Cart not found with that cId");
   	  return cart;
   	}
    
    @PostMapping("/list")
    public void insertCart(@RequestBody Cart cart)
    {
    	cart.setcId(0);
    	cartimp.insorup(cart);
    }
    
    @PutMapping("/list")
    public void updateCart(@RequestBody Cart cart)
    {
    	cartimp.insorup(cart);
    }
    
    @DeleteMapping("/list/{cartId}")
    public String deleteById(@PathVariable("cartId") int cId)
    {
    	Cart cart=cartimp.selectBasedById(cId);
  		 if(cart==null)
  			 throw new RuntimeException("Cart not found with that cid ...deletion not possible");
  	 cartimp.removebasedById(cId);
  	 return "Deleted Cart id is "+cId;
    }

}