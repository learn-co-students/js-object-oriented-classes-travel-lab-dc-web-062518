class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);

  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()-1;
  };

}

beginningLocation = {horizontal: '1st avenue', vertical: '13th Street'}

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation

  };

//
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
   let vert = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
   let horiz  = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));


   return vert + horiz;
  };


estimatedTime(peakHours){
  if (peakHours){
      return this.blocksTravelled()/2
  } else {
    return this.blocksTravelled()/3
    };
  };


//
}
