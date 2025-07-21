package com.examples.reactive.java.flow;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        VideoStreamServer streamServer = new VideoStreamServer();
        streamServer.subscribe(new VideoPlayer());

        // submit video frames

        ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
        AtomicLong frameNumber = new AtomicLong();
        executor.scheduleWithFixedDelay(() -> {
            streamServer.offer(new VideoFrame(frameNumber.getAndIncrement()), (subscriber, videoFrame) -> {
                subscriber.onError(new RuntimeException("Frame#" + videoFrame.getNumber()
                        + " dropped because of backpressure"));
                return true;
            });
        }, 0, 100, TimeUnit.MILLISECONDS);

        Thread.sleep(1000);
    }
}
