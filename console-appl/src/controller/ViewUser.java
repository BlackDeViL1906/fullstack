package controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import driver.Driver;

public class ViewUser extends Admin {


    public static void viewUsers() {
        try (Connection connection = Driver.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM user")) {

            System.out.println("All Users in User Table:\n");
            System.out.println("+---------+------------+--------------+");
            System.out.println("| User ID |  Username  |   Password   |");
            System.out.println("+---------+------------+--------------+");

            while (resultSet.next()) {
                int userId = resultSet.getInt("user_id");
                String username = resultSet.getString("username");
                String password = resultSet.getString("password");

                System.out.printf("| %-7d | %-10s | %-12s |\n", userId, username, password);
            }
            System.out.println("+---------+------------+--------------+");
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    public static void viewUsers(int id) {
    	
        try (Connection connection = Driver.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM user WHERE user_id =" +id)) {
        	System.out.println();
            System.out.println("+---------+------------+--------------+");
            System.out.println("| User ID |  Username  |   Password   |");
            System.out.println("+---------+------------+--------------+");

            while (resultSet.next()) {
                int userId = resultSet.getInt("user_id");
                String username = resultSet.getString("username");
                String password = resultSet.getString("password");

                System.out.printf("| %-7d | %-10s | %-12s |\n", userId, username, password);
            }
            System.out.println("+---------+------------+--------------+");
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
