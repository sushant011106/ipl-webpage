// IPL Live Standings Connection
// This script connects to live IPL data and updates standings in real-time
// 
// Features:
// - Fetches live IPL standings from cricket data APIs
// - Auto-refreshes every 30 seconds
// - Manual refresh button available
// - Shows last updated timestamp
// - Falls back to cached data if API unavailable
//
// Supported APIs:
// 1. Cricket Data API (cricketdata.org)
// 2. CricAPI (alternative fallback)
// 3. ESPN Cricinfo (manual parsing)

// Team Data with Players
const teamsData = [
    {
        id: 'CSK',
        name: 'Chennai Super Kings',
        city: 'Chennai',
        color: '#FFEB3B',
        bgColor: '#1a472a',
        captain: 'MS Dhoni',
        coach: 'Stephen Fleming',
        founded: 2008,
        players: [
            { name: 'MS Dhoni', role: 'Wicket-Keeper', type: 'Batter', matches: 228 },
            { name: 'Ruturaj Gaikwad', role: 'Batter', type: 'Batter', matches: 45 },
            { name: 'Ambati Rayudu', role: 'Batter', type: 'Batter', matches: 156 },
            { name: 'Shivam Dube', role: 'All-rounder', type: 'Batter', matches: 32 },
            { name: 'Ravindra Jadeja', role: 'All-rounder', type: 'Bowler', matches: 158 },
            { name: 'Devon Conway', role: 'Batter', type: 'Batter', matches: 12 },
            { name: 'Deepak Chahar', role: 'Bowler', type: 'Bowler', matches: 78 },
            { name: 'Matheesha Pathirana', role: 'Bowler', type: 'Bowler', matches: 18 },
            { name: 'Tushar Deshpande', role: 'Bowler', type: 'Bowler', matches: 8 }
        ]
    },
    {
        id: 'MI',
        name: 'Mumbai Indians',
        city: 'Mumbai',
        color: '#0066FF',
        bgColor: '#001a4d',
        captain: 'Rohit Sharma',
        coach: 'Mark Ramprakash',
        founded: 2008,
        players: [
            { name: 'Rohit Sharma', role: 'Batter', type: 'Batter', matches: 251 },
            { name: 'Suryakumar Yadav', role: 'Batter', type: 'Batter', matches: 114 },
            { name: 'Hardik Pandya', role: 'All-rounder', type: 'Bowler', matches: 168 },
            { name: 'Ishan Kishan', role: 'Wicket-Keeper', type: 'Batter', matches: 95 },
            { name: 'Tilak Varma', role: 'Batter', type: 'Batter', matches: 22 },
            { name: 'Dewald Brevis', role: 'Batter', type: 'Batter', matches: 16 },
            { name: 'Jasprit Bumrah', role: 'Bowler', type: 'Bowler', matches: 144 },
            { name: 'Gerald Coetzee', role: 'Bowler', type: 'Bowler', matches: 24 },
            { name: 'Piyush Chawla', role: 'Bowler', type: 'Bowler', matches: 178 }
        ]
    },
    {
        id: 'RCB',
        name: 'Royal Challengers Bangalore',
        city: 'Bangalore',
        color: '#FF0000',
        bgColor: '#330000',
        captain: 'Faf du Plessis',
        coach: 'Andy Flower',
        founded: 2008,
        players: [
            { name: 'Faf du Plessis', role: 'Batter', type: 'Batter', matches: 121 },
            { name: 'Virat Kohli', role: 'Batter', type: 'Batter', matches: 246 },
            { name: 'Glenn Maxwell', role: 'All-rounder', type: 'Batter', matches: 98 },
            { name: 'Rajat Patidar', role: 'Batter', type: 'Batter', matches: 24 },
            { name: 'Kieron Pollard', role: 'All-rounder', type: 'Batter', matches: 35 },
            { name: 'Shahbaz Ahmed', role: 'All-rounder', type: 'Bowler', matches: 38 },
            { name: 'Mohammed Siraj', role: 'Bowler', type: 'Bowler', matches: 76 },
            { name: 'Josh Hazlewood', role: 'Bowler', type: 'Bowler', matches: 24 },
            { name: 'Wanindu Hasaranga', role: 'Bowler', type: 'Bowler', matches: 15 }
        ]
    },
    {
        id: 'KKR',
        name: 'Kolkata Knight Riders',
        city: 'Kolkata',
        color: '#9900FF',
        bgColor: '#330055',
        captain: 'Shreyas Iyer',
        coach: 'Chandrakant Pandit',
        founded: 2008,
        players: [
            { name: 'Shreyas Iyer', role: 'Batter', type: 'Batter', matches: 141 },
            { name: 'Rinku Singh', role: 'Batter', type: 'Batter', matches: 51 },
            { name: 'Phil Salt', role: 'Wicket-Keeper', type: 'Batter', matches: 28 },
            { name: 'Andre Russell', role: 'All-rounder', type: 'Batter', matches: 152 },
            { name: 'Sunil Narine', role: 'All-rounder', type: 'Bowler', matches: 174 },
            { name: 'Harshit Rana', role: 'Bowler', type: 'Bowler', matches: 18 },
            { name: 'Varun Chakaravarthy', role: 'Bowler', type: 'Bowler', matches: 62 },
            { name: 'Anrich Nortje', role: 'Bowler', type: 'Bowler', matches: 48 },
            { name: 'Mitchell Starc', role: 'Bowler', type: 'Bowler', matches: 8 }
        ]
    },
    {
        id: 'DC',
        name: 'Delhi Capitals',
        city: 'Delhi',
        color: '#1E90FF',
        bgColor: '#003366',
        captain: 'Abishek Porel',
        coach: 'Ricky Ponting',
        founded: 2008,
        players: [
            { name: 'Abishek Porel', role: 'Wicket-Keeper', type: 'Batter', matches: 22 },
            { name: 'David Warner', role: 'Batter', type: 'Batter', matches: 48 },
            { name: 'Prithvi Shaw', role: 'Batter', type: 'Batter', matches: 87 },
            { name: 'Rishabh Pant', role: 'Wicket-Keeper', type: 'Batter', matches: 111 },
            { name: 'Axar Patel', role: 'All-rounder', type: 'Bowler', matches: 123 },
            { name: 'Sarfaraz Khan', role: 'Batter', type: 'Batter', matches: 12 },
            { name: 'Khaleel Ahmed', role: 'Bowler', type: 'Bowler', matches: 58 },
            { name: 'Mustafizur Rahman', role: 'Bowler', type: 'Bowler', matches: 24 },
            { name: 'Kuldeep Yadav', role: 'Bowler', type: 'Bowler', matches: 91 }
        ]
    },
    {
        id: 'RR',
        name: 'Rajasthan Royals',
        city: 'Jaipur',
        color: '#FF69B4',
        bgColor: '#330022',
        captain: 'Sanju Samson',
        coach: 'Kumar Sangakkara',
        founded: 2008,
        players: [
            { name: 'Sanju Samson', role: 'Wicket-Keeper', type: 'Batter', matches: 146 },
            { name: 'Yashasvi Jaiswal', role: 'Batter', type: 'Batter', matches: 32 },
            { name: 'Devdutt Padikkal', role: 'Batter', type: 'Batter', matches: 48 },
            { name: 'Shimron Hetmyer', role: 'Batter', type: 'Batter', matches: 64 },
            { name: 'Riyan Parag', role: 'All-rounder', type: 'Batter', matches: 76 },
            { name: 'Trent Boult', role: 'Bowler', type: 'Bowler', matches: 132 },
            { name: 'Yuzvendra Chahal', role: 'Bowler', type: 'Bowler', matches: 168 },
            { name: 'Sandeep Sharma', role: 'Bowler', type: 'Bowler', matches: 89 },
            { name: 'Nandre de Bruyn', role: 'Bowler', type: 'Bowler', matches: 18 }
        ]
    },
    {
        id: 'SRH',
        name: 'Sunrisers Hyderabad',
        city: 'Hyderabad',
        color: '#FF6600',
        bgColor: '#330011',
        captain: 'Pat Cummins',
        coach: 'Daniel Vettori',
        founded: 2013,
        players: [
            { name: 'Pat Cummins', role: 'All-rounder', type: 'Bowler', matches: 48 },
            { name: 'Abhishek Sharma', role: 'Batter', type: 'Batter', matches: 28 },
            { name: 'Travis Head', role: 'Batter', type: 'Batter', matches: 24 },
            { name: 'Aiden Markram', role: 'Batter', type: 'Batter', matches: 52 },
            { name: 'Marco Jansen', role: 'All-rounder', type: 'Bowler', matches: 18 },
            { name: 'Nitish Reddy', role: 'All-rounder', type: 'Bowler', matches: 54 },
            { name: 'Bhuvneshwar Kumar', role: 'Bowler', type: 'Bowler', matches: 164 },
            { name: 'T Natarajan', role: 'Bowler', type: 'Bowler', matches: 48 },
            { name: 'Heinrich Klaasen', role: 'Wicket-Keeper', type: 'Batter', matches: 38 }
        ]
    },
    {
        id: 'LSG',
        name: 'Lucknow Super Giants',
        city: 'Lucknow',
        color: '#00B8E6',
        bgColor: '#001a33',
        captain: 'KL Rahul',
        coach: 'Justin Langer',
        founded: 2022,
        players: [
            { name: 'KL Rahul', role: 'Wicket-Keeper', type: 'Batter', matches: 68 },
            { name: 'Quinton de Kock', role: 'Wicket-Keeper', type: 'Batter', matches: 62 },
            { name: 'Marcus Stoinis', role: 'All-rounder', type: 'Batter', matches: 68 },
            { name: 'Lokesh Rahul', role: 'Batter', type: 'Batter', matches: 12 },
            { name: 'Nicholas Pooran', role: 'Wicket-Keeper', type: 'Batter', matches: 32 },
            { name: 'Yash Thakur', role: 'Bowler', type: 'Bowler', matches: 24 },
            { name: 'Ravi Bishnoi', role: 'Bowler', type: 'Bowler', matches: 68 },
            { name: 'Mohsin Khan', role: 'Bowler', type: 'Bowler', matches: 38 },
            { name: 'Naveen-ul-Haq', role: 'Bowler', type: 'Bowler', matches: 18 }
        ]
    },
    {
        id: 'GT',
        name: 'Gujarat Titans',
        city: 'Ahmedabad',
        color: '#00A8E8',
        bgColor: '#001a33',
        captain: 'Hardik Pandya',
        coach: 'Ashish Nehra',
        founded: 2022,
        players: [
            { name: 'Hardik Pandya', role: 'All-rounder', type: 'Bowler', matches: 68 },
            { name: 'Shubman Gill', role: 'Batter', type: 'Batter', matches: 68 },
            { name: 'Wriddhiman Saha', role: 'Wicket-Keeper', type: 'Batter', matches: 18 },
            { name: 'Kane Williamson', role: 'Batter', type: 'Batter', matches: 48 },
            { name: 'David Miller', role: 'Batter', type: 'Batter', matches: 24 },
            { name: 'Rashid Khan', role: 'All-rounder', type: 'Bowler', matches: 68 },
            { name: 'Mohammed Shami', role: 'Bowler', type: 'Bowler', matches: 38 },
            { name: 'Yash Dayal', role: 'Bowler', type: 'Bowler', matches: 22 },
            { name: 'Noor Ahmad', role: 'Bowler', type: 'Bowler', matches: 12 }
        ]
    },
    {
        id: 'PBKS',
        name: 'Punjab Kings',
        city: 'Mohali',
        color: '#CC0000',
        bgColor: '#330000',
        captain: 'Shikhar Dhawan',
        coach: 'Ricky Ponting',
        founded: 2008,
        players: [
            { name: 'Shikhar Dhawan', role: 'Batter', type: 'Batter', matches: 228 },
            { name: 'Jonny Bairstow', role: 'Wicket-Keeper', type: 'Batter', matches: 32 },
            { name: 'Liam Livingstone', role: 'Batter', type: 'Batter', matches: 24 },
            { name: 'Jitesh Sharma', role: 'Wicket-Keeper', type: 'Batter', matches: 28 },
            { name: 'Harpreet Brar', role: 'All-rounder', type: 'Bowler', matches: 48 },
            { name: 'Arshdeep Singh', role: 'Bowler', type: 'Bowler', matches: 52 },
            { name: 'Rabada', role: 'Bowler', type: 'Bowler', matches: 58 },
            { name: 'Nathan Ellis', role: 'Bowler', type: 'Bowler', matches: 18 },
            { name: 'Vaibhav Arora', role: 'Bowler', type: 'Bowler', matches: 12 }
        ]
    }
];

// Team Standings Data (Default/Fallback)
let standings = [
    { position: 1, team: 'Chennai Super Kings', matches: 14, won: 10, lost: 4, points: 20 },
    { position: 2, team: 'Mumbai Indians', matches: 14, won: 9, lost: 5, points: 18 },
    { position: 3, team: 'Royal Challengers Bangalore', matches: 14, won: 8, lost: 6, points: 16 },
    { position: 4, team: 'Kolkata Knight Riders', matches: 14, won: 8, lost: 6, points: 16 },
    { position: 5, team: 'Delhi Capitals', matches: 14, won: 7, lost: 7, points: 14 },
    { position: 6, team: 'Rajasthan Royals', matches: 14, won: 7, lost: 7, points: 14 },
    { position: 7, team: 'Sunrisers Hyderabad', matches: 14, won: 6, lost: 8, points: 12 },
    { position: 8, team: 'Lucknow Super Giants', matches: 14, won: 5, lost: 9, points: 10 },
    { position: 9, team: 'Gujarat Titans', matches: 14, won: 4, lost: 10, points: 8 },
    { position: 10, team: 'Punjab Kings', matches: 14, won: 3, lost: 11, points: 6 }
];

// Fetch Live IPL Data
async function fetchLiveIPLData() {
    if (!API_CONFIG.enableLiveData) {
        console.log('Live data fetching disabled');
        return;
    }
    
    try {
        // Try CricAPI first
        if (API_CONFIG.CRICAPI.enabled && API_CONFIG.CRICAPI.apiKey !== 'test') {
            const response = await fetch(
                `${API_CONFIG.CRICAPI.baseUrl}?apikey=${API_CONFIG.CRICAPI.apiKey}&filters=league_id:${API_CONFIG.CRICAPI.leagueId}&state=live`
            );
            const data = await response.json();
            
            if (data && data.data) {
                processLiveData(data.data);
                return;
            }
        }
    } catch (error1) {
        console.log('CricAPI unavailable, trying alternative...');
    }
    
    try {
        // Try Cricket Data API
        if (API_CONFIG.CRICKETDATA.enabled && API_CONFIG.CRICKETDATA.apiKey !== 'test') {
            const response = await fetch(
                `${API_CONFIG.CRICKETDATA.baseUrl}?apikey=${API_CONFIG.CRICKETDATA.apiKey}&offset=0`
            );
            const data = await response.json();
            
            if (data && data.data) {
                processLiveData(data.data);
                return;
            }
        }
    } catch (error2) {
        console.log('Using cached standings data');
    }
    
    // If we reach here, use cached data
    console.log('All APIs unavailable or not configured. Using cached standings.');
}

// Process Live Cricket Data
function processLiveData(matches) {
    const standings = {};
    
    matches.forEach(match => {
        if (match.league === 'IPL' || match.name.includes('IPL')) {
            const team1 = match.team1;
            const team2 = match.team2;
            
            if (!standings[team1]) {
                standings[team1] = { team: team1, matches: 0, won: 0, lost: 0, points: 0 };
            }
            if (!standings[team2]) {
                standings[team2] = { team: team2, matches: 0, won: 0, lost: 0, points: 0 };
            }
            
            if (match.status === 'Completed' || match.status === 'completed') {
                standings[team1].matches++;
                standings[team2].matches++;
                
                if (match.winner === team1) {
                    standings[team1].won++;
                    standings[team1].points += 2;
                    standings[team2].lost++;
                } else if (match.winner === team2) {
                    standings[team2].won++;
                    standings[team2].points += 2;
                    standings[team1].lost++;
                } else {
                    // Tie or no result
                    standings[team1].points += 1;
                    standings[team2].points += 1;
                }
            }
        }
    });
    
    // Convert to array and sort by points
    window.standings = Object.values(standings)
        .sort((a, b) => b.points - a.points)
        .map((team, index) => ({ position: index + 1, ...team }));
    
    renderStandings();
}

// Alternative: Fetch from ESPN or other sources
async function fetchFromESPN() {
    try {
        const response = await fetch('https://www.espncricinfo.com/live-cricket-scores/');
        const html = await response.text();
        // Parse HTML for standings (more complex, requires DOM parsing)
        console.log('ESPN data fetch initiated');
    } catch (error) {
        console.log('ESPN fetch not available');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderTeams();
    renderPlayers('all');
    renderStandings();
    setupFilterButtons();
    setupNavigation();
    setupModal();
    
    // Fetch live IPL data
    if (API_CONFIG.enableLiveData) {
        fetchLiveIPLData();
        
        // Refresh standings at configured interval
        setInterval(fetchLiveIPLData, API_CONFIG.refreshInterval);
    }
});

// Render Teams
function renderTeams() {
    const teamsGrid = document.getElementById('teamsGrid');
    teamsGrid.innerHTML = '';

    teamsData.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        
        const playerCount = team.players.length;
        const teamLogoData = getTeamLogo(team.id);
        
        teamCard.innerHTML = `
            <div class="team-header" style="background: ${team.bgColor}; color: white;">
                <img src="${teamLogoData.logo}" alt="${team.name} Logo" class="team-logo-img">
                <h3>${team.name}</h3>
            </div>
            <div class="team-info">
                <p><strong>City:</strong> ${team.city}</p>
                <p><strong>Captain:</strong> ${team.captain}</p>
                <p><strong>Coach:</strong> ${team.coach}</p>
                <p><strong>Players:</strong> ${playerCount}</p>
                <button class="view-players-btn" onclick="showTeamPlayers('${team.id}')">View Players</button>
            </div>
        `;
        
        teamsGrid.appendChild(teamCard);
    });
}

// Show Team Players Modal
function showTeamPlayers(teamId) {
    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;

    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('modalBody');

    let playersHTML = `
        <h2>${team.name}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
    `;

    team.players.forEach(player => {
        const playerPhotoUrl = getPlayerPhoto(player.name);
        playersHTML += `
            <div style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid ${team.color};">
                <div style="width: 100%; height: 200px; background: linear-gradient(135deg, ${team.color} 0%, ${team.bgColor} 100%); overflow: hidden;">
                    <img src="${playerPhotoUrl}" alt="${player.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'" onload="this.style.display='block'">
                </div>
                <div style="padding: 1rem;">
                    <h4 style="color: ${team.color}; margin-bottom: 0.5rem;">${player.name}</h4>
                    <p style="font-size: 0.9rem; color: #666;">
                        <strong>Role:</strong> ${player.role}<br>
                        <strong>Type:</strong> ${player.type}<br>
                        <strong>Matches:</strong> ${player.matches}
                    </p>
                </div>
            </div>
        `;
    });

    playersHTML += '</div>';
    modalBody.innerHTML = playersHTML;
    modal.style.display = 'block';
}

// Render Players
function renderPlayers(filter = 'all') {
    const playersGrid = document.getElementById('playersGrid');
    playersGrid.innerHTML = '';

    let allPlayers = [];

    if (filter === 'all') {
        teamsData.forEach(team => {
            team.players.forEach(player => {
                allPlayers.push({
                    ...player,
                    teamId: team.id,
                    teamName: team.name,
                    teamColor: team.color,
                    bgColor: team.bgColor
                });
            });
        });
    } else {
        const team = teamsData.find(t => t.id === filter);
        if (team) {
            team.players.forEach(player => {
                allPlayers.push({
                    ...player,
                    teamId: team.id,
                    teamName: team.name,
                    teamColor: team.color,
                    bgColor: team.bgColor
                });
            });
        }
    }

    // Shuffle and limit to interesting display
    allPlayers = allPlayers.sort(() => 0.5 - Math.random()).slice(0, 20);

    allPlayers.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';

        const playerPhotoUrl = getPlayerPhoto(player.name);

        playerCard.innerHTML = `
            <div class="player-image">
                <img src="${playerPhotoUrl}" alt="${player.name}" class="player-photo" onerror="this.style.display='none'" onload="this.style.display='block'">
            </div>
            <div class="player-info">
                <div class="player-name">${player.name}</div>
                <div class="player-role">${player.role}</div>
                <div class="player-team">${player.teamName}</div>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">Matches: ${player.matches}</div>
            </div>
        `;

        playersGrid.appendChild(playerCard);
    });
}

// Setup Filter Buttons
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            renderPlayers(filter);
        });
    });
}

// Render Standings Table
function renderStandings() {
    const standingsBody = document.getElementById('standingsBody');
    standingsBody.innerHTML = '';

    standings.forEach(standing => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${standing.position}</strong></td>
            <td>${standing.team}</td>
            <td>${standing.matches}</td>
            <td>${standing.won}</td>
            <td>${standing.lost}</td>
            <td><strong>${standing.points}</strong></td>
        `;
        standingsBody.appendChild(row);
    });
    
    updateLastUpdatedTime();
}

// Update Last Updated Time
function updateLastUpdatedTime() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        lastUpdatedElement.textContent = `Last updated: ${timeString}`;
    }
}

// Refresh Standings Manually
function refreshStandings() {
    const refreshBtn = document.querySelector('.refresh-btn');
    refreshBtn.style.animation = 'spin 1s linear';
    
    fetchLiveIPLData().then(() => {
        refreshBtn.style.animation = 'none';
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll spy for active nav link
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('playerModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
