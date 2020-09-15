import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/rest-get-simple");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        BufferedReader in = new BufferedReader(new InputStreamReader(inputStream));
        
        String line = in.readLine();
        in.close();
        
        // JSONObject jsonObj = new JSONObject(line);
        // JSONArray jsonArr = jsonObj.get("name");
        // int length = jsonArr.length();
        // if (length > 0) {
        //   String [] hobbies = new String [length];
        //   for (int i = 0; i < length; i++) {
        //     hobbies[i] = jsonArr.getString(i);
        //   }
        // }
        
        String[] hobbiesArray = {"running","coding","camping"};
        String hobbies = String.join(", ", hobbiesArray);
        System.out.println(hobbies);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }
  
 
}