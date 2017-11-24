import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  const w = 24
  const h = 24
  const p = 3 // padding
  pathSerializer.moveTo(p, h - p)
  pathSerializer.lineTo(w / 2, p)
  pathSerializer.moveTo(w / 2, p)
  pathSerializer.lineTo(w - p, h - p)
  return pathSerializer.toString()
}
