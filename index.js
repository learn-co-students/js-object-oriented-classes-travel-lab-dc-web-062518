class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let pastYear = "19" + this.startDate.getYear()
    let newPastYear = parseInt(pastYear)
    let numberOfYears = year - newPastYear
    return numberOfYears - 1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startV = this.beginningLocation.vertical
    let endV = this.endingLocation.vertical
    let startH = eastWest.indexOf(this.beginningLocation.horizontal)
    let endH = eastWest.indexOf(this.endingLocation.horizontal)
    let totalV = Math.abs(startV - endV)
    let totalH = Math.abs(startH - endH)
    let total = totalV + totalH
    return total
  }


  estimatedTime(peakHour) {
    if(peakHour === true) {
     return this.blocksTravelled() / 2
    } else {
     return this.blocksTravelled() / 3
    }
  }
}
