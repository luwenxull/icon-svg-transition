import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  const width = 24
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding, padding * 3)
  pathSerializer.lineTo(padding * 3, height - padding)
  pathSerializer.moveTo(padding * 3, height - padding)
  pathSerializer.lineTo(width - padding, padding * 2)
  return pathSerializer.toString()
}
