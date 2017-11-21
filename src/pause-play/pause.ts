import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(7, 5)
  pathSerializer.lineTo(7, 19)
  pathSerializer.moveTo(16, 5)
  pathSerializer.lineTo(16, 12)
  pathSerializer.lineTo(16, 19)
  return pathSerializer.toString()
}
