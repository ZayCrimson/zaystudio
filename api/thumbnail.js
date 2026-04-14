export default function handler(req, res) {
  const { title = "Zay Dev", desc = "Welcome", img = "https://telegra.ph/file/95670d63378f74210f03.png" } = req.query

  res.setHeader("Content-Type", "text/html")
  res.send(`
  <html>
  <head>
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:image" content="${img}" />
  <meta name="twitter:card" content="summary_large_image" />
  <title>${title}</title>
  </head>
  <body></body>
  </html>
  `)
}
