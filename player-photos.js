// Player Photos Database
// This file stores photo URLs for all IPL players
// Update URLs to add real player photos from:
// - Official IPL website
// - Getty Images
// - Wikipedia
// - ESPNcricinfo

const playerPhotos = {
    // Chennai Super Kings Players
    'MS Dhoni': 'https://wallpapers.com/images/hd/ms-dhoni-hd-red-mz2zm0u2wro5f9mw.jpg',
    'Ruturaj Gaikwad': 'https://wa',
    'Ambati Rayudu': 'https://wallpapers.com/images/hd/ambati-rayudu-hd-1920x1080.jpg',
    'Shivam Dube': 'https://wallpapers.com/images/hd/shivam-dube-hd-1920x1080.jpg',
    'Ravindra Jadeja': 'https://wallpapers.com/images/hd/ravindra-jadeja-hd-1920x1080.jpg',
    'Devon Conway': 'https://wallpapers.com/images/hd/devon-conway-hd-1920x1080.jpg',
    'Deepak Chahar': 'https://wallpapers.com/images/hd/deepak-chahar-hd-1920x1080.jpg',
    'Matheesha Pathirana': 'https://wallpapers.com/images/hd/matheesha-pathirana-hd-1920x1080.jpg',
    'Tushar Deshpande': 'https://wallpapers.com/images/hd/tushar-deshpande-hd-1920x1080.jpg ',

    // Mumbai Indians Players
    'Rohit Sharma': 'https://wallpapers.com/images/hd/rohit-sharma-hd-1920x1080.jpg',
    'Suryakumar Yadav': 'https://wallpapers.com/images/hd/suryakumar-yadav-hd-1920x1080.jpg',
    'Hardik Pandya': 'https://wallpapers.com/images/hd/hardik-pandya-hd-1920x1080.jpg',
    'Ishan Kishan': 'https://wallpapers.com/images/hd/ishan-kishan-hd-1920x1080.jpg',
    'Tilak Varma': 'https://wallpapers.com/images/hd/tilak-varma-hd-1920x1080.jpg',
    'Dewald Brevis': 'https://wallpapers.com/images/hd/dewald-brevis-hd-1920x1080.jpg',
    'Jasprit Bumrah': 'https://wallpapers.com/images/hd/jasprit-bumrah-hd-1920x1080.jpg',
    'Gerald Coetzee': 'https://wallpapers.com/images/hd/gerald-coetzee-hd-1920x1080.jpg',
    'Piyush Chawla': 'https://wallpapers.com/images/hd/piyush-chawla-hd-1920x1080.jpg',

    // Royal Challengers Bangalore Players
    'Faf du Plessis': 'https://wallpapers.com/images/hd/faf-du-plessis-hd-1920x1080.jpg',
    'Virat Kohli': 'https://wallpapers.com/images/hd/virat-kohli-hd-1920x1080.jpg',
    'Glenn Maxwell': 'https://wallpapers.com/images/hd/glenn-maxwell-hd-1920x1080.jpg',
    'Rajat Patidar': 'https://wallpapers.com/images/hd/rajat-patidar-hd-1920x1080.jpg',
    'Kieron Pollard': 'https://wallpapers.com/images/hd/kieron-pollard-hd-1920x1080.jpg',
    'Shahbaz Ahmed': 'https://wallpapers.com/images/hd/shahbaz-ahmed-hd-1920x1080.jpg',
    'Mohammed Siraj': 'https://wallpapers.com/images/hd/mohammed-siraj-hd-1920x1080.jpg',
    'Josh Hazlewood': 'https://wallpapers.com/images/hd/josh-hazlewood-hd-1920x1080.jpg',
    'Wanindu Hasaranga': 'https://wallpapers.com/images/hd/wanindu-hasaranga-hd-1920x1080.jpg',

    // Kolkata Knight Riders Players
    'Shreyas Iyer': 'https://wallpapers.com/images/hd/shreyas-iyer-hd-1920x1080.jpg',
    'Rinku Singh': 'https://wallpapers.com/images/hd/rinku-singh-hd-1920x1080.jpg',
    'Phil Salt': 'https://wallpapers.com/images/hd/phil-salt-hd-1920x1080.jpg',
    'Andre Russell': 'https://wallpapers.com/images/hd/andre-russell-hd-1920x1080.jpg',
    'Sunil Narine': 'https://wallpapers.com/images/hd/sunil-narine-hd-1920x1080.jpg',
    'Harshit Rana': 'https://wallpapers.com/images/hd/harshit-rana-hd-1920x1080.jpg',
    'Varun Chakaravarthy': 'https://wallpapers.com/images/hd/varun-chakaravarthy-hd-1920x1080.jpg',
    'Anrich Nortje': 'https://wallpapers.com/images/hd/anrich-nortje-hd-1920x1080.jpg',
    'Mitchell Starc': 'https://wallpapers.com/images/hd/mitchell-starc-hd-1920x1080.jpg',

    // Delhi Capitals Players
    'Abishek Porel': 'https://wallpapers.com/images/hd/abishek-porel-hd-1920x1080.jpg',
    'David Warner': 'https://wallpapers.com/images/hd/david-warner-hd-1920x1080.jpg',
    'Prithvi Shaw': 'https://wallpapers.com/images/hd/prithvi-shaw-hd-1920x1080.jpg',
    'Rishabh Pant': 'https://wallpapers.com/images/hd/rishabh-pant-hd-1920x1080.jpg',
    'Axar Patel': 'https://wallpapers.com/images/hd/axar-patel-hd-1920x1080.jpg',
    'Sarfaraz Khan': 'https://wallpapers.com/images/hd/sarfaraz-khan-hd-1920x1080.jpg',
    'Khaleel Ahmed': 'https://wallpapers.com/images/hd/khaleel-ahmed-hd-1920x1080.jpg',
    'Mustafizur Rahman': 'https://wallpapers.com/images/hd/mustafizur-rahman-hd-1920x1080.jpg',
    'Kuldeep Yadav': 'https://wallpapers.com/images/hd/kuldeep-yadav-hd-1920x1080.jpg',

    // Rajasthan Royals Players
    'Sanju Samson': 'https://wallpapers.com/images/hd/sanju-samson-hd-1920x1080.jpg',
    'Yashasvi Jaiswal': 'https://wallpapers.com/images/hd/yashasvi-jaiswal-hd-1920x1080.jpg',
    'Devdutt Padikkal': 'https://wallpapers.com/images/hd/devdutt-padikkal-hd-1920x1080.jpg',
    'Shimron Hetmyer': 'https://wallpapers.com/images/hd/shimron-hetmyer-hd-1920x1080.jpg',
    'Riyan Parag': 'https://wallpapers.com/images/hd/riyan-parag-hd-1920x1080.jpg',
    'Trent Boult': 'https://wallpapers.com/images/hd/trent-boult-hd-1920x1080.jpg',
    'Yuzvendra Chahal': 'https://wallpapers.com/images/hd/yuzvendra-chahal-hd-1920x1080.jpg',
    'Sandeep Sharma': 'https://wallpapers.com/images/hd/sandeep-sharma-hd-1920x1080.jpg',
    'Nandre de Bruyn': 'https://wallpapers.com/images/hd/nandre-de-bruyn-hd-1920x1080.jpg',

    // Sunrisers Hyderabad Players
    'Pat Cummins': 'https://wallpapers.com/images/hd/pat-cummins-hd-1920x1080.jpg',
    'Abhishek Sharma': 'https://wallpapers.com/images/hd/abhishek-sharma-hd-1920x1080.jpg',
    'Travis Head': 'https://wallpapers.com/images/hd/travis-head-hd-1920x1080.jpg',
    'Aiden Markram': 'https://wallpapers.com/images/hd/aiden-markram-hd-1920x1080.jpg',
    'Marco Jansen': 'https://wallpapers.com/images/hd/marco-jansen-hd-1920x1080.jpg',
    'Nitish Reddy': 'https://wallpapers.com/images/hd/nitish-reddy-hd-1920x1080.jpg',
    'Bhuvneshwar Kumar': 'https://wallpapers.com/images/hd/bhuvneshwar-kumar-hd-1920x1080.jpg',
    'T Natarajan': 'https://wallpapers.com/images/hd/t-natarajan-hd-1920x1080.jpg',
    'Heinrich Klaasen': 'https://wallpapers.com/images/hd/heinrich-klaasen-hd-1920x1080.jpg',

    // Lucknow Super Giants Players
    'KL Rahul': 'https://wallpapers.com/images/hd/kl-rahul-hd-1920x1080.jpg',
    'Quinton de Kock': 'https://wallpapers.com/images/hd/quinton-de-kock-hd-1920x1080.jpg',
    'Marcus Stoinis': 'https://wallpapers.com/images/hd/marcus-stoinis-hd-1920x1080.jpg',
    'Lokesh Rahul': 'https://wallpapers.com/images/hd/lokesh-rahul-hd-1920x1080.jpg',
    'Nicholas Pooran': 'https://wallpapers.com/images/hd/nicholas-pooran-hd-1920x1080.jpg',
    'Yash Thakur': 'https://wallpapers.com/images/hd/yash-thakur-hd-1920x1080.jpg',
    'Ravi Bishnoi': 'https://wallpapers.com/images/hd/ravi-bishnoi-hd-1920x1080.jpg',
    'Mohsin Khan': 'https://wallpapers.com/images/hd/mohsin-khan-hd-1920x1080.jpg',
    'Naveen-ul-Haq': 'https://wallpapers.com/images/hd/naveen-ul-haq-hd-1920x1080.jpg',

    // Gujarat Titans Players
    'Hardik Pandya': 'https://wallpapers.com/images/hd/hardik-pandya-hd-1920x1080.jpg',
    'Shubman Gill': 'https://wallpapers.com/images/hd/shubman-gill-hd-1920x1080.jpg',
    'Wriddhiman Saha': 'https://wallpapers.com/images/hd/wriddhiman-saha-hd-1920x1080.jpg',
    'Kane Williamson': 'https://wallpapers.com/images/hd/kane-williamson-hd-1920x1080.jpg',
    'David Miller': 'https://wallpapers.com/images/hd/david-miller-hd-1920x1080.jpg',
    'Rashid Khan': 'https://wallpapers.com/images/hd/rashid-khan-hd-1920x1080.jpg',
    'Mohammed Shami': 'https://wallpapers.com/images/hd/mohammed-shami-hd-1920x1080.jpg',
    'Yash Dayal': 'https://wallpapers.com/images/hd/yash-dayal-hd-1920x1080.jpg',
    'Noor Ahmad': 'https://wallpapers.com/images/hd/noor-ahmad-hd-1920x1080.jpg',

    // Punjab Kings Players
    'Shikhar Dhawan': 'https://wallpapers.com/images/hd/shikhar-dhawan-hd-1920x1080.jpg',
    'Jonny Bairstow': 'https://wallpapers.com/images/hd/jonny-bairstow-hd-1920x1080.jpg',
    'Liam Livingstone': 'https://wallpapers.com/images/hd/liam-livingstone-hd-1920x1080.jpg',
    'Jitesh Sharma': 'https://wallpapers.com/images/hd/jitesh-sharma-hd-1920x1080.jpg',
    'Harpreet Brar': 'https://wallpapers.com/images/hd/harpreet-brar-hd-1920x1080.jpg',
    'Arshdeep Singh': 'https://wallpapers.com/images/hd/arshdeep-singh-hd-1920x1080.jpg',
    'Rabada': 'https://wallpapers.com/images/hd/rabada-hd-1920x1080.jpg',
    'Nathan Ellis': 'https://wallpapers.com/images/hd/nathan-ellis-hd-1920x1080.jpg',
    'Vaibhav Arora': 'https://wallpapers.com/images/hd/vaibhav-arora-hd-1920x1080.jpg'
};

// Function to get player photo
function getPlayerPhoto(playerName) {
    return playerPhotos[playerName] || 'https://wallpapers.com/images/hd/default-player-hd-1920x1080.jpg'; // Default photo if player not found
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) { 
    module.exports = { playerPhotos, getPlayerPhoto };
}
