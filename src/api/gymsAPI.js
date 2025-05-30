import api from './axios';

export const gymAPI = {
  // Get all gyms
  getAllGyms: () => api.get('/gyms'),
  
  // Get gyms by location
  getGymsByLocation: (ville) => api.get(`/gyms?ville=${ville}`),
  
  // Get a specific gym by ID
  getGymById: (id) => api.get(`/gyms/${id}`),
  
  // Search gyms by query
  searchGyms: (query) => api.get(`/gyms/search?q=${query}`),
  
  // New methods
  createGym: (gymData) => {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('nom', gymData.nom);
    formData.append('description', gymData.description);
    
    // Add equipements (services)
    if (gymData.equipements && Array.isArray(gymData.equipements)) {
      gymData.equipements.forEach(eq => formData.append('equipements', eq));
    }
    
    // Add location data
    if (gymData.localisation) {
      formData.append('localisation[pays]', gymData.localisation.pays || 'Algerie');
      formData.append('localisation[ville]', gymData.localisation.ville);
      formData.append('localisation[adresse]', gymData.localisation.adresse);
      if (gymData.localisation.coordinates) {
        formData.append('localisation[coordinates]', JSON.stringify(gymData.localisation.coordinates));
      }
    }
    
    // Add images if provided
    if (gymData.images && Array.isArray(gymData.images)) {
      gymData.images.forEach((img, index) => {
        if (img instanceof File) {
          formData.append(`images`, img);
        }
      });
    }
    
    return api.post('/gyms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  updateGym: (id, gymData) => api.put(`/gyms/${id}`, gymData),
  
  deleteGym: (id) => api.delete(`/gyms/${id}`),
};

export default gymAPI;