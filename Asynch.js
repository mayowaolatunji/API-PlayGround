
class car {

    constructor (name, speed, color){
        this.name = name;
        this.speed = speed;
        this.color = color
    }

    drive(){
        console.log("the car is on Drive")
    }

}
 const ferrari = new car('Ferrari', 300,'red');
 console.log(ferrari.color)

 ferrari.drive()

 