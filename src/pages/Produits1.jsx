import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import heroBgImage from "/images/produits1-hero.png";
import ButtonPrimary from "../components/buttonPrimary";
import ProduitCard from "../components/ProduitCard";
import productAPI from "../api/productsAPI";

// Import fallback images if API fails
import product1Image from "/images/product-1.png"
import product2Image from "/images/product-2.png"
import product3Image from "/images/product-3.png"
import product4Image from "/images/product-4.png"
import product5Image from "/images/product-5.png"
import product6Image from "/images/product-6.png"

// Fallback products in case API fails
const FALLBACK_PRODUCTS = [
  {
    id: 'product1',
    productName: "MATTE PROTEIN",
    productImage: product1Image,
    producRate: "4.8",
    productPrice: "29.99",
    productDescription: "Matte protein jar mockup",
  },
  // Add other fallback products here...
];

function Produits1Page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch products from API
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await productAPI.getAllProducts();
        
        // Map API response to match component props
        const formattedProducts = response.data.map(product => ({
          id: product._id,
          produitName: product.nom,
          produitImage: product.imageUrl,
          produitRate: product.moyenneNotes?.toFixed(1) || "0",
          produitPrice: product.prix.toString(),
          produitDescription: product.description || "",
          stock: product.stock || 0,
          category: product.categorie
        }));
        
        setProducts(formattedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Impossible de charger les produits. Utilisation des données de secours.");
        setProducts(FALLBACK_PRODUCTS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="overflow-x-clip">
      <div
        className="pb-43"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-1 text-center max-w-[1262px] mx-auto">
            DÉCOUVREZ NOS{" "}
            <span className="text_gradient">MEILLEURS PRODUITS</span> POUR
            BOOSTER VOS PERFORMANCES
          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-20">
            Des compléments alimentaires, équipements et accessoires
            sélectionnés pour vous aider à atteindre vos objectifs sportifs
          </p>
          <ButtonPrimary buttonClassName="mx-auto mt-20">
            <a href="#raca">Découvrez nos produits</a>
          </ButtonPrimary>
        </section>
      </div>

      <section id="raca">
        <div
          className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
          style={{
            filter: "blur(60px)",
          }}
        ></div>
        
        {/* Error message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 max-w-[1264px] mx-auto">
            {error}
          </div>
        )}
        
        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10 max-w-[1264px] mx-auto">
            {products.slice(0, 6).map((product, index) => (
              <ProduitCard
                key={product.id || index}
                id={product.id}
                produitName={product.produitName}
                produitImage={product.produitImage}
                produitRate={product.produitRate}
                produitDescription={product.produitDescription}
                produitPrice={product.produitPrice}
              />
            ))}
          </div>
        )}
        
        <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
          <a
            href="Produits2"
            className="font-Poppins font-medium text-lg tracking-wider"
          >
            Voir plus {">"}
          </a>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Produits1Page;
