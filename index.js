let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let end = new Date(year)
    let numberOfYears = end - this.startDate.getFullYear()
    return numberOfYears
  }

};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  aveIndex(ave) {
    return eastWest.indexOf(ave)
  }

  blocksTravelled() {

    let horizontal = this.aveIndex(this.endingLocation.horizontal) - this.aveIndex(this.beginningLocation.horizontal)
    let vertical = parseInt(this.endingLocation.vertical - this.beginningLocation.vertical)

    return horizontal + vertical
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

};
