package com.example.demo.entity;

import javax.persistence.Column;


import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="c_Id")
private int cId;
	@Column(name="u_Id")
private int uId;
	@Column(name="p_Id")
private int pId;
	
	@OneToOne(targetEntity=Product.class,fetch = FetchType.EAGER)
	@JoinColumn(name="p_id",insertable = false, updatable = false)
	private Product product;
	
	//@OneToOne
    //@JoinColumn(name = "u_id")
   // @ImportResource(path = "User", rel="user")
    //private User user;
	
	//@OneToOne(mappedBy = "cart")  
	//private Set<User> users;

public Cart()
{
	
}

public Cart(int cId, int uId, int pId) {
	this.cId = cId;
	this.uId = uId;
	this.pId = pId;
}

public int getcId() {
	return cId;
}

public void setcId(int cId) {
	this.cId = cId;
}

public int getuId() {
	return uId;
}

public void setuId(int uId) {
	this.uId = uId;
}

public int getpId() {
	return pId;
}

public void setpId(int pId) {
	this.pId = pId;
}

@Override
public String toString() {
	return "Cart [cId=" + cId + ", uId=" + uId + ", pId=" + pId + "]";
}

}
