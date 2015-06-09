var MyMath;
(function (MyMath) {
    var Calculator = (function () {
        function Calculator() {
            var _this = this;
            var button;
            button = document.querySelector("#compute");
            var aInput = document.querySelector("#a");
            var bInput = document.querySelector("#b");
            var resultInput = document.querySelector("#result");
            button.onclick = function () {
                _this.a = parseFloat(aInput.value);
                _this.b = parseFloat(bInput.value);
                resultInput.value = _this.sum();
            };
        }
        Calculator.prototype.sum = function () {
            return this.a + this.b;
        };
        return Calculator;
    })();
    MyMath.Calculator = Calculator;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var OtherClass = (function () {
        function OtherClass() {
        }
        OtherClass.prototype.doSomethingElse = function () {
        };
        return OtherClass;
    })();
    MyMath.OtherClass = OtherClass;
})(MyMath || (MyMath = {}));
window.onload = function () {
    window['calculator'] = new MyMath.Calculator();
};
//# sourceMappingURL=app.js.map