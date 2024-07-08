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

import com.example.demo.entity.Product;
import com.example.demo.service.ProductImplementations;

@RestController   //@Controller+@RequestBody
@RequestMapping("/product")  //classMapping
public class ProductController 
{
private ProductImplementations proimp;

  @Autowired  //DI
  public ProductController(ProductImplementations proimp) 
{
	this.proimp = proimp;
}
	
    @GetMapping("/list")   //localhost:8080/product/list
	public List<Product>   getAllProductData()
	{
		 List<Product> pro=proimp.displayAllData();
		 return pro;
	}
    
    @GetMapping("/list/{productId}")   //localhost:8080/product/list/id
   	public Product  getProductData(@PathVariable("productId") int pId)
   	{
    	Product pro=proimp.selectBasedById(pId);
   		 if(pro==null)
   			 throw new RuntimeException("Product not found with that pId");
   	  return pro;
   	}
    
    @PostMapping("/list")
    public void insertProduct(@RequestBody Product product)
    {
    	product.setpId(0);
    	proimp.insorup(product);
    }
    
    @PutMapping("/list")
    public void updateProduct(@RequestBody Product product)
    {
    	proimp.insorup(product);
    }
    
    @DeleteMapping("/list/{productId}")
    public String deleteById(@PathVariable("productId") int pId)
    {
    	Product pro=proimp.selectBasedById(pId);
  		 if(pro==null)
  			 throw new RuntimeException("Product not found with that pid ...deletion not possible");
  	 proimp.removebasedById(pId);
  	 return "Deleted Product id is "+pId;
    }

}
