var Human = function (type) {
  this.type = type || "human";
};
Human.isHuman = function (human) {
  return human instanceof Human;
};
Human.prototype.breathe = function () {
  console.log("h-a-a-a-m");
};
var Zero = function (type, firstName, Lastname) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.Lastname = Lastname;
};
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName;
