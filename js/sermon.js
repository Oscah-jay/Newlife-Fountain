// sermon.js

const bibleVerses = [
    {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
    },
    {
        text: "I can do all things through him who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28"
    },
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    return bibleVerses[randomIndex];
}

function displaySermon() {
    const sermonElement = document.getElementById('sermon');
    const verse = getRandomVerse();

    if (verse) {
        sermonElement.innerHTML = `
            <h2>Today's Sermon</h2>
            <p>${verse.text}</p>
            <p><strong>${verse.reference}</strong></p>
        `;
    } else {
        sermonElement.innerHTML = `
            <h2>Today's Sermon</h2>
            <p>Sorry, we couldn't fetch a sermon at this moment. Please try again later.</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', displaySermon);
