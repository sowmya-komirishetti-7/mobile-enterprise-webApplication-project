package com.example.demo.dao_persistance;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByuEmail(String getuEmail);

}