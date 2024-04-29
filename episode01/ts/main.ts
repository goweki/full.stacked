import CustomDate from "./customDate";

// initialize class
const currentDate = new CustomDate();
// call member methods
console.log(currentDate.greetings("Goweki"));
console.log("Local time:", currentDate.getTimeInEAT());
console.log("Epoch: ", currentDate.getEpochTime());
