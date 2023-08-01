package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import driver.Driver;

public class DeleteUser extends Admin{
	DeleteUser(int id)
	{
		try (Connection connection = Driver.getConnection();
	             PreparedStatement statement = connection.prepareStatement("DELETE FROM user WHERE user_id = ?")) {

	            statement.setInt(1, id);

	            int rowsDeleted = statement.executeUpdate();

	            if (rowsDeleted > 0) {
	                System.out.println("User with user_id " + id + " has been deleted.");
	            } else {
	                System.out.println("No user found with user_id " + id + ". No user deleted.");
	            }
	            Admin.AdminPage();

	        } catch (SQLException | ClassNotFoundException e) {
	            e.printStackTrace();
	        }
	}
}
