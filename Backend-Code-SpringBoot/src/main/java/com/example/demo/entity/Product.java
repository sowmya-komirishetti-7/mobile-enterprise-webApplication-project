package com.example.demo.entity;

	import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.ManyToOne;
	import javax.persistence.Table;

	import javax.persistence.FetchType;
	import javax.persistence.JoinColumn;

	@Entity
	@Table(name="product")
	public class Product {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="p_id")
		private int pId;
		@Column(name="p_name")
		private String pName;
		@Column(name="p_img")
		private String pImage;
		@Column(name="p_price")
		private double pPrice;
		@Column(name="p_desc")
		private  String pDesc;
		@Column(name="p_quantity")
		private int pQuantity;
		@Column(name="pc_id")
		private int pcId;
		
		@ManyToOne(targetEntity=Category.class,fetch = FetchType.EAGER) 
		@JoinColumn(name="pc_id",insertable = false, updatable = false)
		private Category category;
		
//		@ManyToOne(targetEntity=Cart.class,fetch = FetchType.EAGER) 
//		@JoinColumn(name="c_id",insertable = false, updatable = false)
//		private Cart cart;
		
		public Product() {
			
		}
		public Product(int pId, String pName, String pImage, double pPrice, String pDesc, int pQuantity, int pcId) {
			this.pId = pId;
			this.pName = pName;
			this.pImage = pImage;
			this.pPrice = pPrice;
			this.pDesc = pDesc;
			this.pQuantity = pQuantity;
			this.pcId = pcId;
		}
		public int getpId() {
			return pId;
		}
		public void setpId(int pId) {
			this.pId = pId;
		}
		public String getpName() {
			return pName;
		}
		public void setpName(String pName) {
			this.pName = pName;
		}
		public String getpImage() {
			return pImage;
		}
		public void setpImage(String pImage) {
			this.pImage = pImage;
		}
		public double getpPrice() {
			return pPrice;
		}
		public void setpPrice(double pPrice) {
			this.pPrice = pPrice;
		}
		public String getpDesc() {
			return pDesc;
		}
		public void setpDesc(String pDesc) {
			this.pDesc = pDesc;
		}
		public int getpQuantity() {
			return pQuantity;
		}
		public void setpQuantity(int pQuantity) {
			this.pQuantity = pQuantity;
		}
		public int getPcId() {
			return pcId;
		}
		public void setPcId(int pcId) {
			this.pcId = pcId;
		}
		@Override
		public String toString() {
			return "Product [pId=" + pId + ", pName=" + pName + ", pImage=" + pImage + ", pPrice=" + pPrice + ", pDesc="
					+ pDesc + ", pQuantity=" + pQuantity + ", pcId=" + pcId + "]";
		}
		
		
	}


