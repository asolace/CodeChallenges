import java.util.*; 
import java.io.*;

class Main {

  public static String PalindromeTwo(String str) {
    String str2 = str.replaceAll("\\W", "");
    String reversed = new StringBuilder(str2).reverse().toString();
    
    return reversed.equalsIgnoreCase(str2) ? "true" : "false";
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(PalindromeTwo(s.nextLine())); 
  }

}