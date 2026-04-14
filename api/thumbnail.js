export default function handler(req, res) {
  const { 
    title = "Welcome", 
    desc = "Selamat Datang", 
    img = "https://res.cloudinary.com/dyvfslvvh/image/upload/v1776180226/naze_gyzxhm.png"
  } = req.query

  const safeImg = encodeURI(img)

  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate")

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>

    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:image" content="${safeImg}" />
    <meta property="og:type" content="website" />

    <!-- Responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      body {
        margin: 0;
        font-family: sans-serif;
        background: #0f172a;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
      }
      .card {
        background: #1e293b;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        max-width: 300px;
      }
      img {
        width: 120px;
        height: 120px;
        border-radius: 20px;
        margin-bottom: 20px;
        object-fit: cover;
      }
      h1 {
        margin: 10px 0;
        font-size: 22px;
      }
      p {
        color: #cbd5e1;
        font-size: 14px;
      }
      .btn {
        margin-top: 20px;
        display: inline-block;
        padding: 10px 20px;
        background: #22c55e;
        color: black;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <img src="${safeImg}" />
      <h1>${title}</h1>
      <p>${desc}</p>

      <a class="btn" href="https://whatsapp.com/channel/0029Vb7cmHW42DcZf5Gdgk2p">
        Join Channel
      </a>
    </div>
  </body>
  </html>
  `)
}
