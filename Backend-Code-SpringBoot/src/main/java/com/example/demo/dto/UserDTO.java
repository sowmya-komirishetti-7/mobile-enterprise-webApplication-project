package com.example.demo.dto;

public class UserDTO {
	
	private int uId; private String uName; private String uPassword; private String uEmail;



	/**
	 * @param uId
	 * @param uName
	 * @param uPassword
	 * @param uEmail
	 */
	public UserDTO(int uId, String uName, String uPassword, String uEmail) {
		super();
		this.uId = uId;
		this.uName = uName;
		this.uPassword = uPassword;
		this.uEmail = uEmail;
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



	public String getuEmail() {
		return uEmail;
	}



	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	
	

}
