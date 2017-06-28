class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = crew.length < 1 ?  true : false
    if (!this.docked) {
      this.crew.forEach(crewPerson => {
        crewPerson.currentShip = this
      })
    }
  }
}
