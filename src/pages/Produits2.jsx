import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProduitCard from "../components/ProduitCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import productAPI from "../api/productsAPI";

// Import fallback images only for when API fails
import product1Image from "/images/product-1.png";
import product2Image from "/images/product-2.png";
import product3Image from "/images/product-3.png";
import product4Image from "/images/product-4.png";
import product5Image from "/images/product-5.png";
import product6Image from "/images/product-6.png";

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
  {
    id: 'product2',
    productName: "PROTEIN",
    productImage: product2Image,
    producRate: "4.8",
    productPrice: "24.99",
    productDescription: "protein jar mockup",
  },
  {
    id: 'product3',
    productName: "Metallic PROTEIN",
    productImage: product3Image,
    producRate: "4.8",
    productPrice: "34.99",
    productDescription: "Metallic protein jar mockup",
  },
  {
    id: 'product4',
    productName: "ONE",
    productImage: product4Image,
    producRate: "4.8",
    productPrice: "19.99",
    productDescription: "ONE Performance nutrition",
  },
  {
    id: 'product5',
    productName: "Power Greens",
    productImage: product5Image,
    producRate: "4.8",
    productPrice: "39.99",
    productDescription: "ONE Performance nutrition p",
  },
  {
    id: 'product6',
    productName: "OWYN",
    productImage: product6Image,
    producRate: "4.8",
    productPrice: "22.99",
    productDescription: "Only what you need ",
  },
];

function Produits2Page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div>
      <Header isConnected={true}></Header>
      <section className="mt-20">
        <h2 className="heading-2 text-center max-w-[1060px] mx-auto">
          COMPLÉMENTS ALIMENTAIRES
        </h2>
      </section>
      <section className="max-w-[1264px] mt-25 mx-auto">
        {error && (
          <div className="text-center text-yellow-400 mb-4 p-4 bg-yellow-400/10 rounded-lg">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
            {products.map((product, index) => (
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
        
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
          <Link to="/produits1">
            <ChevronLeft
              width={41}
              height={105}
              color="white"
              stroke="white"
            />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Produits2Page;
