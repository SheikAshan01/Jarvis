const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open telegram")) {
        window.open("https://web.telegram.org", "_blank");
        speak("Opening Telegram...");
    } else if (message.includes("open file manager")) {
        // Opens the file manager (works on Windows)
        window.open('explorer://');
        speak("Opening File Manager...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening WhatsApp...");
    } else if (message.includes("open chrome")) {
        // Opens Google Chrome (works if Chrome is installed)
        window.open('chrome://');
        speak("Opening Google Chrome...");
    } else if (message.includes("open chatgpt")) {
        window.open("https://chat.openai.com", "_blank");
        speak("Opening ChatGPT...");
    } else if (message.includes("open deepseek")) {
        window.open("https://www.deepseek.com", "_blank");
        speak("Opening Deepseek...");
    } else if (message.includes("npr college") || message.includes("open npr college dindigul")) {
        window.open("https://www.nprcolleges.org", "_blank");
        speak("Opening NPR College Website, Dindigul...");
    } else if (message.includes("open vs code") || message.includes("open visual studio code")) {
        window.open('vscode://');
        speak("Opening Visual Studio Code...");
    } else if (message.includes("open settings")) {
        window.open('ms-settings:');
        speak("Opening System Settings...");
    } else if (message.includes("open calculator")) {
        window.open('Calculator:///');
        speak("Opening Calculator...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes("compliment me") || message.includes("say something nice")) {
        const compliments = [
            "You're doing an amazing job today!",
            "You have the best smile!",
            "You're smarter than you think!",
            "You're making the world a better place!",
            "You're one of a kind!"
        ];
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        speak(randomCompliment);
    }
    
     else if (message.includes("motivate me") || message.includes("give me a quote")) {
        const quotes = [
            "The only way to do great work is to love what you do. – Steve Jobs",
            "Believe you can and you're halfway there. – Theodore Roosevelt",
            "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
            "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
    } else if (message.includes("tell me a fact") || message.includes("give me a fact")) {
        const facts = [
            "Bananas are berries, but strawberries aren't!",
            "Octopuses have three hearts.",
            "The Eiffel Tower can be 15 cm taller during summer due to thermal expansion.",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
            "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        speak(randomFact);
    } else if (message.includes("play music")) {
        const songs = [
            "https://youtu.be/5BJDFKs41pI?si=gYkt4PCRng1Cv2zA", // Rick Astley - Never Gonna Give You Up
            "https://youtu.be/XMrZO7hH6sw?si=aC4QbK4dis-GSj8T", // Ed Sheeran - Shape of You
            "https://youtu.be/dvWdFMCC1-I?si=itYp1jJHH08DwTXh"  // Adele - Hello
        ];
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        window.open(randomSong, "_blank");
        speak("Playing music for you!");
    } else if (message.includes("play a game") || message.includes("let's play")) {
        speak("Let's play Rock, Paper, Scissors! Say your choice.");
        recognition.onresult = (event) => {
            const userChoice = event.results[0][0].transcript.toLowerCase();
            const choices = ["rock", "paper", "scissors"];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            if (!choices.includes(userChoice)) {
                speak("Invalid choice. Please say rock, paper, or scissors.");
            } else {
                let result;
                if (userChoice === computerChoice) {
                    result = "It's a tie!";
                } else if (
                    (userChoice === "rock" && computerChoice === "scissors") ||
                    (userChoice === "paper" && computerChoice === "rock") ||
                    (userChoice === "scissors" && computerChoice === "paper")
                ) {
                    result = "You win!";
                } else {
                    result = "You lose!";
                }
                speak(`You chose ${userChoice}, and I chose ${computerChoice}. ${result}`);
            }
        };
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }

}