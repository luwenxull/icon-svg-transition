import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  const width = 24
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding, height - padding)
  pathSerializer.lineTo(width / 2, padding)
  pathSerializer.moveTo(width / 2, padding)
  pathSerializer.lineTo(width - padding, height - padding)
  pathSerializer.moveTo(padding, height - padding)
  pathSerializer.lineTo(width / 2, padding)
  pathSerializer.moveTo(width / 2, padding)
  pathSerializer.lineTo(width - padding, height - padding)
  return pathSerializer.toString()
}
