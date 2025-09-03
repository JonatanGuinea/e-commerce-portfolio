import { useParams } from 'react-router-dom'

export default function Product() {
  const { id, otro } = useParams()

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>Estás viendo el producto con ID: <strong>{id} y {otro}</strong></p>
    </div>
  )
}
