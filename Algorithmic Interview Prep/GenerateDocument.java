/*
Given a string of available characters and a string representing a document
that you need to generate, write a function that determines if you can generate the 
using the available characters
*/

class GenerateDocument {
    public boolean generateDocument(String characters, String document){
        if (document.equals("")){
			return true;
		}
		for (int i = 0; i < document.length(); i++){
			if (characters.contains(String.valueOf(document.charAt(i)))){
				characters = characters.replaceFirst(String.valueOf(document.charAt(i)), "");
			}
			else return false;
		}
		return true;
    }
}