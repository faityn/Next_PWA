"use server";
import Pusher from "pusher-js";

import { useEffect } from "react";

export function usePusher(
  channelName: string,
  eventName: string,
  callback: (data: any) => void
) {
  useEffect(() => {
    const pusher = new Pusher("c1937d44f34d53dad837", {
      cluster: "ap3",
    });

    const channel = pusher.subscribe(channelName);
    channel.bind(eventName, callback);

    return () => {
      channel.unbind(eventName, callback);
      pusher.unsubscribe(channelName);
    };
  }, [channelName, eventName, callback]);
}
