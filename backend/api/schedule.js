export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    // Configura i CORS per permettere alla tua app di chiamare questa API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') return res.status(200).end();

    const { subscription, delaySeconds, title, body } = req.body;
    
    if (!subscription || !delaySeconds) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const QSTASH_TOKEN = process.env.QSTASH_TOKEN;
    // L'URL pubblico di Vercel dove verrà ricevuta la chiamata ritardata
    const SEND_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api/send`;

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
