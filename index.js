class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    let wholeDate = this.startDate;
    let yearOnly = wholeDate.getFullYear();
    return year - parseInt(yearOnly) - 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    this.eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];
  }

  blocksTravelled() {
    let arr = this.eastWest;
    let startH = this.beginningLocation.horizontal;
    let startV = parseInt(this.beginningLocation.vertical);
    let endH = this.endingLocation.horizontal;
    let endV = parseInt(this.endingLocation.vertical);
    let verticalDistance = Math.abs(parseInt(startV - endV));
    let startHIndex = arr.indexOf(startH);
    let endHIndex = arr.indexOf(endH);
    let horizontalDistance = Math.abs(startHIndex - endHIndex);
    var totalBlocksTravelled = verticalDistance + horizontalDistance;
    return totalBlocksTravelled;
  }

  estimatedTime(peakHour) {
    if (peakHour === true) {
      return this.blocksTravelled() / 2;
      debugger;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
