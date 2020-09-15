import java.util.*; 
import java.io.*;

class Main {  
  public static void main (String[] args) {
    try {
      File dir = new File("./");
      File file = new File(dir, "newfile.txt");
      file.createNewFile();
      
      List<String> fileList = Arrays.asList(dir.list());
      Collections.sort(fileList);
      String result = String.join(", ", fileList);

      System.out.println(result);
    } catch (Exception e) {
      System.out.println(e);
    }
  }   
}