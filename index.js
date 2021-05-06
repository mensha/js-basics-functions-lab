// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
    let hQ = 42
    let distanceBlocksOne = destination - hQ
    let distanceBlocksTwo = hQ - destination
  
    if (destination > hQ) {
        return distanceBlocksOne
    } 
    else 
    return distanceBlocksTwo
}

function distanceFromHqInFeet(destination) {
    let hQ = 42
    let distanceInFeetOne = (destination - hQ) * 264;
    let distanceInFeetTwo = (hQ - destination) * 264
  
    if (destination > hQ) {
        return distanceInFeetOne
    } 
    else 
    return distanceInFeetTwo
}
function distanceTravelledInFeet(destination, start) {
    
    let distanceInFeetOne = (destination - start) * 264
    let distanceInFeetTwo = (start- destination) * 264
  
    if (destination > start) {
        return distanceInFeetOne
    } 
    else 
    return distanceInFeetTwo
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
  
   
    let cost = (distance - 400) * 0.02
    let costFreeRide = distance * 0

    if (distance <= 400) {
        return costFreeRide;
        
    } else if (distance > 400 && distance <= 2000) {
        return cost;

    } else if (distance > 2000 && distance <= 2500) {
        return 25

    } else {
        return 'cannot travel that far'
    
    }
     
}