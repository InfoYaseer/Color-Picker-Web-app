let colorIndicator = document.getElementById('color-indicator');
let hexcode = document.getElementById('hex-code');
let rgbcode = document.getElementById('rgb-code');
let hslcode = document.getElementById('hsl-code');  // ✔ FIXED ID name

const colorPicker = new iro.ColorPicker('#color-picker',{
    width: 180,
    color: "#fff"
});

colorPicker.on('color:change', function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    hexcode.textContent = "HEX: " + color.hexString;
    rgbcode.textContent = "RGB: " + color.rgbString;
    hslcode.textContent = "HSL: " + color.hslString;
});
