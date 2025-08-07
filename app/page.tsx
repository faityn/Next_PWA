"use client";

import PusherTest from "@/components/PusherTest";

export default function Home() {
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
