var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var snakeRating = document.getElementById('snakeRating');
var wikiPage = '';
var wikiTitle = '';
var snakeTitle = document.getElementById('snake');



const maxHighScores = 5;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
finalScore.innerText = mostRecentScore;

username.addEventListener('keydown', function () {
    saveScoreBtn.disabled = !username.value;
});

function saveHighScore(event) {
    console.log('Save button clicked!')
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };


    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
};

function wikiPrint() {
    if (mostRecentScore <= 20) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Garter_Snake&origin=*'
        wikiTitle = 'Garter Snake'

    };
    if (mostRecentScore >= 50) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Chrysopelea&origin=*'
        wikiTitle = 'Chrysopelea'
    };
    if (mostRecentScore >= 80) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Gaboon_viper&origin=*'
        wikiTitle = 'Gaboon Viper'
    };
    if (mostRecentScore >= 100) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Inland_taipan&origin=*'
        wikiTitle = 'Inland Taipan'
    };
    if (mostRecentScore >= 120) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Yellow-lipped_sea_krait&origin=*'
        wikiTitle = 'Yellow-lipped Sea Krait'
    };
    if (mostRecentScore >= 150) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Rattlesnake&origin=*'
        wikiTitle = 'Rattlesnake'
    };
    if (mostRecentScore >= 180) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Micrurus_tener&origin=*'
        wikiTitle = 'Texas Coral Snake'

    };
    if (mostRecentScore >= 180) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Black_mamba&origin=*'
        wikiTitle = 'Black Mamba'
    };

    if (mostRecentScore >= 200) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Green_anaconda&origin=*'
        wikiTitle = 'Green Anaconda'
    };
    if (mostRecentScore >= 220) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=King_cobra&origin=*'
        wikiTitle = 'King Cobra'
    };
    if (mostRecentScore >= 250) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Reticulated_python&origin=*'
        wikiTitle = 'Reticulated Python'
    };
    if (mostRecentScore >= 280) {
        wikiPage = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Titanoboa&origin=*'
        wikiTitle = 'Titanoboa'
    };

    snakeTitle.innerText = wikiTitle;

    fetch(wikiPage)
        .then(response => response.json())
        .then(response => {
            response = response.query.pages;
            var pageid = Object.keys(response)[0];
            var extract = response[pageid].extract;

            snakeRating.innerHTML = extract;
        })

};
wikiPrint();
