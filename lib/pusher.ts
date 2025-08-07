"use server";
import Pusher from "pusher-js";

export const pusherClient = new Pusher("c1937d44f34d53dad837", {
  cluster: "ap3",
});
