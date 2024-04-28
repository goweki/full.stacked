class CustomDate {
  constructor(date = new Date()) {
    this.date = date;
  }

  greetings(username) {
    const hours = this.date.getHours();
    let greeting = "";

    if (hours >= 5 && hours < 12) {
      greeting = "Good morning";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return `${greeting}, ${username}`;
  }

  getTimeInEAT() {
    const options = {
      timeZone: "Africa/Nairobi",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return this.date.toLocaleDateString("en-GB", options);
  }

  getEpochTime() {
    return Math.floor(this.date.getTime() / 1000);
  }
}
