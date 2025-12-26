Object.prototype.inherit = function (Parent) {
  const F = function () {};
  F.prototype = Parent.prototype;
  this.prototype = new F();
  this.prototype.constructor = this;
  this.superclass = Parent.prototype;
  // Добавляем ссылку на родительский конструктор
  this.prototype._super = function () {
    Parent.apply(this, arguments);
  };
};

function Main() {
  this.a = 100;
}

Main.prototype.method = function (param) {
  return `param: ${param}`;
};

function Box() {
  this._super();
}

Box.inherit(Main);

Box.prototype.getMainProps = function () {
  return this;
};
