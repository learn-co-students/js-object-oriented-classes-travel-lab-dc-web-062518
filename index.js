class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    let date = new Date(endDate);

    return date - this.startDate.getFullYear() -1;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation

  }


  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let h1, h2;
    for (var i = 0; i < eastWest.length; i++){
      if(eastWest[i] === this.beginningLocation.horizontal){
        h1 = i;
      }
      if (eastWest[i] === this.endingLocation.horizontal){
        h2 = i;
      }
    }
    let horizontal = Math.abs(h1-h2);
    return horizontal + vertical;
  }

  estimatedTime(){return this.blocksTravelled()/3;

  }

}
