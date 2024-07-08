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

import com.example.demo.entity.User;
import com.example.demo.service.UserImplementations;

@RestController   //@Controller+@RequestBody
@RequestMapping("/user")  //classMapping
public class UserController 
{
private UserImplementations userimp;

@Autowired  //DI
public UserController(UserImplementations userimp) 
{
	this.userimp = userimp;
}
	
    @GetMapping("/list")   //localhost:8080/user/list
	public List<User>   getAllUserData()
	{
		 return userimp.displayAllData();
	}
    
    @GetMapping("/list/{userId}")   //localhost:8080/user/list/id
   	public User  getUserData(@PathVariable("userId") int uId)
   	{
    	User user=userimp.selectBasedById(uId);
   		 if(user==null)
   			 throw new RuntimeException("user not found with that uId");
   	  return user;
   	}
    
    @PostMapping("/list")
    public String insertUser(@RequestBody User user) 
    {
    	user.setuId(0);
    	return userimp.insorup(user);
    }
    
    @PutMapping("/list")
    public void updateUser(@RequestBody User user)
    {
    	userimp.updateUser(user);
    }
    
    @DeleteMapping("/list/{userId}")
    public String deleteById(@PathVariable("userId") int uId)
    {
    	User user=userimp.selectBasedById(uId);
  		 if(user==null)
  			 throw new RuntimeException("user not found with that uid ...deletion not possible");
  	 userimp.removebasedById(uId);
  	 return "Deleted User id is "+uId;
    }

}
