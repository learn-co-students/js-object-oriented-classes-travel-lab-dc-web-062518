class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear() - 1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let a = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let beginningIndex = eastWest.findIndex((element) => {return element == this.beginningLocation.horizontal})
    let endingIndex = eastWest.findIndex((element) => {return element == this.endingLocation.horizontal})
    let b = Math.abs(beginningIndex - endingIndex)
    return (a + b)
  }

  estimatedTime(peak = false) {
    if (peak) {
      return (this.blocksTravelled() / 2)
    } else {
      return (this.blocksTravelled() / 3)
    }
  }
}
