import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  const width = 24
  const height = 24
  const padding = 3
  pathSerializer.moveTo(width - padding, padding)
  pathSerializer.lineTo(padding, height - padding)
  pathSerializer.moveTo(width / 2, height / 2)
  pathSerializer.lineTo(width / 2, height / 2)
  pathSerializer.moveTo(width - padding, height - padding)
  pathSerializer.lineTo(padding, padding)
  return pathSerializer.toString()
}
