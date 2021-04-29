import java.util.*;
import java.io.*;

public class Generator{


	public static void main(String[] args) {
		//used this program to generate the initial HTML buttons
        List<String> grammarRules = new ArrayList<>(Arrays.asList(
			"proc ID{PROG}", "halt", "input(VAR)", "output(VAR)", "CALL ID", "VAR = ", "add(NUMEXPR,NUMEXPR)", "sub(NUMEXPR,NUMEXPR)", "mult(NUMEXPR,NUMEXPR)",
			"if(BOOL)then{CODE}", "if(BOOL)then{CODE}else{CODE}", "eq(x,x)", "(VAR < VAR)", "(VAR > VAR)", "not BOOL", "and(BOOL<BOOL)", "or(BOOL,BOOL)",
			"while(BOOL){CODE}", "for(VAR=0; VAR < VAR; VAR = add(VAR, 1)){CODE}"
		));

		for(String rule : grammarRules){
			System.out.println("<button type='button' onclick=''>"+rule+"</button><br>");//type='button' needed to make a button not submit to action_page.php, type='submit' for the actual submit code button
		}
	}//main
}//class