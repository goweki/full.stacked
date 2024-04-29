interface GreetingInterface {
  greetings(username: string): string;
}

interface TimeInterface {
  getTimeInEAT(): string;
}

interface EpochInterface {
  getEpochTime(): number;
}

export default class CustomDate
  implements GreetingInterface, TimeInterface, EpochInterface
{
  private date: Date;

  constructor(date?: Date) {
    this.date = date || new Date();
  }

  greetings(username: string): string {
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

  getTimeInEAT(): string {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Africa/Nairobi",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return this.date.toLocaleDateString("en-GB", options);
  }

  getEpochTime(): number {
    return this.date.getTime();
  }
}
