package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="u_id")
	private int uId;
	@Column(name="u_name")
	private String uName;
	@Column(name="u_password")
	private String uPassword;
	@Column(name="u_type")
	private String uType;
	@Column(name="u_phn")
	private String uPhn;
	@Column(name="u_email")
	private String uEmail;
	@Column(name="u_address")
	private String uAddress;
	
	public User() {
		
	}
	public User(int uId, String uName, String uPassword, String uType, String uPhn, String uEmail,String uAddress) {
		super();
		this.uId = uId;
		this.uName = uName;
		this.uPassword = uPassword;
		this.uType = uType;
		this.uPhn = uPhn;
		this.uEmail = uEmail;
		this.uAddress = uAddress;
	}
	public int getuId() {
		return uId;
	}
	public void setuId(int uId) {
		this.uId = uId;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public String getuPassword() {
		return uPassword;
	}
	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}
	public String getuType() {
		return uType;
	}
	public void setuType(String uType) {
		this.uType = uType;
	}
	public String getuPhn() {
		return uPhn;
	}
	public void setuPhn(String uPhn) {
		this.uPhn = uPhn;
	}
	public String getuEmail() {
		return uEmail;
	}
	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	public String getuAddress() {
		return uAddress;
	}
	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}
	@Override
	public String toString() {
		return "User [uId=" + uId + ", uName=" + uName + ", uPassword=" + uPassword + ", uType=" + uType + ", uPhn="
				+ uPhn + ", uEmail=" + uEmail + ", uAddress=" + uAddress + "]";
	}
	
}
