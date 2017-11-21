import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(10, 8)
  pathSerializer.lineTo(10, 16)
  pathSerializer.moveTo(10, 8)
  pathSerializer.lineTo(14, 12)
  pathSerializer.lineTo(10, 16)
  return pathSerializer.toString()
}
