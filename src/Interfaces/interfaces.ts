interface Calender {
    name : string;
    addEvent(): void;
    removeEvent(): void;
}


interface CloudCalendar extends Calender{
    sync(): void;
}

class GoogleCalendar implements CloudCalendar {
    name: string = "My Google Cal";

    addEvent() {
        console.log("Event added.");
    }

    removeEvent() {
        console.log("Event removed.");
    }

    sync() {
        console.log("Syncing to the cloud...");
    }
}