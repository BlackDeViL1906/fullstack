package controller;

public class Order {
	public static boolean orderConfirm(String userResponse)
	{
		if(userResponse.equals("Yes"))
		{
			return true;
		}
		return false;
	}
}
