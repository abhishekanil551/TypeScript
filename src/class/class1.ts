//  Index Signatures
class SeatAssignment{
    // index signature property
    [seatNumber: string]: string;
} 

let seats = new SeatAssignment();
seats.A1 = "ljls";
seats.A2 = '345543';






// Static Members

class Ride {
   private static _activeRides: number = 0;

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides-- }

   static get activeRides(){
        return Ride._activeRides
    }
}

let ride1 = new Ride();
ride1.start();
let ride2 =new Ride();
ride2.start();
 

console.log(Ride.activeRides)
