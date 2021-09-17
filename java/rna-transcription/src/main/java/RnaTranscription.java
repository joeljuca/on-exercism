import java.util.Hashtable;

public class RnaTranscription {
    public String ofDna(String dnaString) {
        Hashtable<Character, Character> ht = new Hashtable<Character, Character>();
        
        String output = "";
        
        ht.put('G', 'C');
        ht.put('C', 'G');
        ht.put('T', 'A');
        ht.put('A', 'U');
        
        for (int i = 0; i < dnaString.length(); i++) {
            char c = ht.containsKey(dnaString.charAt(i))
                ? ht.get(dnaString.charAt(i))
                : dnaString.charAt(i);
            
            output += c;
        }
        
        return output;
    }
}