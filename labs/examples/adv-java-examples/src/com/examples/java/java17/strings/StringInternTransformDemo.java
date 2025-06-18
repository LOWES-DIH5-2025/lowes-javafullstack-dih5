package com.examples.java.java17.strings;

public class StringInternTransformDemo {
    public static void main(String[] args) {
        // String intern example

        String s1 = "Hello";
        String s2 = new String("Hello");
        String s3 = "Hello";

        System.out.println(s1 == s2); // false
        System.out.println(s1 == s3); // true

        String internedS1 = s2.intern();
        String internedS2 = s3;

        System.out.println(internedS1 == internedS2); // true

        // String transform example
        String s4 = "Hello";
        String s5 = s4.transform(str -> str.isBlank()? "World" : str.toUpperCase());

        System.out.println(s4); // Hello
        System.out.println(s5); // HELLO

        // string intent example
        String s6 = "BlueYonder";

        String s7 = s6.indent(10).indent(-5);
        System.out.println(s7); // true
    }
}
