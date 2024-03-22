function changeFontSize(elementClass, size) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = size + "px";
  }
}

function changeColor(elementClass, color) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = color;
  }
}

document.querySelectorAll(".font-size-input").forEach((item) => {
  item.addEventListener("input", () => {
    changeFontSize(item.dataset.target, item.value);
  });
});

document.querySelectorAll(".color-input").forEach((item) => {
  item.addEventListener("input", () => {
    changeColor(item.dataset.target, item.value);
  });
});

function toggleBold(elementClass) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    var fontWeight = window
      .getComputedStyle(elements[i], null)
      .getPropertyValue("font-weight");
    if (fontWeight === "bold" || parseInt(fontWeight) > 400) {
      elements[i].style.fontWeight = "normal";
    } else {
      elements[i].style.fontWeight = "bold";
    }
  }
}

function toggleUnderline(elementClass) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    var textDecoration = window
      .getComputedStyle(elements[i], null)
      .getPropertyValue("text-decoration");
    if (textDecoration.includes("underline")) {
      elements[i].style.textDecoration = "none";
    } else {
      elements[i].style.textDecoration = "underline";
    }
  }
}

function toggleItalic(elementClass) {
  var elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    var fontStyle = window
      .getComputedStyle(elements[i], null)
      .getPropertyValue("font-style");
    if (fontStyle === "italic") {
      elements[i].style.fontStyle = "normal";
    } else {
      elements[i].style.fontStyle = "italic";
    }
  }
}
