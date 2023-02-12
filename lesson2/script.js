class Creature{
    constructor(x,y){
        this.x=x
        this.y=y
}
eat(){
    console.log("Eat")
}
die(){
    console.log("Die")
}
}
class GrassEater extends Creature{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    
    mult(){
        console.log("Mult")

    }
    
    chooseCell(){
console.log("Cell")
    }
}

class Predator extends Creature{
    constructor (x,y,energy){
        super(x,y)
        this.energy=energy
    }

 }
 let sheep= new Predator(10,20,36)