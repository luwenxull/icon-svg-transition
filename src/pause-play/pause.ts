import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  const width = 18.6
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding, padding)
  pathSerializer.lineTo(padding, height - padding)
  pathSerializer.moveTo(width - padding, padding)
  pathSerializer.lineTo(width - padding, height / 2)
  pathSerializer.lineTo(width - padding, height - padding)
  return pathSerializer.toString()
}
