export const API_BASE_URL = 'https://pmdapi.upayan.space';
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

function logApiUsage() {
  console.log('API_BASE_URL:', API_BASE_URL);
  console.log('DEFAULT_HEADERS:', DEFAULT_HEADERS);
}

// Log when the module is first loaded
logApiUsage();

// Function to test API accessibility
async function testApiAccessibility() {
  try {
    const response = await fetch(API_BASE_URL, { method: 'HEAD' });
    if (!response.ok) {
      console.error('API is inaccessible. Status:', response.status);
    } else {
      console.log('API is accessible.');
    }
  } catch (error) {
    console.error('Error accessing the API:', error);
  }
}

// Test API accessibility on module load
testApiAccessibility();

// Wrap the constants to log their usage
export function getApiBaseUrl() {
  console.log('getApiBaseUrl called');
  return API_BASE_URL;
}

export function getDefaultHeaders() {
  console.log('getDefaultHeaders called');
  return DEFAULT_HEADERS;
}
