import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  const width = 24
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding, padding)
  pathSerializer.lineTo(width - padding, height - padding)
  pathSerializer.moveTo(padding, height - padding)
  pathSerializer.lineTo(width - padding, padding)
  pathSerializer.moveTo(padding, padding)
  pathSerializer.lineTo(padding, padding)
  return pathSerializer.toString()
}
