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
    const formData = new FormData();
    
    // Add basic product data
    formData.append('nom', productData.nom);
    formData.append('prix', productData.prix);
    formData.append('description', productData.description);
    formData.append('categorie', productData.categorie);
    formData.append('stock', productData.stock || 0);
    
    // Add product image if available
    if (productData.image && productData.image instanceof File) {
      formData.append('image', productData.image);
    }
    
    return api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  // Update an existing product (admin only)
  updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
  
  // Delete a product (admin only)
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

export default productAPI;