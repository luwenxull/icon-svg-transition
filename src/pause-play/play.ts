import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  const width = 18.6
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding, padding)
  pathSerializer.lineTo(padding, height - padding)
  pathSerializer.moveTo(padding, padding)
  pathSerializer.lineTo(width - padding, height / 2)
  pathSerializer.lineTo(padding, height - padding)
  return pathSerializer.toString()
}
