package com.example.demo.entity;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pc_id")
	private int pcId;
	@Column(name="pc_name")
	private String pcName;
	
	@OneToMany(mappedBy = "category")    
	private Set<Product> product;
	
	public Category() {
		
	}
	public Category(int pcId, String pcName) {
		this.pcId = pcId;
		this.pcName = pcName;
	}
	public int getPcId() {
		return pcId;
	}
	public void setPcId(int pcId) {
		this.pcId = pcId;
	}
	public String getPcName() {
		return pcName;
	}
	public void setPcName(String pcName) {
		this.pcName = pcName;
	}
	@Override
	public String toString() {
		return "Category [pcId=" + pcId + ", pcName=" + pcName + "]";
	}
	
}
