import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { items, addItem, removeItem, clear } = useContext(CartContext)
  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <div>
          <p className="mb-4">Your cart is empty.</p>
          <Link href="/"><a className="text-blue-600">Continue shopping</a></Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {items.map(it => (
              <li key={it.product.id} className="flex items-center gap-4">
                <img src={it.product.image} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{it.product.name}</div>
                  <div className="text-sm text-gray-600">${it.product.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => addItem(it.product, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  <div>{it.quantity}</div>
                  <button onClick={() => removeItem(it.product.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <button onClick={clear} className="px-3 py-2 bg-red-500 text-white rounded mr-2">Clear</button>
            </div>
            <div className="text-right">
              <div className="text-gray-600">Subtotal</div>
              <div className="text-2xl font-bold">${total.toFixed(2)}</div>
              <div className="mt-3">
                <button onClick={() => alert('Simulated checkout — not processing real payments in this demo.')} className="px-4 py-2 bg-green-600 text-white rounded">Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
