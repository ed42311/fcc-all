var Person = function(firstAndLast) {
    this.getFirstName = function(){
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function(){
      return firstAndLast.split(' ')[1];
    };
    this.getFullName = function() {
      console.log(firstAndLast);
    };
    this.setFirstName = function(first){
      firstAndLast =  first + ' ' + firstAndLast.split(' ')[1];
    };
    this.setLastName = function(last){
      firstAndLast = firstAndLast.split(' ')[0] + ' ' + last;
    };
    this.setFullName = function(firstAndLast) {
      var self = this;
      self.setFirstName(firstAndLast.split(' ')[1]);
      self.setLastName(firstAndLast.split(' ')[0]);
    };
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
bob.getFullName();
