let M:number = 0;


//get number
function digit(num:any): void{
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += num;
}

//get result
function result():void {
    try {
        var result = <HTMLInputElement>document.getElementById("disp");
        if (result.value.match('log') != null) {
            let text = result.value;
            result.value = result.value.replace(/log/g, "Math.log");
        }
        if (result.value.match('log10') != null) {
            let text = result.value;
            result.value = result.value.replace(/log10/g, "log10");
        }
        if (result.value.match('pow') != null) {
            let text = result.value;
            result.value = result.value.replace(/pow/g, "Math.pow");
        }
        if (result.value.match('sqrt') != null) {
            let text = result.value;
            result.value = result.value.replace(/sqrt/g, "Math.sqrt");
        }
        if (result.value.match('abs') != null) {
            let text = result.value;
            result.value = result.value.replace(/abs/g, "Math.abs");
        }
        if (result.value.match('sin') != null) {
            let text = result.value;
            result.value = result.value.replace(/sin/g, "Math.sin");
        }
        if (result.value.match('cos') != null) {
            let text = result.value;
            result.value = result.value.replace(/cos/g, "Math.cos");
        }
        if (result.value.match('tan') != null) {
            let text = result.value;
            result.value = result.value.replace(/tan/g, "Math.tan");
        }
        if (result.value.match('ceil') != null) {
            let text = result.value;
            result.value = result.value.replace(/ceil/g, "Math.ceil");
        }
        if (result.value.match('floor') != null) {
            let text = result.value;
            result.value = result.value.replace(/floor/g, "Math.floor");
        }
        result.value = eval(result.value);
    }
    catch (err) {
        var result = <HTMLInputElement>document.getElementById("disp");
        result.value = "undefined" as unknown as string;
    }
}

//clear screen
function clearScreen():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value = "";
}

//delete last letter
function del():void {
    var number = <HTMLInputElement>document.getElementById("disp");
    var remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;
}

//negative-positive number
function negpos():void {
    var numb = <HTMLInputElement>document.getElementById("disp");
    numb.value = (parseInt(numb.value) * (-1)) as unknown as string;
}

//natural log
function natLog():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'log(';
}

//log 
function logVal():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'log10(';
}

//10 to the power x
function tentoX():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'pow(10,';
}

//factorial
function factorial():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    let answer = 1;
    if (result.value as unknown as number == 0 || result.value as unknown as number == 1) {
        result.value = answer as unknown as string;
    }
    else if (result.value as unknown as number > 1) {
        for (var i:number = result.value as unknown as number; i >= 1; i--) {
            answer = answer * i;
        }
        result.value = answer as unknown as string;
    }
}

//square root
function sqrt():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'sqrt(';
}

//mod function
function mod():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'abs(';
}

//square function
function square() : void {
    var result = <HTMLInputElement>document.getElementById("disp");
    let answer = (result.value as unknown as number) * (result.value as unknown as number);
    result.value = answer as unknown as string;

}

//euler value
function euler():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    let e = 2.71828;
    result.value += e;
}

//pi value
function pi():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += Math.PI;
}

//sin value
function sin():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'sin(';
}

//cos value
function cos():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'cos(';
}

//tan value
function tan():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'tan(';
}

//absolute value
function abs():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'abs(';
}

//ceil value
function ceil():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'ceil(';
}

//floor value
function floor():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value += 'floor(';
}

//degree value
function deg():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    let rad = result.value as unknown as number;
    let deg = rad * 180 / Math.PI;
    result.value = deg as unknown as string;
}

//M+ function
function mp():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    M = M + Number(result.value);
    result.value = M as unknown as string;
}

//M- function
function mm():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    M = M - Number(result.value);
    result.value = M as unknown as string;
}

//MS function
function ms():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    M = M + Number(result.value);
}

//MR function
function mr():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    result.value = M as unknown as string;
}

//MC function
function mc():void {
    M = 0;
}

//Fixed exponential
function fe():void {
    var result = <HTMLInputElement>document.getElementById("disp");
    var exp = parseFloat(result.value);
    result.value = exp.toExponential(4);
}