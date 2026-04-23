// IPL Team Logos Database
// Official IPL team logos and branding

const teamLogos = {
    'CSK': {
        name: 'Chennai Super Kings',
        logo: 'https://via.placeholder.com/150x150/1a472a/FFD700?text=CSK',
        badge: '🏆',
        color: '#FFD700',
        bgColor: '#1a472a'
    },
    'MI': {
        name: 'Mumbai Indians',
        logo: 'https://via.placeholder.com/150x150/001a4d/0066FF?text=MI',
        badge: '🏅',
        color: '#0066FF',
        bgColor: '#001a4d'
    },
    'RCB': {
        name: 'Royal Challengers Bangalore',
        logo: 'https://via.placeholder.com/150x150/330000/FF0000?text=RCB',
        badge: '👑',
        color: '#FF0000',
        bgColor: '#330000'
    },
    'KKR': {
        name: 'Kolkata Knight Riders',
        logo: 'https://via.placeholder.com/150x150/330055/9900FF?text=KKR',
        badge: '🐯',
        color: '#9900FF',
        bgColor: '#330055'
    },
    'DC': {
        name: 'Delhi Capitals',
        logo: 'https://via.placeholder.com/150x150/003366/1E90FF?text=DC',
        badge: '⚔️',
        color: '#1E90FF',
        bgColor: '#003366'
    },
    'RR': {
        name: 'Rajasthan Royals',
        logo: 'https://via.placeholder.com/150x150/330022/FF69B4?text=RR',
        badge: '👸',
        color: '#FF69B4',
        bgColor: '#330022'
    },
    'SRH': {
        name: 'Sunrisers Hyderabad',
        logo: 'https://via.placeholder.com/150x150/330011/FF6600?text=SRH',
        badge: '🌅',
        color: '#FF6600',
        bgColor: '#330011'
    },
    'LSG': {
        name: 'Lucknow Super Giants',
        logo: 'https://via.placeholder.com/150x150/001a33/00B8E6?text=LSG',
        badge: '🦁',
        color: '#00B8E6',
        bgColor: '#001a33'
    },
    'GT': {
        name: 'Gujarat Titans',
        logo: 'https://via.placeholder.com/150x150/001a33/00A8E8?text=GT',
        badge: '🦬',
        color: '#00A8E8',
        bgColor: '#001a33'
    },
    'PBKS': {
        name: 'Punjab Kings',
        logo: 'https://via.placeholder.com/150x150/330000/CC0000?text=PBKS',
        badge: '👨‍🤴',
        color: '#CC0000',
        bgColor: '#330000'
    }
};

// Function to get team logo
function getTeamLogo(teamId) {
    return teamLogos[teamId] || {
        logo: 'https://via.placeholder.com/150x150/333/FFF?text=Logo',
        color: '#333',
        bgColor: '#FFF'
    };
}

// Real IPL Team Logos (from official sources)
// To use real logos, uncomment and replace with actual URLs:
/*
const realTeamLogos = {
    'CSK': {
        logo: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=150923245076647&height=50&width=50&ext=1234567890&hash=AeS6...',
        // Add real logo URLs from official sources
    },
    // ... more teams
};
*/

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { teamLogos, getTeamLogo };
}
