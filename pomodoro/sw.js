self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Timer terminato!';
    const body = data.body || 'È ora di cambiare fase.';
    
    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍅</text></svg>',
            vibrate: [200, 100, 200]
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Open the app if clicked
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            if (windowClients.length > 0) {
                return windowClients[0].focus();
            } else {
                return clients.openWindow('./');
            }
        })
    );
});
