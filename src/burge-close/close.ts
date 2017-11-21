import { path } from 'd3-path'
export default function play(): string {
  const pathSerializer = path()
  pathSerializer.moveTo(7, 7)
  pathSerializer.lineTo(17, 17)
  pathSerializer.moveTo(7, 17)
  pathSerializer.lineTo(17, 7)
  pathSerializer.moveTo(17, 17)
  pathSerializer.lineTo(17, 17)
  return pathSerializer.toString()
}
