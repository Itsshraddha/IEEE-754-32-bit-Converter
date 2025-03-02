function floatToIEEE754(floatNum) {
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setFloat32(0, floatNum, false); // false for big-endian
    
    let binaryStr = "";
    for (let i = 0; i < 4; i++) {
        binaryStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8);
    }
    
    return binaryStr;
}

function convertToIEEE754() {
    let num = parseFloat(document.getElementById("floatInput").value);
    if (isNaN(num)) {
     document.getElementById("binaryOutput").innerText = "Please enter a valid number!";
        return;
    }

    let binaryIEEE754 = floatToIEEE754(num);
    let formattedBinary = binaryIEEE754[0] + " " + binaryIEEE754.slice(1, 9) + " " + binaryIEEE754.slice(9);
    
    document.getElementById("binaryOutput").innerText = "IEEE 754 (32-bit): " + formattedBinary;
}