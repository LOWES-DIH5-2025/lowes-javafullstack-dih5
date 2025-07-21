package com.examples.reactive.java.flow;

import java.util.concurrent.Flow;

public class VideoPlayer implements Flow.Subscriber<VideoFrame> {

    Flow.Subscription subscription = null;

    @Override
    public void onSubscribe(Flow.Subscription subscription) {
        this.subscription = subscription;
        subscription.request(1);
    }

    @Override
    public void onNext(VideoFrame item) {
        System.out.printf("play #{%d}" , item.getNumber());
        subscription.request(1); // will get error due to back pressure if we comment this
    }

    @Override
    public void onError(Throwable throwable) {
        System.out.printf("There is an error in video streaming:{%s}" , throwable.getMessage());

    }

    @Override
    public void onComplete() {
        System.out.printf("Video has ended");
    }
}

