import api from './axios';

export const coachAPI = {
  // Get all coaches
  getAllCoaches: () => api.get('/users/coaches'),
  
  // Get a specific coach by ID
  getCoachById: (id) => api.get(`/users/coaches/${id}`),
  
  // Search coaches by name or specialty
  searchCoaches: (query) => api.get(`/users/coaches/search?q=${query}`),
  
  // Create a new coach (admin only)
  createCoach: (coachData) => {
    const formData = new FormData();
    
    // Add basic fields
    formData.append('firstName', coachData.firstName);
    formData.append('lastName', coachData.lastName);
    formData.append('email', coachData.email);
    formData.append('specialty', coachData.specialty);
    formData.append('address', coachData.address);
    formData.append('hourPrice', coachData.hourPrice || "0");
    
    // Add coach photo if available
    if (coachData.photo && coachData.photo instanceof File) {
      formData.append('photo', coachData.photo);
    }
    
    return api.post('/users/coaches', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  // Update an existing coach
  updateCoach: (id, coachData) => api.put(`/users/coaches/${id}`, coachData),
  
  // Delete a coach
  deleteCoach: (id) => api.delete(`/users/coaches/${id}`)
};

export default coachAPI;