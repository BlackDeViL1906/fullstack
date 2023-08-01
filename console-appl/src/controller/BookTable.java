package controller;

import java.sql.*;

import driver.Driver;

public class BookTable {
	public static void availTable()
	{
		try (
				Connection connection = Driver.getConnection();
	             PreparedStatement statement = connection.prepareStatement("SELECT * FROM res_table WHERE table_avail = true");
	             ResultSet resultSet = statement.executeQuery()) {

	            System.out.println("Available Tables:");
	            System.out.println("Table ID\t");

	            while (resultSet.next()) {
	                int tableId = resultSet.getInt("table_no");
	               
	                System.out.println(tableId + "\t\t" );
	            }

	        } catch (SQLException | ClassNotFoundException e) {
	            e.printStackTrace();
	        }
	}
	public static String bookTable(int table_no) {
        try (Connection connection = Driver.getConnection();
             PreparedStatement updateStatement = connection.prepareStatement("UPDATE res_table SET table_avail = false WHERE table_no = ?")) {

            updateStatement.setInt(1, table_no);
            int rowsUpdated = updateStatement.executeUpdate();

            if (rowsUpdated > 0) {
                return "Table " + table_no + " has been successfully booked!";
            } else {
                return "Failed to book the table. Table ID " + table_no + " may not be available.";
            }

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            return "An error occurred while booking the table.";
        }
    }
	
}
