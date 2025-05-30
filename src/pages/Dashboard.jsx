import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from '../components/Footer'
import Logo from '../components/Logo'

// Menu icon URLs
const menuIcons = {
  vector: "/icons/Vector.png",
  muscle: "/icons/Muscle.png",
  dumbble: "/icons/solar_dumbbells-bold.png",
  inconnu: "/icons/Inconnu.png",
  logo: "/icons/logo-icon.svg"
}

export default function Dashboard() {
  // State for menu toggle
  const [showMenu, setShowMenu] = useState(false)

  // State for form data
  const [productForm, setProductForm] = useState({ name: "", price: "", stock: "" })
  const [coachForm, setCoachForm] = useState({ name: "", specialty: "", phone: "" })
  const [facilityForm, setFacilityForm] = useState({ name: "", address: "", city: "" })

  // State for image previews
  const [productImage, setProductImage] = useState(null)
  const [coachImage, setCoachImage] = useState(null)
  const [facilityImage, setFacilityImage] = useState(null)

  // State for counters
  const [stats, setStats] = useState({
    products: 0,
    coaches: 0,
    facilities: 0,
  })

  // Handle form changes
  const handleProductChange = (e) => {
    const { name, value } = e.target
    setProductForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCoachChange = (e) => {
    const { name, value } = e.target
    setCoachForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFacilityChange = (e) => {
    const { name, value } = e.target
    setFacilityForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle image changes
  const handleProductImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => setProductImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleCoachImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => setCoachImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleFacilityImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => setFacilityImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  // Handle form submissions
  const handleProductSubmit = (e) => {
    e.preventDefault()
    console.log("Product added:", productForm, productImage)
    setStats((prev) => ({ ...prev, products: prev.products + 1 }))
    setProductForm({ name: "", price: "", stock: "" })
    setProductImage(null)
  }

  const handleCoachSubmit = (e) => {
    e.preventDefault()
    console.log("Coach added:", coachForm, coachImage)
    setStats((prev) => ({ ...prev, coaches: prev.coaches + 1 }))
    setCoachForm({ name: "", specialty: "", phone: "" })
    setCoachImage(null)
  }

  const handleFacilitySubmit = (e) => {
    e.preventDefault()
    console.log("Facility added:", facilityForm, facilityImage)
    setStats((prev) => ({ ...prev, facilities: prev.facilities + 1 }))
    setFacilityForm({ name: "", address: "", city: "" })
    setFacilityImage(null)
  }

  // Image upload component
  const ImageUpload = ({ image, onChange, id }) => (
    <div className="flex justify-center">
      <label
        htmlFor={id}
        className="relative w-32 h-32 border-2 border-teal-400 rounded-lg flex flex-col items-center justify-center bg-white cursor-pointer overflow-hidden"
      >
        {image ? (
          <img src={image || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center text-teal-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 16L16 11L5 22M5 16L10 11L13 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="6" r="3" fill="currentColor" />
            </svg>
            <p className="text-xs mt-2">Ajouter une image</p>
          </div>
        )}
        <input type="file" id={id} className="hidden" accept="image/*" onChange={onChange} />
      </label>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0a1525] text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="scale-75 sm:scale-100">
          <Logo />
        </div>
        <div className="relative ml-4">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Menu"
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {showMenu && (
            <div className="fixed inset-0 w-screen h-screen bg-gray-800 z-50" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>               <div className="flex justify-between items-center p-6">
                <img src={menuIcons.logo} alt="Logo" className="h-12" />
                <button 
                  onClick={() => setShowMenu(false)}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-6">
                  {[
                    { to: "/produits1", icon: menuIcons.vector, text: "Produits" },
                    { to: "/coachs1", icon: menuIcons.muscle, text: "Coachs" },
                    { to: "/salles1", icon: menuIcons.dumbble, text: "Salle de Sport" },
                    { to: "/communaute", icon: menuIcons.inconnu, text: "Communauté" }
                  ].map((item) => (
                    <Link 
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors text-white no-underline text-lg"
                      onClick={() => setShowMenu(false)}
                    >
                      <img src={item.icon} alt="" className="w-8 h-8" />
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  ))}
                </div>
              </nav>
              
              <div className="p-6 border-t border-gray-700">
                <Link 
                  to="/connexion" 
                  className="block w-full py-3 px-4 text-white font-bold rounded-lg text-center hover:opacity-90 transition-opacity no-underline"
                  style={{
                    background: 'linear-gradient(to right, #42FACF, #42C0FA)',
                    color: 'black'
                  }}
                  onClick={() => setShowMenu(false)}
                >
                  Inscription
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 pb-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center my-8">ADMINISTRATION D'ATHELX</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#1e3a5f] rounded-lg p-4 text-center">
            <p className="text-sm mb-2">Nombre total de produits</p>
            <p className="text-3xl font-bold">{stats.products}</p>
          </div>
          <div className="bg-[#1e3a5f] rounded-lg p-4 text-center">
            <p className="text-sm mb-2">Nombre total de coachs</p>
            <p className="text-3xl font-bold">{stats.coaches}</p>
          </div>
          <div className="bg-[#1e3a5f] rounded-lg p-4 text-center">
            <p className="text-sm mb-2">Nombre de salles de sport</p>
            <p className="text-3xl font-bold">{stats.facilities}</p>
          </div>
        </div>

        {/* Add Product Form */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">AJOUTER UN PRODUIT</h2>
          <div className="bg-[#1e3a5f] rounded-lg p-6 max-w-md mx-auto">
            <form onSubmit={handleProductSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleProductChange}
                placeholder="Nom du produit"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="price"
                value={productForm.price}
                onChange={handleProductChange}
                placeholder="Prix"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="stock"
                value={productForm.stock}
                onChange={handleProductChange}
                placeholder="Stock"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />

              <ImageUpload image={productImage} onChange={handleProductImageChange} id="product-image" />

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-teal-400 text-[#0a1525] px-6 py-1 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Add Coach Form */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">AJOUTER UN COACH</h2>
          <div className="bg-[#1e3a5f] rounded-lg p-6 max-w-md mx-auto">
            <form onSubmit={handleCoachSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={coachForm.name}
                onChange={handleCoachChange}
                placeholder="Nom du coach"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="specialty"
                value={coachForm.specialty}
                onChange={handleCoachChange}
                placeholder="Spécialité"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="phone"
                value={coachForm.phone}
                onChange={handleCoachChange}
                placeholder="Téléphone"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />

              <ImageUpload image={coachImage} onChange={handleCoachImageChange} id="coach-image" />

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-teal-400 text-[#0a1525] px-6 py-1 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Add Sports Facility Form */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">AJOUTER UNE SALLE DE SPORT</h2>
          <div className="bg-[#1e3a5f] rounded-lg p-6 max-w-md mx-auto">
            <form onSubmit={handleFacilitySubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={facilityForm.name}
                onChange={handleFacilityChange}
                placeholder="Nom de la salle"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="address"
                value={facilityForm.address}
                onChange={handleFacilityChange}
                placeholder="Adresse"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="text"
                name="city"
                value={facilityForm.city}
                onChange={handleFacilityChange}
                placeholder="Ville"
                className="w-full p-2 rounded bg-teal-400/20 text-white border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />

              <ImageUpload image={facilityImage} onChange={handleFacilityImageChange} id="facility-image" />

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-teal-400 text-[#0a1525] px-6 py-1 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
