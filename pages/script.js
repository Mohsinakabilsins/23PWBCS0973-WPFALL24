const workouts = document.querySelectorAll(".workout");
let currentWorkout = 0;

function showWorkout(index) {
  workouts.forEach((workout, i) => {
    workout.classList.toggle("active", i === index);
  });
}

document.getElementById("nextButton").addEventListener("click", () => {
  currentWorkout = (currentWorkout + 1) % workouts.length;
  showWorkout(currentWorkout);
});

document.getElementById("prevButton").addEventListener("click", () => {
  currentWorkout = (currentWorkout - 1 + workouts.length) % workouts.length;
  showWorkout(currentWorkout);
});

showWorkout(currentWorkout);
