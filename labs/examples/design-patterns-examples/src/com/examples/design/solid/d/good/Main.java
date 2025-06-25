package com.examples.design.solid.d.good;

public class Main {
    public static void main(String[] args) {
        Keyboard key = new StandardKeyboard();
        Monitor monitor = new LedMonitor();
        WindowsPC win = new WindowsPC(key, monitor);
    }
}
