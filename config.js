// API Configuration
// Update your API keys here to connect to live IPL data

const API_CONFIG = {
    // CricAPI Configuration
    CRICAPI: {
        enabled: true,
        apiKey: 'test', // Get free key from https://www.cricapi.com/
        baseUrl: 'https://api.cricapi.com/v1/matches',
        leagueId: '302' // IPL League ID
    },
    
    // Cricket Data API Configuration
    CRICKETDATA: {
        enabled: true,
        apiKey: 'test', // Get key from https://cricketdata.org/
        baseUrl: 'https://api.cricketdata.org/matches/'
    },
    
    // Refresh interval (in milliseconds)
    refreshInterval: 30000, // 30 seconds
    
    // Enable/Disable live data fetching
    enableLiveData: true
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}
