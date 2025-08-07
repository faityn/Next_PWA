import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbeeej3P90KeNjIodlwOG8HxBNt_YDJJ4",
  authDomain: "next-pwa-365d5.firebaseapp.com",
  projectId: "next-pwa-365d5",
  storageBucket: "next-pwa-365d5.firebasestorage.app",
  messagingSenderId: "1026498440913",
  appId: "1:1026498440913:web:84e13f61dadd87464f9ff0",
  measurementId: "G-6Z1LPXM58Q",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
