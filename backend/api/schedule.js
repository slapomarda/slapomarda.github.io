export default async function handler(req, res) {
    // Configura i CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Gestisci richiesta di preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { subscription, delaySeconds, title, body } = req.body;
    
    if (!subscription || !delaySeconds) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const QSTASH_TOKEN = process.env.QSTASH_TOKEN;
    const SEND_URL = 'https://slapomarda-github-io.vercel.app/api/send';

    try {
        const qstashRes = await fetch(`https://qstash.upstash.io/v2/publish/${SEND_URL}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${QSTASH_TOKEN}`,
                'Content-Type': 'application/json',
                'Upstash-Delay': `${delaySeconds}s`
            },
            body: JSON.stringify({ subscription, title, body })
        });
        
        const data = await qstashRes.json();
        return res.status(200).json({ success: true, messageId: data.messageId });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
