package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import driver.Driver;

public class AddUser {
	AddUser(int id,String username,String password)
	{
		try (Connection connection = Driver.getConnection();
	             PreparedStatement statement = connection.prepareStatement("INSERT INTO user (user_id, username, password) VALUES (?, ?, ?)")) {

	            statement.setInt(1, id);
	            statement.setString(2, username);
	            statement.setString(3, password);

	            int rowsInserted = statement.executeUpdate();

	            if (rowsInserted > 0) {
	                System.out.println("User added successfully!");
	            } else {
	                System.out.println("Failed to add user.");
	            }
	            Admin.AdminPage();
	        } catch (SQLException | ClassNotFoundException e) {
	            e.printStackTrace();
	        }
	}
}
