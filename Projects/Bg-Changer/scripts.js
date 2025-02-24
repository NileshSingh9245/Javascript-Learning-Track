document.addEventListener("DOMContentLoaded", function() {
    // Mock data - Replace with actual data fetching logic
    const topNews = {
        international: ["International news 1", "International news 2", "International news 3"],
        national: ["National news 1", "National news 2", "National news 3"],
        state: ["State news 1", "State news 2", "State news 3"],
    };

    const wordOfTheDay = "Ebullient";

    const srtQuestions = [
        "Question 1: What would you do if you found a wallet on the street?",
        "Question 2: How would you react if you saw someone being bullied?",
        "Question 3: What would you do if you missed your train?",
    ];

    const tatPictureUrl = "https://example.com/path/to/tat-picture.jpg";

    const watWords = ["Courage", "Strength", "Fear"];

    const oirQuestions = [
        "OIR Question 1",
        "OIR Question 2",
        "OIR Question 3",
        "OIR Question 4",
        "OIR Question 5",
        "OIR Question 6",
        "OIR Question 7",
        "OIR Question 8",
        "OIR Question 9",
        "OIR Question 10",
        "OIR Question 11",
        "OIR Question 12",
        "OIR Question 13",
        "OIR Question 14",
        "OIR Question 15",
        "OIR Question 16",
        "OIR Question 17",
        "OIR Question 18",
        "OIR Question 19",
        "OIR Question 20",
    ];

    // Populate news sections
    const internationalNewsList = document.getElementById("international-news-list");
    topNews.international.forEach(news => {
        const li = document.createElement("li");
        li.textContent = news;
        internationalNewsList.appendChild(li);
    });

    const nationalNewsList = document.getElementById("national-news-list");
    topNews.national.forEach(news => {
        const li = document.createElement("li");
        li.textContent = news;
        nationalNewsList.appendChild(li);
    });

    const stateNewsList = document.getElementById("state-news-list");
    topNews.state.forEach(news => {
        const li = document.createElement("li");
        li.textContent = news;
        stateNewsList.appendChild(li);
    });

    // Populate word of the day
    document.getElementById("word").textContent = wordOfTheDay;

    // Populate SRT questions
    const srtQuestionsList = document.getElementById("srt-questions");
    srtQuestions.forEach(question => {
        const li = document.createElement("li");
        li.textContent = question;
        srtQuestionsList.appendChild(li);
    });

    // Set TAT picture
    document.getElementById("tat-picture").src = tatPictureUrl;

    // Populate WAT words
    const watWordsList = document.getElementById("wat-words");
    watWords.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        watWordsList.appendChild(li);
    });

    // Populate OIR questions
    const oirQuestionsList = document.getElementById("oir-questions");
    oirQuestions.forEach(question => {
        const li = document.createElement("li");
        li.textContent = question;
        oirQuestionsList.appendChild(li);
    });
});
