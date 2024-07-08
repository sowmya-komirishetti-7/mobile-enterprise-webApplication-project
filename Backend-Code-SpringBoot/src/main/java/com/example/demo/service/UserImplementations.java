package com.example.demo.service;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao_persistance.UserRepository;
import com.example.demo.entity.User;

@Service  
public class UserImplementations {


	private UserRepository userrep;
	
    @Autowired  //DI
    private BCryptPasswordEncoder passwordEncoder;
    
	public UserImplementations(UserRepository userrep) 
	{
	this.userrep = userrep;
    }
	
	  //to transfer data dao to controller
	public List<User>  displayAllData()
	{
		List<User> users = userrep.findAll();
		return users;     //select all the data from entity
	}
	
	
	public User selectBasedById(int uId)
	{
		User userFromDB = userrep.findById(uId).get();
		return userFromDB; //select data based on id
	}
	
	@Transactional
	public String insorup(User user) 
	{
		User userFromDB=userrep.findByuEmail(user.getuEmail());
		if(userFromDB!=null) {
			//throw new Exception("This email already exists..");
			return "This email already exists..";
		}
		user.setuPassword(this.passwordEncoder.encode(user.getuPassword()));
		userrep.save(user);   //insert or update
		return "Success";
		
	}
	
	
	public void removebasedById(int uId)
	{
		userrep.deleteById(uId);  //deletion based on pk column
	}

	public void updateUser(User user) {
//		user.setuPassword(this.passwordEncoder.encode(user.getuPassword()));
		userrep.save(user); 
		
	}
}