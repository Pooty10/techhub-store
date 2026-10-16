import Link from 'next/link'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  const filtered = products.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">TechHub Store</h1>
        <nav className="space-x-4">
          <Link href="/cart"><a className="px-3 py-2 bg-blue-600 text-white rounded">Cart</a></Link>
        </nav>
      </header>

      <section className="mb-6">
        <div className="flex gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products" className="flex-1 px-3 py-2 border rounded" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 border rounded">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-500">Demo store — not affiliated with Best Buy.</footer>
    </div>
  )
}
