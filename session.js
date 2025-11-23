// Session management for Nex$tep Finance

// Check if user is already logged in on page load
function checkUserSession() {
    const userData = localStorage.getItem('nexstep_user');
    if (userData) {
        const user = JSON.parse(userData);
        currentUser = user;
        updateUIForLoggedInUser(user);
    }
}

// Save user session to localStorage
function saveUserSession(user) {
    localStorage.setItem('nexstep_user', JSON.stringify(user));
}

// Clear user session
function clearUserSession() {
    localStorage.removeItem('nexstep_user');
    currentUser = null;
}

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('user-profile').classList.add('show');
    document.getElementById('username').textContent = user.name;
}

// Initialize session check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkUserSession();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        checkUserSession,
        saveUserSession,
        clearUserSession,
        updateUIForLoggedInUser
    };
}