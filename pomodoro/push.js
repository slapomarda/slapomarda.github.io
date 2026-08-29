const PUBLIC_VAPID_KEY = 'BJNeyXjyAT8hQH6_vkAgHDZsn45jIDFpgEWciGKuT1qHcL2LUcFeWrzZDl9SsI1TDx96yY0KRQjeFN09X7irFWw';
const BACKEND_URL = 'https://slapomarda-github-io.vercel.app/api';

window.pushSubscription = null;
let currentMessageIds = [];

async function initPush() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;
    try {
        const registration = await navigator.serviceWorker.register('sw.js');
        console.log('Service Worker registered');
    } catch (e) {
        console.error('SW init failed', e);
    }
}

async function subscribePush() {
    if (!('serviceWorker' in navigator)) return null;
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
        sub = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
        });
    }
    window.pushSubscription = sub;
    return sub;
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

async function scheduleServerPush(title, body, delaySeconds) {
    if (!window.pushSubscription) await subscribePush();
    if (!window.pushSubscription) return;
    
    try {
        const res = await fetch(`${BACKEND_URL}/schedule`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subscription: window.pushSubscription,
                delaySeconds: delaySeconds,
                title: title,
                body: body
            })
        });
        const data = await res.json();
        if (data.messageId) {
            currentMessageIds.push(data.messageId);
        }
    } catch (e) {
        console.error('Failed to schedule push', e);
    }
}

async function cancelServerPush() {
    if (currentMessageIds.length === 0) return;
    try {
        const ids = [...currentMessageIds];
        currentMessageIds = []; // clear immediately
        for (const id of ids) {
            await fetch(`${BACKEND_URL}/cancel`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messageId: id })
            });
        }
    } catch (e) {}
}

window.initPush = initPush;
window.subscribePush = subscribePush;
window.scheduleServerPush = scheduleServerPush;
window.cancelServerPush = cancelServerPush;
