// user.js
// user.js

// Mock user data (replace this with actual data or API calls)
export const saveUserData = (userData) => {
  // Simulate saving user data
  console.log("User data saved:", userData);
};
const mockUserData = {
  phone: '1234567890',
  password: 'password123',
};

// Function to validate user data
export const validateUser = (phone, password) => {
  // Simple validation logic
  return phone === mockUserData.phone && password === mockUserData.password;
};
