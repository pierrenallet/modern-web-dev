module MyMath {
    export class Calculator {
        constructor() {
            var button: any;
            button = document.querySelector("#compute");
            var aInput: any = document.querySelector("#a");
            var bInput: any = document.querySelector("#b");
            var resultInput: any = document.querySelector("#result");
            button.onclick = () => {
                this.a = parseFloat(aInput.value);
                this.b = parseFloat(bInput.value);
                resultInput.value = this.sum();
            }
        }

        a: number;
        b: number;

        sum() {
            return this.a + this.b;
        }
    }
}

module MyMath {
    export class OtherClass
    {
        doSomethingElse(){}
    
}
}

window.onload = function() {
    window['calculator'] = new MyMath.Calculator();
}
