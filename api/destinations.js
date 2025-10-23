let data = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    return res.json(data);
  }
  
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const newItem = { ...JSON.parse(body), id: Date.now() };
      data.push(newItem);
      res.json(newItem);
    });
  }
}