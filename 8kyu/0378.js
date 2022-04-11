// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, master)
      this.species = "Labrador"
      this.size = "Large"
      this.master = master
      this.loyal = true
    }
}