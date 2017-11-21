import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(10, 8)
  pathSerializer.lineTo(10, 16)
  pathSerializer.moveTo(14, 8)
  pathSerializer.lineTo(14, 12)
  pathSerializer.lineTo(14, 16)
  return pathSerializer.toString()
}
