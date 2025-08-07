"use client";

import PusherTest from "@/components/PusherTest";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export default function Home() {
  // const { token, notificationPermissionStatus } = useFcmToken();

  const handleTestNotification = async () => {
    const response = await fetch("/pusher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test Notification",
        message: "This is a test notification",
        link: "/contact",
      }),
    });

    const data = await response.json();
    toast.info(`Msg: ${data}`);
    console.log(data);
  };
  // const Notification = async () => {
  //   const response = usePusher("notifications", "new-message", (data) => {
  //     console.log("New message:", data);
  //   });
  //   console.log(response);
  // };
  return (
    <main className="p-10">
      <h1 className="text-4xl mb-4 font-bold">PWA Push Notification Demo</h1>

      {/* {notificationPermissionStatus === "granted" ? (
        <p>Permission to receive notifications has been granted.</p>
      ) : notificationPermissionStatus !== null ? (
        <p>
          You have not granted permission to receive notifications. Please
          enable notifications in your browser settings.
        </p>
      ) : null} */}

      <PusherTest />
      {/* <Button className="mt-5" onClick={handleTestNotification}>
        Send Test Notification
      </Button> */}
    </main>
  );
}
