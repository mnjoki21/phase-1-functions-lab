function distanceFromHqInBlocks(distance) {
    if(distance > 42) return distance - 42
    return 42 - distance
}

distanceFromHqInBlocks()



function distanceFromHqInFeet(blocks){
    const feet = distanceFromHqInBlocks(blocks) * 264
    return feet 

}
function distanceTravelledInFeet (start, destination)  { if(start < destination) 
    return (destination - start) * 264
    return (start - destination) *264

}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0 
    } 
    else if(distance > 400 && distance <= 2000) {
        return .02 * (distance - 400)

    }
    else if (distance > 2000 && distance <2500) { 
        return 25 

    }
    else return 'cannot travel that far'
}








