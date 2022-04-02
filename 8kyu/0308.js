// Lexical this

var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends: function(f) {
        this._friends.push(...f)
      }
    }
    return person;
}
  
let friends = new Person