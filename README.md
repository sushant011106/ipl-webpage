# IPL Live Website

A modern, realistic IPL (Indian Premier League) website with live standings, all teams, and player information.

## ✨ Features

### 1. **All 10 IPL Teams**
- Chennai Super Kings (CSK)
- Mumbai Indians (MI)
- Royal Challengers Bangalore (RCB)
- Kolkata Knight Riders (KKR)
- Delhi Capitals (DC)
- Rajasthan Royals (RR)
- Sunrisers Hyderabad (SRH)
- Lucknow Super Giants (LSG)
- Gujarat Titans (GT)
- Punjab Kings (PBKS)

### 2. **Live Team Standings**
- Real-time points table
- Auto-refresh every 30 seconds
- Manual refresh button
- Last updated timestamp
- Live indicator with pulse animation

### 3. **Complete Player Database**
- 9+ players per team
- Role and match statistics
- Filterable by team
- Beautiful player cards with team colors

### 4. **Interactive Features**
- View all players for each team in modal
- Smooth navigation between sections
- Responsive design (mobile, tablet, desktop)
- Live data connection

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Explore teams, players, and standings
3. Use the "Refresh Now" button for manual updates
4. Standings auto-refresh every 30 seconds

## 📡 Live Data Connection

### Current Setup
The website attempts to connect to cricket data APIs:
1. **Cricket Data API** - Primary source
2. **CricAPI** - Fallback source
3. **Cached Data** - Default fallback

### To Connect Real Live Data

#### Option 1: Using CricAPI (Recommended)
1. Sign up at: https://www.cricapi.com/
2. Get your free API key
3. Update `script.js` line 34:
```javascript
const response = await fetch(`https://api.cricapi.com/v1/matches?apikey=YOUR_API_KEY&filters=league_id:302&state=live`);
```

#### Option 2: Using Cricket Data API
1. Visit: https://cricketdata.org/
2. Get your API key
3. Update `script.js` line 28:
```javascript
const response = await fetch(`https://api.cricketdata.org/matches/?apikey=YOUR_API_KEY&offset=0`);
```

#### Option 3: Using ESPN Cricinfo Scraping
For production use with ESPN data:
```javascript
// Use a backend service to scrape ESPN
// This avoids CORS issues
```

## 🎨 Customization

### Change Team Colors
Edit `script.js` in the `teamsData` array:
```javascript
color: '#YOUR_COLOR',      // Primary color
bgColor: '#YOUR_BG_COLOR'  // Background color
```

### Update Standings Refresh Rate
Edit `script.js` initialization (change 30000 to milliseconds):
```javascript
setInterval(fetchLiveIPLData, 30000); // Change 30000 to your preferred interval
```

### Add More Players
Edit team player arrays in `teamsData`:
```javascript
{ name: 'Player Name', role: 'Batter', type: 'Batter', matches: 100 }
```

## 📱 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Q: Standings not updating?**
- A: Check browser console (F12) for API errors
- Ensure you have internet connection
- API might be down, try manual refresh

**Q: Live indicator not showing?**
- A: Check if CSS animations are enabled in browser settings
- Try different browser

**Q: CORS errors in console?**
- A: This is normal for direct API calls
- Consider using a backend proxy service
- Or contact the API provider for CORS support

## 📊 API Response Structure Expected

```json
{
  "data": [
    {
      "team1": "Team Name",
      "team2": "Team Name",
      "winner": "Team Name",
      "status": "Completed",
      "league": "IPL"
    }
  ]
}
```

## 🔄 Auto-Refresh Logic

The standings automatically:
1. Fetch live data every 30 seconds
2. Calculate wins/losses/points
3. Sort by points (highest first)
4. Update the table
5. Show last update time

## 📝 File Structure

```
ipl webpage/
├── index.html       # Main HTML structure
├── styles.css       # Complete styling and animations
├── script.js        # JavaScript logic and API calls
└── README.md        # This file
```

## 🎯 Future Enhancements

- [ ] Live match scores
- [ ] Match schedule and results
- [ ] Player statistics and records
- [ ] News and updates
- [ ] Dark mode theme
- [ ] Push notifications for matches
- [ ] User favorites/watchlist

## 📞 Support

For issues or suggestions:
1. Check browser console (F12) for errors
2. Verify API key is correct (if using real data)
3. Test with fallback cached data
4. Check internet connection

## 📄 License

This project is for educational purposes. IPL is property of BCCI (Board of Control for Cricket in India).

---

**Version**: 1.0
**Last Updated**: 2026
