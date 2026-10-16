import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={product.image} className="w-full h-48 object-cover rounded" />
      <div className="mt-3 flex-1">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold text-xl">${product.price.toFixed(2)}</div>
        <Link href={`/product/${product.id}`}>
          <a className="px-3 py-1 bg-blue-600 text-white rounded">View</a>
        </Link>
      </div>
    </div>
  )
}
