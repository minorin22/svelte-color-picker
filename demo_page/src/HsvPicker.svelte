<script lang="ts">
import {onMount,createEventDispatcher} from 'svelte';

export let startColor: string;
let mainColor: string = '#000000';
let subColor: string = '#FFFFFF'
let alpha: number = 1;
let isMainOrSub: boolean = true;
let alpha100: string;
$: alpha100 = Math.round(alpha * 100) + "%";
let mainColorElement: HTMLElement;
let subColorElement: HTMLElement;
let mainSelectedColor: HTMLElement;
let subSelectedColor: HTMLElement;
let alphaInput: HTMLElement;
let hexInput: HTMLElement;
(isMainOrSub)?startColor = mainColor:startColor = subColor;
onMount(() => {
 document.addEventListener("mouseup", mouseUp);
 document.addEventListener("touchend", mouseUp);
 document.addEventListener("mousemove", mouseMove);
 document.addEventListener("touchmove", touchMove);
 document.addEventListener("touchstart", killMouseEvents);
 document.addEventListener("mousedown", killTouchEvents);
 setStartColor();
 mainColorElement = document.getElementById('maincolor');
 subColorElement = document.getElementById('subcolor');
 mainSelectedColor = document.querySelector('.mainSelectedColor');
 subSelectedColor = document.querySelector('.subSelectedColor');
 alphaInput = document.querySelector('#alphaInput');
 hexInput = document.querySelector('#hexInput');
 alphaInput.addEventListener('keypress', setAlpha);
 hexInput.addEventListener('keypress', setColor);
 mainSelectedColor.style.background = mainColor;
 subSelectedColor.style.background = subColor;
 if(isMainOrSub){
   mainColorElement.style.zIndex = '1';
   subColorElement.style.zIndex = '0';
 } else {
   mainColorElement.style.zIndex = '0';
   subColorElement.style.zIndex = '1';
 }
 mainColorElement.onclick = ()=> {
   mainColorElement.style.zIndex = '1';
   subColorElement.style.zIndex = '0';
   startColor = mainColor;
   isMainOrSub = true;
   setStartColor();
 }
 subColorElement.onclick = ()=> {
   mainColorElement.style.zIndex = '0';
   subColorElement.style.zIndex = '1';
   startColor = subColor;
   isMainOrSub = false;
   setStartColor();
 }
});


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};
const dispatch = createEventDispatcher();
let tracked;
let h: number = 1;
let s: number = 1;
let v: number = 1;
let r: number = 255;
let g: number = 0;
let b: number = 0;
let hexValue: string;

const setAlpha = (e)=>{
  let a: number;
  if (e.keyCode === 13 || e.keyCode === 9) {
    if (alpha100.match(/[0-9]/)) a = parseInt(alpha100, 10) / 100;
    if (a < 0) a = 0;
    if (a > 1) a = 1;
    alpha = a;
    updateAlphaPicker();
    colorChange();
  }
}

const setColor = (e)=>{
  if (e.keyCode === 13 || e.keyCode === 9) {
    if (isMainOrSub) {
      mainColor = hexValue;
      startColor = mainColor;
    } else {
      subColor = hexValue;
      startColor = subColor;
    }
    setStartColor();
  }
}


function setStartColor() {
  let hex: string = startColor.replace('#','');
  if (hex.match(/([^A-F0-9])/gi)) {
    alert('Invalid property value (startColor)');
    return;
  }
  switch (hex.length){
    case 0:
      hex = '000';
      break;
    case 1:
      hex += '00';
      break;
    case 2:
      hex += '0';
      break;
    case 4:
      hex += '00';
      break;
    case 5:
      hex += '0';
      break;
  }
  let hexFiltered: string='';
  if (hex.length === 3)
    hex.split('').forEach( c => {hexFiltered += c+c;});
  else
    hexFiltered=hex;
  hexValue = hexFiltered;
  r = parseInt(hexFiltered.substring(0,2), 16);
  g = parseInt(hexFiltered.substring(2,4), 16);
  b = parseInt(hexFiltered.substring(4,6), 16);
  rgbToHSV(r,g,b,true);
  updateCsPicker();
  updateHuePicker();
  updateAlphaPicker();
}

function removeEventListenerFromElement(elementId, eventName, listenerCallback) {
  let element: HTMLElement = document.querySelector(elementId);
  if (element) element.removeEventListener(eventName, listenerCallback);
}

function killMouseEvents() {
  removeEventListenerFromElement("#alpha-event", "mousedown", alphaDown);
  removeEventListenerFromElement("#colorsquare-event", "mousedown", csDown);
  removeEventListenerFromElement("#hue-event", "mousedown", hueDown);
  document.removeEventListener("mouseup",mouseUp);
  document.removeEventListener("mousemove",mouseMove);
  document.removeEventListener("touchstart",killMouseEvents);
  document.removeEventListener("mousedown",killTouchEvents);
}

function killTouchEvents() {
  removeEventListenerFromElement("#alpha-event", "touchstart", alphaDownTouch);
  removeEventListenerFromElement("#colorsquare-event", "touchstart", csDownTouch);
  removeEventListenerFromElement("#hue-event", "touchstart", hueDownTouch);
  document.removeEventListener("touchend",mouseUp);
  document.removeEventListener("touchmove",touchMove);
  document.removeEventListener("touchstart",killMouseEvents);
  document.removeEventListener("mousedown",killTouchEvents);
}

function updateCsPicker() {
  let csPicker: HTMLElement = document.querySelector("#colorsquare-picker");
  let xPercentage: number = s * 100;
  let yPercentage: number = (1 - v) * 100;
  csPicker.style.top = yPercentage + "%";
  csPicker.style.left = xPercentage + "%";
}

function updateHuePicker() {
  let huePicker: HTMLElement = document.querySelector("#hue-picker");
  let yPercentage: number = h * 100;
  let hueTop: number = 100 - yPercentage;
  while(hueTop < 0){
    hueTop += 100;
  }
  huePicker.style.top = hueTop + "%";
}

function updateAlphaPicker() {
  let alphaPicker: HTMLElement = document.querySelector("#alpha-picker");
  let yPercentage: number = alpha * 100;
  alphaPicker.style.top = 100 - yPercentage + "%";
}

function colorChangeCallback() {
  dispatch('colorChange', {
  			r: r,
        g: g,
        b: b,
        a: alpha
  		});
}

function mouseMove(event) {
 if (tracked) {
  let mouseX: number = event.clientX;
  let mouseY: number = event.clientY;
  let trackedPos = tracked.getBoundingClientRect();
  let xPercentage: any, yPercentage: any, picker: HTMLElement;
  switch (tracked.id) {
   case "colorsquare-event":
    xPercentage = (mouseX - trackedPos.x) / 176 * 100;
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (xPercentage > 100) ? xPercentage = 100: (xPercentage < 0) ? xPercentage = 0 : null;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    picker = document.querySelector("#colorsquare-picker");
    yPercentage = yPercentage.toFixed(2);
    xPercentage = xPercentage.toFixed(2);
    picker.style.top = yPercentage + "%";
    picker.style.left = xPercentage + "%";
    s = xPercentage / 100;
    v = 1 - yPercentage / 100;
    colorChange();
    break;
   case "hue-event":
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    yPercentage = yPercentage.toFixed(2);
    picker = document.querySelector("#hue-picker");
    picker.style.top = yPercentage + "%";
    h = 1 - yPercentage / 100;
    hueChange();
    break;
   case "alpha-event":
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    yPercentage = yPercentage.toFixed(2);
    picker = document.querySelector("#alpha-picker");
    picker.style.top = yPercentage + "%";
    alpha = 1 - yPercentage / 100;
    colorChange();
    break;
  }

 }

}

function touchMove(event) {
 if (tracked) {
  let mouseX: number = event.touches[0].clientX;
  let mouseY: number = event.touches[0].clientY;
  let trackedPos = tracked.getBoundingClientRect();
  let xPercentage: any, yPercentage: any, picker: HTMLElement;
  switch (tracked.id) {
   case "colorsquare-event":
    xPercentage = (mouseX - trackedPos.x) / 176 * 100;
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (xPercentage > 100) ? xPercentage = 100: (xPercentage < 0) ? xPercentage = 0 : null;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    picker = document.querySelector("#colorsquare-picker");
    yPercentage = yPercentage.toFixed(2);
    xPercentage = xPercentage.toFixed(2);
    picker.style.top = yPercentage + "%";
    picker.style.left = xPercentage + "%";
    s = xPercentage / 100;
    v = 1 - yPercentage / 100;
    colorChange();
    break;
   case "hue-event":
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    yPercentage = yPercentage.toFixed(2);
    picker = document.querySelector("#hue-picker");
    picker.style.top = yPercentage + "%";
    h = 1 - yPercentage / 100;
    hueChange();
    break;
   case "alpha-event":
    yPercentage = (mouseY - trackedPos.y) / 176 * 100;
    (yPercentage > 100) ? yPercentage = 100: (yPercentage < 0) ? yPercentage = 0 : null;
    yPercentage = yPercentage.toFixed(2);
    picker = document.querySelector("#alpha-picker");
    picker.style.top = yPercentage + "%";
    alpha = 1 - yPercentage / 100;
    colorChange();
    break;
  }

 }

}

function csDown(event) {
 tracked = event.currentTarget;
 let xPercentage: any = ((event.offsetX + 1) / 176) * 100;
 let yPercentage: any = ((event.offsetY + 1) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 xPercentage = xPercentage.toFixed(2)
 let picker: HTMLElement = document.querySelector("#colorsquare-picker");
 picker.style.top = yPercentage + "%";
 picker.style.left = xPercentage + "%";
 s = xPercentage / 100;
 v = 1 - yPercentage / 100;
 colorChange();
}

function csDownTouch(event) {
 tracked = event.currentTarget;
 let rect = event.target.getBoundingClientRect();
 let offsetX: number = event.targetTouches[0].clientX - rect.left;
 let offsetY: number = event.targetTouches[0].clientY - rect.top;
 let xPercentage: any = ((offsetX + 1) / 176) * 100;
 let yPercentage: any = ((offsetY + 1) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 xPercentage = xPercentage.toFixed(2)
 let picker: HTMLElement = document.querySelector("#colorsquare-picker");
 picker.style.top = yPercentage + "%";
 picker.style.left = xPercentage + "%";
 s = xPercentage / 100;
 v = 1 - yPercentage / 100;
 colorChange();
}

function mouseUp(event) {
 tracked = null;
}

function hueDown(event) {
 tracked = event.currentTarget;
 let yPercentage: any = ((event.offsetY) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 let picker: HTMLElement = document.querySelector("#hue-picker");
 picker.style.top = yPercentage + "%";
 h = 1 - yPercentage / 100;
 hueChange();
}

function hueDownTouch(event) {
 tracked = event.currentTarget;
 let rect = event.target.getBoundingClientRect();
 let offsetY: number = event.targetTouches[0].clientY - rect.top;
 let yPercentage: any = ((offsetY) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 let picker: HTMLElement = document.querySelector("#hue-picker");
 picker.style.top = yPercentage + "%";
 h = 1 - yPercentage / 100;
 hueChange();
}

function hueChange() {
 let rgb: number[] = hsvToRgb(h, 1, 1)
 let colorArea: HTMLElement = document.querySelector("#colorArea");
 let picker: HTMLElement = document.querySelector("#hue-picker");
 colorArea.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
 picker.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
 colorChange();
}

function colorChange() {
 let rgb: number[] = hsvToRgb(h, s, v);
 r = rgb[0];
 g = rgb[1];
 b = rgb[2];
 hexValue = RGBAToHex();
 let alphaSliderColor: HTMLElement = document.querySelector("#alphaSliderColor");
 let alphaPicker: HTMLElement = document.querySelector("#alpha-picker");
 let colorsquarePicker: HTMLElement = document.querySelector("#colorsquare-picker");
 alphaPicker.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
 colorsquarePicker.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
 alphaSliderColor.style.background = `linear-gradient(to bottom, rgba(${rgb[0]},${rgb[1]},${rgb[2]},1) 0%, rgba(0, 0, 0, 0) 100%)`;
 if (isMainOrSub){
  let mainSelectedColor: HTMLElement = document.querySelector('.mainSelectedColor');
  mainSelectedColor.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
  mainColor = hexValue;
 } else {
  let subSelectedColor: HTMLElement = document.querySelector('.subSelectedColor');
  subSelectedColor.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
  subColor = hexValue;
 }
 colorChangeCallback();
}

function alphaDown(event) {
 tracked = event.currentTarget;
 let yPercentage: any = ((event.offsetY) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 let picker: HTMLElement = document.querySelector("#alpha-picker");
 picker.style.top = yPercentage + "%";
 alpha = 1 - yPercentage / 100;
 colorChange();
}

function alphaDownTouch(event) {
 tracked = event.currentTarget;
 let rect = event.target.getBoundingClientRect();
 let offsetY: number = event.targetTouches[0].clientY - rect.top;
 let yPercentage: any = ((offsetY) / 176) * 100;
 yPercentage = yPercentage.toFixed(2);
 let picker: HTMLElement = document.querySelector("#alpha-picker");
 picker.style.top = yPercentage + "%";
 alpha = 1 - yPercentage / 100;
 colorChange();
}

//Math algorithms
function hsvToRgb(h, s, v) {
 var r: number, g: number, b: number;

 var i: number = Math.floor(h * 6);
 var f: number = h * 6 - i;
 var p: number = v * (1 - s);
 var q: number = v * (1 - f * s);
 var t: number = v * (1 - (1 - f) * s);

 switch (i % 6) {
  case 0:
   r = v, g = t, b = p;
   break;
  case 1:
   r = q, g = v, b = p;
   break;
  case 2:
   r = p, g = v, b = t;
   break;
  case 3:
   r = p, g = q, b = v;
   break;
  case 4:
   r = t, g = p, b = v;
   break;
  case 5:
   r = v, g = p, b = q;
   break;
 }

 return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function RGBAToHex() {
 let rHex: string = r.toString(16);
 let gHex: string = g.toString(16);
 let bHex: string = b.toString(16);

 if (rHex.length == 1)
  rHex = "0" + rHex;
 if (gHex.length == 1)
  gHex = "0" + gHex;
 if (bHex.length == 1)
  bHex = "0" + bHex;


 return ("#" + rHex + gHex + bHex).toUpperCase();
}

function rgbToHSV(r, g, b, update) {
    let rperc, gperc, bperc,max,min,diff,pr,hnew,snew,vnew;
    rperc = r / 255;
    gperc = g / 255;
    bperc = b / 255;
    max = Math.max(rperc, gperc, bperc);
    min = Math.min(rperc, gperc, bperc);
    diff = max - min;

    vnew = max;
    (vnew == 0) ? snew = 0 : snew = diff / max ;

    for (let i=0;i<3;i++) {
      if ([rperc,gperc,bperc][i] === max) {
        pr=i;
        break;
      }
    }
    if (diff==0) {
      hnew = 0;
      if (update) {
        h=hnew;
        s=snew;
        v=vnew;
        hueChange();
        return;
      }
      else {
        return {h:hnew,s:snew,v:vnew};
      }
    }
    else {
      switch (pr) {
        case 0:
          hnew=60*(((gperc-bperc)/diff)%6)/360
          break;
        case 1:
          hnew=60*(((bperc-rperc)/diff)+2)/360
          break;
        case 2:
          hnew=60*(((rperc-gperc)/diff)+4)/360
          break;
      }
      if (hnew < 0) hnew+=6;
    }

    if (update) {
      h=hnew;
      s=snew;
      v=vnew;
      hueChange();
    }
    else {
      return {h:hnew,s:snew,v:vnew};
    }
}
</script>


<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="ColorWheel" size="XS"></coral-icon>
    <span class="toolName">Picker</span>
  </div>
  <div class="toolAreaContainer" id="pickerAreaContainer">
    <div id="colorAreaContainer">
      <div id="colorArea">
        <div class="saturation-gradient">
          <div class="value-gradient">
            <div id="colorsquare-picker"></div>
            <div id="colorsquare-event" on:mousedown={csDown} on:touchstart={csDownTouch}></div>
          </div>
        </div>
      </div>
    </div>
    <div id="colorSlider">
      <div id="hue-picker"></div>
      <div id="hue-event" on:mousedown={hueDown} on:touchstart={hueDownTouch}></div>
    </div>
    <div id="alphaSlider">
      <div id="alphaSliderColor">
        <div id="alpha-picker"></div>
        <div id="alpha-event" on:mousedown={alphaDown} on:touchstart={alphaDownTouch}></div>
      </div>
    </div>
  </div>
  <div class="colorSelectContainer">
    <div class="selectColor">
      <button id="maincolor" class="colorSwatch">
        <div class="mainSelectedColor"></div>
      </button>
      <button id="subcolor" class="colorSwatch">
        <div class="subSelectedColor"></div>
      </button>
    </div>
    <label for="hexInput" class="coral-FieldLabel">Hex: </label>
    <input type="text" is="coral-textfield" variant="quiet" aria-label="text input" bind:value={hexValue} id="hexInput">
    <input type="text" is="coral-textfield" variant="quiet" aria-label="text input" bind:value={alpha100} id="alphaInput">
  </div>
</div>
<style lang="scss">
.toolArea {
  width: 304px;
  .toolNameArea {
    display: flex;
    align-items: center;
    margin: 16px 24px;
    font-weight: normal;
    coral-icon {
      margin-right: 8px;
    }
  }
  .toolAreaContainer {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
    margin: 8px 16px;
  }
}
#colorAreaContainer {
  grid-column: 1 / 9;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  &:before {
    content:"";
    display: block;
    padding-top: 100%;
  }
  #colorArea {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background: #ff0000;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    .saturation-gradient {
      background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
      width: 176px;
      height: 176px;
    }
    .value-gradient {
      background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
      width: 176px;
      height: 176px;
    }
  }
}
#colorSlider {
  grid-column: 9 / 11;
  border-radius: 4px;
  background: linear-gradient(to top, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);
}
#alphaSlider {
  position: relative;
  z-index: 0;
  grid-column: 11 /13;
  border-radius: 4px;
  background: rgb(204, 204, 204);
  background-image:
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0),
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px, 8px 8px, 16px 16px;
  #alphaSliderColor {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-image: linear-gradient(to bottom, #ff0000 0%, rgba(0, 0, 0, 0) 100%);
  }
}
.colorSelectContainer {
  display: flex;
  align-items: center;
  margin: 16px;
  .selectColor {
    position: relative;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    button {
      width: 24px;
      height: 24px;
      border-radius: 2px!important;
    }
    .mainSelectedColor, .subSelectedColor {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    #maincolor {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
    }
    #subcolor {
      position: absolute;
      cursor: pointer;
      top: 10px;
      left: 10px;
    }
  }
  label {
    margin-right: 16px;
  }
  input {
    &:nth-of-type(1) {
      width: 36%;
      margin-right: 16px;
    }
    &:nth-of-type(2) {
      width: 24%;
      margin-right: 16px;
    }
  }
}

.colorSwatch {
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 1px!important;
  cursor: pointer;
  background: rgb(204, 204, 204);
  background-image:
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0),
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px, 8px 8px, 16px 16px;
  transition: border-color 130ms ease-in-out, box-shadow 130ms ease-in-out;
  outline: none;
}

#colorArea, #colorSlider, #alphaSlider, #maincolor, #subcolor, .colorSwatch {
  border: 1px solid #e1e1e1;
}
#colorsquare-picker, #hue-picker, #alpha-picker {
  box-shadow: 0 0 0 1px #4a4a4a, 0 0 0 3px #ffffff, 0 0 0 4px #4a4a4a;
}
.colorSwatch {
  &:hover {
    border-color: rgb(211, 211, 211);
    box-shadow: none;
  }
  &:focus {
    border-color: rgb(20, 115, 230);
  }
}
#hue-picker {
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  left: 50%;
  position: relative;
  transform: translate(-6px, -7px);
}

#hue-event {
  width: 32px;
  height: 158px;
  cursor: pointer;
  transform: translate(-6px, -12px);
  touch-action: none;
}

#alpha-picker {
  width: 12px;
  height: 12px;
  cursor: pointer;
  border-radius: 50%;
  left: 50%;
  position: relative;
  transform: translate(-6px, -7px);
}

#alpha-event {
  width: 32px;
  height: 158px;
  cursor: pointer;
  transform: translate(-6px, -12px);
  touch-action: none;
}

#colorsquare-picker {
  margin: 0;
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  transform: translate(-6px, -6px);
  left: 100%;
}

#colorsquare-event {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  transform: translate(0, -12px);
  touch-action: none;
}
</style>