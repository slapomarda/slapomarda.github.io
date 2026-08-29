import webpush from 'web-push';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    // QStash invierà i dati qui allo scadere del tempo
    const { subscription, title, body } = req.body;
    
    if (!subscription) return res.status(400).json({ error: 'Missing subscription' });

    // Le chiavi VAPID verranno prese dalle variabili d'ambiente di Vercel
    webpush.setVapidDetails(
        'mailto:tuamail@example.com',
        process.env.NEXT_PUBLIC_VAPID_KEY, // La chiave pubblica che abbiamo già
        process.env.VAPID_PRIVATE_KEY      // La chiave privata segreta
    );

    try {
        await webpush.sendNotification(subscription, JSON.stringify({ title, body }));
        return res.status(200).json({ success: true });
    } catch (e) {
        console.error('Push error:', e);
        return res.status(500).json({ error: e.message });
    }
}
