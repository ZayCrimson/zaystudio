import { createCanvas, loadImage } from 'canvas'

export default async function handler(req, res) {
  const { 
    title = "Welcome", 
    desc = "Zay Dev", 
    img 
  } = req.query

  const canvas = createCanvas(800, 400)
  const ctx = canvas.getContext('2d')

  // background
  ctx.fillStyle = "#0f172a"
  ctx.fillRect(0, 0, 800, 400)

  // function rounded avatar
  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    ctx.clip()
  }

  // load avatar
  let avatar
  try {
    avatar = await loadImage(img)
  } catch {
    avatar = await loadImage("https://telegra.ph/file/95670d63378f74210f03.png")
  }

  // draw avatar (rounded kotak)
  ctx.save()
  roundRect(ctx, 70, 120, 160, 160, 25)
  ctx.drawImage(avatar, 70, 120, 160, 160)
  ctx.restore()

  // text
  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 42px Sans-serif"
  ctx.fillText(title, 280, 170)

  ctx.font = "24px Sans-serif"
  ctx.fillStyle = "#cbd5e1"
  ctx.fillText(desc, 280, 220)

  res.setHeader("Content-Type", "image/png")
  res.send(canvas.toBuffer())
}
