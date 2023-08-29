//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Apply user preferences from cookies or defaults
function applyUserPreferences() {
  const fontSizeCookie = getCookie('fontsize');
  const fontColorCookie = getCookie('fontcolor');

  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  document.documentElement.style.setProperty('--fontsize', fontSizeCookie || '16px');
  document.documentElement.style.setProperty('--fontcolor', fontColorCookie || '#000000');

  fontSizeInput.value = fontSizeCookie || '16';
  fontColorInput.value = fontColorCookie || '#000000';
}

// Handle form submission
document.getElementById('preferences-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const fontSizeValue = document.getElementById('fontsize').value;
  const fontColorValue = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSizeValue, 30); // Store for 30 days
  setCookie('fontcolor', fontColorValue, 30);

  applyUserPreferences();
});

// Apply user preferences on page load
applyUserPreferences();
