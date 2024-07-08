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

import com.example.demo.entity.Category;
import com.example.demo.service.CategoryImplementations;

@RestController   //@Controller+@RequestBody
@RequestMapping("/category")  //classMapping
public class CategoryController 
{
private CategoryImplementations catimp;

@Autowired  //DI
public CategoryController(CategoryImplementations catimp) 
{
	this.catimp = catimp;
}
	
    @GetMapping("/list")   //localhost:8080/category/list
	public List<Category>   getAllCategoryData()
	{
		 List<Category> cat=catimp.displayAllData();
		 return cat;
	}
    
    @GetMapping("/list/{categoryId}")   //localhost:8080/category/list/id
   	public Category  getCategoryData(@PathVariable("categoryId") int pcId)
   	{
    	Category cat=catimp.selectBasedById(pcId);
   		 if(cat==null)
   			 throw new RuntimeException("Category not found with that pcId");
   	  return cat;
   	}
    
    @PostMapping("/list")
    public void insertCategory(@RequestBody Category category)
    {
    	category.setPcId(0);
    	catimp.insorup(category);
    }
    
    @PutMapping("/list")
    public void updateCategory(@RequestBody Category category)
    {
    	catimp.insorup(category);
    }
    
    @DeleteMapping("/list/{categoryId}")
    public String deleteById(@PathVariable("categoryId") int pcId)
    {
    	Category cat=catimp.selectBasedById(pcId);
  		 if(cat==null)
  			 throw new RuntimeException("Category not found with that pcid ...deletion not possible");
  	 catimp.removebasedById(pcId);
  	 return "Deleted Category id is "+pcId;
    }

}