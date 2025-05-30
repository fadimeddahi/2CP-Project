import api from './axios';

export const productAPI = {
  // Get all products
  getAllProducts: () => api.get('/products'),
  
  // Get products by category
  getProductsByCategory: (category) => api.get(`/products?categorie=${category}`),
  
  // Get a specific product by ID
  getProductById: (id) => api.get(`/products/${id}`),
  
  // Search products by query
  searchProducts: (query) => api.get(`/products/search?q=${query}`),
  
  // Rate a product (user must be logged in)
  rateProduct: (productId, rating) => api.post(`/products/${productId}/rate`, { valeur: rating }),
  
  // Create a new product (admin only)
  createProduct: (productData) => {
    // Since you're using direct imageUrl, no need for FormData unless uploading files
    const payload = {
      nom: productData.nom,
      prix: productData.prix,
      description: productData.description,
      categorie: productData.categorie,
      stock: productData.stock || 0,
      imageUrl: productData.imageUrl // Direct Cloudinary URL
    };
    
    return api.post('/products', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  
  // Update an existing product (admin only)
  updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
  
  // Delete a product (admin only)
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

export default productAPI;