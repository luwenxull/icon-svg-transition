import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(8, 8)
  pathSerializer.lineTo(8, 16)
  pathSerializer.moveTo(8, 8)
  pathSerializer.lineTo(12, 12)
  pathSerializer.lineTo(8, 16)
  return pathSerializer.toString()
}
