let anniversary = "2022-10-13";
let date = new Date(anniversary);
let dateVal = date.getTime();
let today = new Date();
let now = today.getTime();
let value = now - dateVal;
let day = Math.floor(value / (1000 * 60 * 60 * 24));
let month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
let year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

console.log(value);



let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function() {
    isHidden = !isHidden;
    if(isHidden){
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="icons/close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-full" src="icons/plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPLay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});


let trackList = [
    {
        name: "Cosas Que No Te Dije",
        artist: "Saiko",
        path: "./music/Cosas Que No Te Dije.mp3",
    },
    {
        name: "MEDIA LUNA",
        artist: "Mora",
        path: "./music/MEDIA LUNA.mp3",
    },
    {
        name: "Magic",
        artist: "Coldplay",
        path: "./music/Magic.mp3",
    },
    {
        name: "Yellow",
        artist: "Coldplay",
        path: "./music/Yellow.mp3",
    },
    {
        name: "Rewrite The Stars",
        artist: "The Greatest Showman",
        path: "./music/Rewrite The Stars.mp3",
    },
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex){
    currentTrack.src = trackList[trackIndex].path;
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
    currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack(){
    if(isPlaying == false){
        playTrack();
    }else{
        pauseTrack();
    }
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">';
    soundBarsLottie.play();
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">';
    soundBarsLottie.stop();
}

function nextTrack(){
    if(trackIndex < trackList.length - 1){
        trackIndex += 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = 0;
        loadTrack(trackIndex);
        playTrack();
    } 
}

function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = trackList.length - 1;
        loadTrack(trackIndex);
        playTrack();
    }
}


// Función para voltear las tarjetas
function flipCard(cardElement) {
    cardElement.classList.toggle("flipped");

    // Muestra el botón "Siguiente" después de voltear una tarjeta
    document.getElementById("next-button").classList.remove("hidden");
}


let currentStep = 1;
const totalSteps = 4; // Total de pasos
const nextButton = document.getElementById('next-button');

// Función para cambiar de paso
function goToNextStep() {
    if (currentStep < totalSteps) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
    }
    
    // Si estamos en el último paso, oculta el botón
    if (currentStep === totalSteps) {
        nextButton.style.display = 'none'; // Oculta el botón en el último paso
    }
}

// Agregar evento de clic al botón de siguiente
nextButton.addEventListener('click', goToNextStep);

// Mostrar el botón solo en el primer paso
if (currentStep === 1) {
    nextButton.classList.remove('hidden');
}



