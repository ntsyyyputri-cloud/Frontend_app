import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Simulasi.css'
import simulasiBanner from '../assets/simulasi.png'
import item1 from '../assets/1.png'
import item2 from '../assets/2.png'
import item3 from '../assets/3.png'
import item4 from '../assets/4.png'
import item5 from '../assets/5.png'
import item6 from '../assets/6.png'
import item7 from '../assets/7.png'
import item8 from '../assets/8.png'
import item9 from '../assets/9.png'
import item10 from '../assets/10.png'
import item11 from '../assets/11.png'
import item12 from '../assets/12.png'
import type { JSX } from 'react'

// ── Types ──────────────────────────────────────────────────────────────────────

interface Product {
  id: number
  name: string
  price: number
  emoji?: string
  image?: string
}

type ModalType =
  | 'saldo'
  | 'budget'
  | 'petunjuk'
  | 'overBudget'
  | 'overSaldo'
  | null

// ── Constants ──────────────────────────────────────────────────────────────────

const SALDO  = 1_500_000
const BUDGET =   550_000

const PRODUCTS: Product[] = [
  { id: 1,  name: 'Headphone',     price: 105_000, image: item1 },
  { id: 2,  name: 'Sneakers',      price: 355_000, image: item2 },
  { id: 3,  name: 'Kemeja',        price:  65_000, image: item3 },
  { id: 4,  name: 'Tas Selempang', price: 155_000, image: item4 },
  { id: 5,  name: 'Buku Catatan',  price: 205_000, image: item5 },
  { id: 6,  name: 'Cincin',        price:  55_000, image: item6 },
  { id: 7,  name: 'Cardigan',      price: 128_000, image: item7 },
  { id: 8,  name: 'Jaket Kulit',   price: 750_000, image: item8 },
  { id: 9,  name: 'Kaos Grafis',   price:  95_000, image: item9 },
  { id: 10, name: 'Kaos Stripe',   price:  72_500, image: item10 },
  { id: 11, name: 'Tumbler',       price:  80_000, image: item11 },
  { id: 12, name: 'Tote Bag',      price:  45_000, image: item12 },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatRp(amount: number): string {
  return 'Rp. ' + amount.toLocaleString('id-ID', { minimumFractionDigits: 2 }) + ','
}

// ══════════════════════════════════════════════════════════════════════════════
//  COMPLETION PAGE
// ══════════════════════════════════════════════════════════════════════════════

export function SimulationComplete(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className="complete-page">
      <div className="complete-emoji">🎉</div>
      <h1 className="complete-title">Kamu telah menyelesaikan Simulasi</h1>
      <p className="complete-subtitle">Terima Kasih</p>
      <button
        className="complete-dashboard-btn"
        onClick={() => navigate('/selesai')}
      >
        Kembali ke Dashboard &nbsp;→
      </button>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
//  MAIN SIMULATION PAGE
// ══════════════════════════════════════════════════════════════════════════════

export function Simulasi(): JSX.Element {
  const navigate = useNavigate()

  const [cart, setCart]   = useState<Set<number>>(new Set())
  const [modal, setModal] = useState<ModalType>(null)

  const cartTotal = PRODUCTS
    .filter(p => cart.has(p.id))
    .reduce((sum, p) => sum + p.price, 0)

  const cartCount = cart.size

  const toggleCart = (id: number): void => {
    setCart(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const closeModal = (): void => setModal(null)

  const handleCheckout = (): void => {
    if (cartCount === 0) return
    if (cartTotal > SALDO)  { setModal('overSaldo');  return }
    if (cartTotal > BUDGET) { setModal('overBudget'); return }
    navigate('/selesai')
  }

  const renderModal = () => {
    if (!modal) return null

    if (modal === 'petunjuk') return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-box petunjuk" onClick={e => e.stopPropagation()}>
          <ol className="modal-list">
            <li>1. Klik barang yang kamu ingin beli dan klik lagi jika ingin mengeluarkannya dari keranjang.</li>
            <li>2. Perhatikan kamu memiliki budget belanja.</li>
            <li>3. Klik checkout jika telah selesai.</li>
            <li>4. Pastikan kamu tidak belanja melebihi saldo.</li>
          </ol>
        </div>
      </div>
    )

    if (modal === 'saldo') return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <p className="modal-title">Saldo Anda:</p>
          <p className="modal-value">{formatRp(SALDO)}</p>
          <div className="modal-btn-row">
            <button className="btn-ok" onClick={closeModal}>Ok</button>
          </div>
        </div>
      </div>
    )

    if (modal === 'budget') return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <p className="modal-title">Budget Anda:</p>
          <p className="modal-value">{formatRp(BUDGET)}</p>
          <div className="modal-btn-row">
            <button className="btn-ok" onClick={closeModal}>Ok</button>
          </div>
        </div>
      </div>
    )

    if (modal === 'overBudget') return (
      <div className="modal-overlay">
        <div className="modal-box">
          <p className="modal-title">Belanja Anda melewati budget!{'\n'}Kurangi jumlah belanja dahulu?</p>
          <div className="modal-btn-row">
            <button className="btn-ok" onClick={closeModal}>Ok</button>
            <button className="btn-tidak" onClick={() => navigate('/selesai')}>Tidak</button>
          </div>
        </div>
      </div>
    )

    if (modal === 'overSaldo') return (
      <div className="modal-overlay">
        <div className="modal-box">
          <p className="modal-title">Saldo Anda Tidak Cukup!</p>
          <div className="modal-btn-row">
            <button className="btn-ok" onClick={closeModal}>Ok</button>
          </div>
        </div>
      </div>
    )

    return null
  }

  return (
    <div className="sim-page">

      {/* Nav */}
      <nav className="sim-nav">
        <button onClick={() => setModal('saldo')}>Saldo</button>
        <button onClick={() => setModal('budget')}>Budget</button>
        <button onClick={() => setModal('petunjuk')}>Petunjuk</button>
      </nav>

      {/* Banner image */}
      <div className="sim-banner">
        <img src={simulasiBanner} alt="Simulasi Belanja" />
      </div>

      {/* Cart bar */}
      <div className="sim-cart-bar">
        <div className="cart-total">
          <span className="cart-icon">🛒</span>
          <span>{formatRp(cartTotal)}</span>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout ({cartCount})
        </button>
      </div>

      {/* Product grid */}
      <div className="sim-grid">
        {PRODUCTS.map(product => {
          const isSelected = cart.has(product.id)
          return (
            <div
              key={product.id}
              className={`product-card${isSelected ? ' selected' : ''}`}
              onClick={() => toggleCart(product.id)}
            >
              <div className="product-img-wrap">
                {product.image
                  ? <img src={product.image} alt={product.name} />
                  : <span className="product-emoji">{product.emoji}</span>
                }
                {isSelected && <span className="selected-badge">✓</span>}
              </div>
              <div className="product-price">{formatRp(product.price)}</div>
            </div>
          )
        })}
      </div>

      {renderModal()}
    </div>
  )
}

export default Simulasi