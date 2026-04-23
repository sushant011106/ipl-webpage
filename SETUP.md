# 🔗 Live IPL Connection Setup Guide

This guide explains how to connect your IPL website to live IPL data sources.

## 📡 Available Data Sources

### 1. **CricAPI** (Recommended - Easiest)
**Status**: Free tier available
**Update Frequency**: Real-time
**Documentation**: https://www.cricapi.com/

#### Setup Steps:
1. Visit https://www.cricapi.com/
2. Click "Get Free API Key"
3. Sign up with your email
4. Verify your email
5. Copy your API key
6. Open `config.js` in your text editor
7. Replace `'test'` with your API key:
   ```javascript
   CRICAPI: {
       enabled: true,
       apiKey: 'YOUR_API_KEY_HERE', // Replace 'test' with your key
       baseUrl: 'https://api.cricapi.com/v1/matches',
       leagueId: '302' // IPL League ID
   }
   ```
8. Save the file
9. Refresh your website - standings should now update live!

### 2. **Cricket Data API**
**Status**: Paid/API required
**Documentation**: https://cricketdata.org/

#### Setup Steps:
1. Visit https://cricketdata.org/
2. Sign up for an account
3. Get your API key from dashboard
4. Open `config.js`
5. Update:
   ```javascript
   CRICKETDATA: {
       enabled: true,
       apiKey: 'YOUR_API_KEY_HERE',
       baseUrl: 'https://api.cricketdata.org/matches/'
   }
   ```
6. Save and refresh your website

### 3. **ESPN Cricinfo** (Web Scraping)
**Status**: More complex, requires backend
**Note**: For production use only

If you want to use ESPN Cricinfo data, you'll need a backend service to scrape it and avoid CORS issues.

---

## ⚙️ Configuration Options

### File: `config.js`

```javascript
const API_CONFIG = {
    // Enable/Disable live data fetching
    enableLiveData: true,  // Set to false to use only cached data
    
    // Refresh interval in milliseconds
    refreshInterval: 30000,  // 30 seconds (change as needed)
    
    // CricAPI Configuration
    CRICAPI: {
        enabled: true,      // Set to false to skip this API
        apiKey: 'test',     // Replace with your key
        baseUrl: 'https://api.cricapi.com/v1/matches',
        leagueId: '302'     // IPL League ID
    },
    
    // Cricket Data API Configuration
    CRICKETDATA: {
        enabled: true,      // Set to false to skip this API
        apiKey: 'test',     // Replace with your key
        baseUrl: 'https://api.cricketdata.org/matches/'
    }
};
```

### Customization Examples:

**Example 1: Update every 10 seconds**
```javascript
refreshInterval: 10000,  // 10 seconds
```

**Example 2: Disable auto-refresh (manual only)**
```javascript
enableLiveData: false,  // Use cached data only
```

**Example 3: Use only CricAPI**
```javascript
CRICKETDATA: {
    enabled: false,  // Disabled
    ...
}
```

---

## 🧪 Testing Your Setup

1. **Check Browser Console:**
   - Press `F12` to open Developer Tools
   - Go to "Console" tab
   - Refresh the page
   - Look for messages about API connections

2. **Verify Data Updates:**
   - Click "Refresh Now" button
   - Check if "Last updated" timestamp changes
   - Watch for live indicator pulsing

3. **Check Network Activity:**
   - Open Developer Tools → "Network" tab
   - Click "Refresh Now"
   - Look for API requests to CricAPI or CricketData
   - Check if responses return valid data

---

## 🔴 Troubleshooting

### Problem: Standings not updating
**Solution:**
1. Check your API key in `config.js`
2. Verify API key is enabled in your API provider account
3. Check browser console (F12) for error messages
4. Try the "Refresh Now" button manually

### Problem: "enableLiveData" is not defined
**Solution:**
1. Make sure `config.js` is loaded BEFORE `script.js`
2. Check HTML file has: `<script src="config.js"></script>` before `<script src="script.js"></script>`
3. Hard refresh page (Ctrl+F5)

### Problem: CORS Error in Console
**Solution:**
- This is normal for direct API calls from browser
- Some APIs don't support browser requests
- Options:
  - Use a CORS proxy
  - Use backend service to fetch data
  - Contact API provider for CORS support

### Problem: API Key Rate Limited
**Solution:**
- Reduce refresh frequency: `refreshInterval: 60000` (1 minute)
- Use paid tier of API
- Implement local caching

---

## 📊 What Data is Displayed

The website calculates standings from match data:
- **Matches**: Total matches played
- **Won**: Matches won
- **Lost**: Matches lost  
- **Points**: 2 points per win, 1 for tie/no result

---

## 🔐 Security Notes

- Never commit your API key to public repositories
- Consider API rate limits for your tier
- For production: use backend proxy service
- Keep API keys private

---

## 📱 For Development vs Production

### Development:
- Use free tier CricAPI key
- Refresh less frequently (avoid rate limits)
- Set `enableLiveData: true` for testing

### Production:
- Use paid API tier
- Implement caching layer
- Set up backend proxy for reliability
- Monitor API usage

---

## ✅ Verification Checklist

- [ ] API key obtained from provider
- [ ] API key added to `config.js`
- [ ] Website refreshes data automatically
- [ ] "Last updated" timestamp changes
- [ ] Live indicator is pulsing
- [ ] Manual refresh button works
- [ ] No errors in browser console (F12)
- [ ] Standings data is displayed correctly

---

## 📞 API Provider Support

**CricAPI Support**: https://www.cricapi.com/help
**Cricket Data API Support**: https://cricketdata.org/support

---

## 🎯 Next Steps

1. Get your free CricAPI key (fastest option)
2. Update `config.js` with your key
3. Test the live connection
4. Customize refresh interval as needed
5. Deploy to your server

---

**Happy Coding! 🚀**
