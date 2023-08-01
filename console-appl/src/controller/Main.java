package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import driver.Driver;
import model.MenuItem;
import controller.Order;
import controller.BookTable;
 
public class Main
{
	public static Scanner input;

	public static List<String> getRestaurantNames() {
	    List<String> restaurantNames = new ArrayList<>();
	    try (Connection connection = Driver.getConnection(); 
	         Statement statement = connection.createStatement();
	         ResultSet resultSet = statement.executeQuery("SELECT res_id, res_name FROM restaurant")) {
	        while (resultSet.next()) {
	            int id = resultSet.getInt("res_id");
	            String name = resultSet.getString("res_name");
	            restaurantNames.add(id + ". " + name);
	        }
	    } catch (SQLException | ClassNotFoundException e) {
	        e.printStackTrace();
	    }
	    return restaurantNames;
	}
	public static boolean isValidUser(String username, String password) {
	    try (Connection connection = Driver.getConnection(); 
	         PreparedStatement statement = connection.prepareStatement("SELECT COUNT(*) AS count FROM user WHERE username = ? AND password = ?")) {
	        statement.setString(1, username);
	        statement.setString(2, password);
	        try (ResultSet resultSet = statement.executeQuery()) {
	            if (resultSet.next()) {
	                int count = resultSet.getInt("count");
	                return count > 0;
	            }
	        }
	    } catch (SQLException | ClassNotFoundException e) { 
	        e.printStackTrace();
	    }
	    return false;
	}
	public static List<String> getMenuListForRestaurant(int restaur_id) {
	    List<String> menuList = new ArrayList<>();
	    try (Connection connection = Driver.getConnection();
	         PreparedStatement statement = connection.prepareStatement("SELECT menu_list FROM restaurant WHERE res_id = ?")) {
	        statement.setInt(1, restaur_id);
	        try (ResultSet resultSet = statement.executeQuery()) {
	            if (resultSet.next()) {
	                String menuJson = resultSet.getString("menu_list");
	                Gson gson = new Gson();
	                List<MenuItem> menuItems = gson.fromJson(menuJson, new TypeToken<List<MenuItem>>(){}.getType());    
	                for (MenuItem menuItem : menuItems) {
	                    String name = menuItem.getMenu_name();
	                    double price = menuItem.getPrice();
	                    int id = menuItem.getMenu_id();
	                    menuList.add("|  "+id+"   |   "+name + "       | $" + price+" |");
	                }
	            }
	        }
	    } catch (SQLException | ClassNotFoundException e) {
	        e.printStackTrace();
	    }
	    return menuList;
	}
	public static void RestaurantConfirm()
	{
		System.out.println(getRestaurantNames());
		System.out.print("\nSelect Restaurant ID : ");
		int restaur_id = input.nextInt();
		System.out.println();
		List<String> menu = getMenuListForRestaurant(restaur_id);
		System.out.println("+------+---------------+--------+");
        System.out.println("|MenuId|   Menu Name   |Price   |");
		for(int i=0;i<menu.size();i++)
		{
			System.out.println("+------+---------------+--------");
			System.out.println(menu.get(i));
		}
		System.out.println("+------+---------------+--------+");
		System.out.print("\n Do you find the menu appealing ?: Type 'Yes' or 'No' : ");
		String response = input.next();
		System.out.println();
		if(Order.orderConfirm(response))
		{
			BookTable.availTable();
			System.out.println("Enter the Table no. to book : ");
			int table_no = input.nextInt();
			System.out.println();
			System.out.println(BookTable.bookTable(table_no));
		}
		else
		{
			RestaurantConfirm();
		}
	}


	public static void main(String args[])
	{
		input = new Scanner(System.in);
		System.out.println("*-*-*-*-*-*Login Page*-*-*-*-*-*\n");
		System.out.print("Username : ");
		String usrnm = input.next();
		System.out.print("Password : ");
		String pwd = input.next();
		System.out.println();
		System.out.println("*-*-*-*-*-*Welcome to ABH RMS*-*-*-*-*-*\n");
		if(usrnm.equals("admin")&&Admin.admin(usrnm, pwd))
		{
			Admin.AdminPage();
		}
		else if(isValidUser(usrnm,pwd))
		{
			RestaurantConfirm();
		}
		else
		{
			System.out.println("Invalid User Credentials!");
		}
	}

	
}