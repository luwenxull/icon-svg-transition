import { path } from 'd3-path'
export default function pause(): string {
  const pathSerializer = path()
  const width = 24
  const height = 24
  const padding = 3
  pathSerializer.moveTo(padding * 3, height - padding)
  pathSerializer.quadraticCurveTo(width / 2, height / 2, width - padding, padding * 2)
  pathSerializer.moveTo(padding, height - padding * 3)
  pathSerializer.quadraticCurveTo(padding * 2, height - padding * 2, padding * 3, height - padding)
  return pathSerializer.toString()
}
