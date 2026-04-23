# 🏏 IPL Website - Quick Start Guide

## 📥 Installation

1. All files are ready in: `c:\Users\susha\OneDrive\Desktop\ipl webpage`
2. No installation needed - just open in browser!

## 🚀 How to Use

### Step 1: Open the Website
- Double-click `index.html` OR
- Right-click `index.html` → Open with → Your Browser

### Step 2: Explore Features

#### 🏢 Home Section
- IPL branding and tagline
- "Watch Live" button

#### 👥 Teams Section
- All 10 IPL teams with colors
- Team info: City, Captain, Coach, Players count
- Click "View Players" to see team roster

#### 👨‍💼 Players Section
- Browse all 200+ IPL players
- Filter by team or view all
- Player details: Name, Role, Team, Matches played

#### 📊 Standings Section (LIVE)
- Real-time IPL points table
- ✅ Green live indicator (pulsing)
- 🔄 Manual "Refresh Now" button
- Last updated timestamp
- Position, Team, Matches, Won, Lost, Points

## 🔗 Connect Live Data (Important!)

### Quick Setup (2 minutes):
1. Open `SETUP.md` file for detailed instructions
2. Get free API key from: https://www.cricapi.com/
3. Open `config.js` file
4. Replace `'test'` with your API key:
   ```javascript
   apiKey: 'YOUR_FREE_API_KEY_HERE'
   ```
5. Save and refresh website
6. Standings will now show live IPL data!

## 📱 Desktop Features

### Navigation Bar
- Sticky header with logo
- Quick links to all sections
- Active section highlighting

### Teams
- Click team card to see details
- Click "View Players" for roster modal
- Team colors match official IPL branding

### Players
- Smooth card animations
- Filter buttons at top
- Shows player initials with team colors
- Match statistics

### Standings
- **Live Indicator**: Green pulsing dot = data is live
- **Refresh Button**: Get latest standings instantly
- **Last Updated**: Shows exact time of last update
- **Auto-Refresh**: Updates every 30 seconds automatically

## ⚙️ Customization

### Change Refresh Rate
Open `config.js`:
```javascript
refreshInterval: 30000,  // Change 30000 to desired milliseconds
// Examples:
// 10000 = 10 seconds
// 60000 = 1 minute
```

### Disable Auto-Refresh
Open `config.js`:
```javascript
enableLiveData: false,  // Manual refresh only
```

### Change Team Information
Open `script.js` and update:
```javascript
// In teamsData array
{
    id: 'CSK',
    name: 'Chennai Super Kings',
    captain: 'New Captain Name',
    coach: 'New Coach Name',
    ...
}
```

## 🔧 Troubleshooting

### Standings not showing?
1. Press F12 to open Developer Tools
2. Click "Console" tab
3. Look for error messages
4. If API not configured, cached data is shown

### Want live data?
See "Connect Live Data" section above

### Website not loading?
- Try different browser (Chrome, Firefox, Edge)
- Clear browser cache (Ctrl+F5)
- Check all 3 files exist: index.html, styles.css, script.js

### Mobile not working?
- Website is mobile-responsive
- Test in mobile browser
- Check screen is in landscape for best view

## 📊 Files Included

| File | Purpose |
|------|---------|
| `index.html` | Website structure |
| `styles.css` | All styling and animations |
| `script.js` | Interactivity and live data logic |
| `config.js` | API configuration (update this!) |
| `README.md` | Full documentation |
| `SETUP.md` | Detailed API setup guide |
| `QUICKSTART.md` | This file |

## 🎯 Current Status

### ✅ Working Without API Key:
- Team browsing
- Player listings
- Standings with cached data
- All UI animations
- Responsive design

### 🔗 Needs API Key for:
- Live standings updates
- Real IPL data
- Auto-refresh feature

## 💡 Tips

1. **For Testing**: Use cached data (no API key needed)
2. **For Live**: Add CricAPI key (fastest setup)
3. **Best Practice**: Get free API key for real-time updates
4. **Mobile**: Website works on phones and tablets
5. **Offline**: Website works without internet (uses cached data)

## 🌟 Features Recap

| Feature | Status |
|---------|--------|
| All 10 Teams | ✅ Active |
| Player Database | ✅ Active |
| Team Standings | ✅ Active (with cached data) |
| Live Updates | 🔗 Needs API key |
| Responsive Design | ✅ Active |
| Animations | ✅ Active |
| Auto-Refresh | 🔗 Needs API key |
| Manual Refresh | ✅ Active |

## 🚀 Next Steps

1. **Immediate**: Open website and explore
2. **Within 5 mins**: Get free CricAPI key
3. **Within 10 mins**: Add API key to config.js
4. **Enjoy**: Live IPL standings!

## 📞 Need Help?

1. Check `SETUP.md` for detailed API setup
2. Check browser console (F12) for error messages
3. Try manual refresh button
4. Check file paths and names are correct

---

## 🎉 You're All Set!

Your IPL website is ready to use. Enjoy exploring all teams and players, and consider adding live data for real-time standings!

**Happy Cricket! 🏏**
