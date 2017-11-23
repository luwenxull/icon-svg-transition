import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  const w = 24
  const h = 24
  const p = 3 // padding
  pathSerializer.moveTo(p * 2, h / 2)
  pathSerializer.lineTo(w / 2, p)
  pathSerializer.moveTo(w / 2, p)
  pathSerializer.lineTo(w - p * 2, h / 2)
  pathSerializer.moveTo(p * 2, h - p)
  pathSerializer.lineTo(w / 2, h / 2)
  pathSerializer.moveTo(w / 2, h / 2)
  pathSerializer.lineTo(w - p * 2, h - p)
  return pathSerializer.toString()
}
