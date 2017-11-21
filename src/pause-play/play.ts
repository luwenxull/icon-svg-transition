import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(7, 5)
  pathSerializer.lineTo(7, 19)
  pathSerializer.moveTo(7, 5)
  pathSerializer.lineTo(16, 12)
  pathSerializer.lineTo(7, 19)
  return pathSerializer.toString()
}
