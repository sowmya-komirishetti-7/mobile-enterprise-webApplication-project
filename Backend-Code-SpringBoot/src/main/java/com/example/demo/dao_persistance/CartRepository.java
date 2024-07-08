package com.example.demo.dao_persistance;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer>{

}