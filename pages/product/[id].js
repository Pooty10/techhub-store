import products from '../../data/products.json'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)
  const { addItem } = useContext(CartContext)

  if (!product) return <div className="p-6">Loading...</div>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full rounded shadow" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category} • Rating: {product.rating} ⭐</p>
          <p className="text-3xl font-extrabold mt-4">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6">
            <button onClick={() => { addItem(product, 1) }} className="px-4 py-2 bg-blue-600 text-white rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
