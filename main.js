function stringToInt(s) {
    let r = 0;
    let arrLength = s.length-1;
    let change = 0;
    for (var i = 0; i <= arrLength; i++) {
        change = arrLength-i
        switch (s[i]) {
            case ("0"):
                r += 0*(Math.pow(10, change));
                break;
            case ("1"):
                r += 1*(Math.pow(10, change));
                break;
            case ("2"):
                r += 2*(Math.pow(10, change));
                break;
            case ("3"):
                r += 3*(Math.pow(10, change));
                break;
            case ("4"):
                r += 4*(Math.pow(10, change));
                break;
            case ("5"):
                r += 5*(Math.pow(10, change));
                break;
            case ("6"):
                r += 6*(Math.pow(10, change));
                break;
            case ("7"):
                r += 7*(Math.pow(10, change));
                break;
            case ("8"):
                r += 8*(Math.pow(10, change));
                break;
            case ("9"):
                r += 9*(Math.pow(10, change));
                break;
            default:
                console.log("String contains an invalid entry and is not a 0-9 character");
        }
    }
    return r;
}

console.log(stringToInt("1324"))
