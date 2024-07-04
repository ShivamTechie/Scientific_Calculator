let base = null;

function setVal(p) {
  document.f.display.value += p;
}

function performOperation(opr) {
  switch (opr) {
    case "pi":
      document.f.display.value = Math.PI * document.f.display.value;
      break;

    case "clr":
      document.f.display.value = "";
      break;

    case "bks":
      document.f.display.value = document.f.display.value.slice(0, -1);
      break;

    case "sqrt":
      document.f.display.value = Math.sqrt(document.f.display.value);
      break;

    case "cos":
      document.f.display.value = Math.cos(document.f.display.value);
      break;

    case "sin":
      document.f.display.value = Math.sin(document.f.display.value);
      break;

    case "tan":
      document.f.display.value = Math.tan(document.f.display.value);
      break;

    case "log":
      document.f.display.value = Math.log(document.f.display.value);
      break;

    case "x2":
      document.f.display.value =
        document.f.display.value * document.f.display.value;
      break;

    case "negPos":
      let curentVal = document.f.display.value;
      if (curentVal.charAt(0) == "-") {
        document.f.display.value = curentVal.slice(1);
      } else {
        document.f.display.value = "-" + curentVal;
      }
      break;

    case "power":
      base = parseFloat(document.f.display.value);
      document.f.display.value = "";
      break;

    case "calculate":
      try {
        if (base !== null) {
          const exponent = parseFloat(document.f.display.value);
          document.f.display.value = Math.pow(base, exponent);
          base = null;
        } else {
          document.f.display.value =
            `${document.f.display.value} = ` + eval(document.f.display.value);
        }
      } catch (err) {
        document.f.display.value = "Error";
      }
      break;
  }
}

const operator = ["%", "/", "*", "-", "+", ".", "(", ")"];
function setOp(p) {
  document.f.display.value += operator[p];
}
