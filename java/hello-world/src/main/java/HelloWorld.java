public class HelloWorld {
    public static String hello(String name) {
        return name != null && name.length() > 0
            ? "Hello, " + name + "!"
            : "Hello, World!";
    }
}
