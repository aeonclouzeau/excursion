// Get video element
let video = document.getElementById("iphoneVideo");

// Listen for the "ended" event and replay video
video.addEventListener("ended", () => {
	video.currentTime = 0; // Set current time to zero
	video.onplay(); // play video
});
