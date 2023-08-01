package controller;

import java.util.Scanner;

import service.AdminServiceImpl;

public class Admin {
	public static Scanner input;
	
    public static boolean admin(String username, String password) {
        AdminServiceImpl adminService = new AdminServiceImpl();
        return adminService.isAdminUser(username, password);
    }
    
    public static void selectOption()
    {
    	input = new Scanner(System.in);
    	int option = input.nextInt();
    	if(option==1)
    	{
    		ViewUser.viewUsers();
    	}
    	else if(option==2)
    	{
    		System.out.print("\n Enter the user_id : ");
    		int id = input.nextInt();
    		ViewUser.viewUsers(id);
    	}
    	else if(option==3)
    	{
    		System.out.print("\nEnter the id to delete : ");
    		int id = input.nextInt();
    		DeleteUser obj2 = new DeleteUser(id);
    	}
    	else if(option ==4)
    	{
    		System.out.print("\nEnter an id : ");
    		int id = input.nextInt();
    		System.out.print("\nEnter an username : ");
    		String name = input.next();
    		System.out.print("\nEnter an userpassword : ");
    		String password = input.next();
    		AddUser obj3 = new AddUser(id,name,password);
    	}
    	else
    	{
    		System.out.println("Please Select a Valid Option.");
    		selectOption();
    	}
    }
    public static void AdminPage()
    {
    	System.out.println("*-*-*-*-*-*Welcome Admin*-*-*-*-*-*\n");
    	System.out.println("What would you like to do ?\n");
    	System.out.println("1.View All Users\n");
    	System.out.println("2.View Users By Id\n");
    	System.out.println("3.Delete User\n");
    	System.out.println("4.Add User\n");
    	System.out.print("Select a option : ");
    	selectOption();
    }
}

