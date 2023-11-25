const x = document.getElementById("notification");
const y = document.getElementById("menuID");
function notificationSvg() {
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function menu() {
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
const setup = document.querySelector(".setupGuide");

function dropDown() {
  if (setup.style.display === "none") {
    setup.style.display = "block";
  } else {
    setup.style.display = "none";
  }
}

function cancel() {
  const x = document.getElementById("btn");
  if (x.style.display === "none") {
  } else {
    x.style.display = "none";
  }
}

const container = document.querySelectorAll(".svgContainer");

container.forEach((item) => {
  const circle = item.querySelector(".circle");
  const markSvg = item.querySelector(".thirdSvg");

  item.addEventListener("click", () => {
    if (markSvg.style.display === "none") {
      markSvg.style.display = "flex";
      circle.style.display = "none";
    } else {
      circle.style.display = "flex";
      markSvg.style.display = "none";
    }
  });
});

const accordionContent = document.querySelectorAll(".setupContainer");

accordionContent.forEach((item, index) => {
  let header = item.querySelector(".setup");
  header.addEventListener("click", () => {
    item.classList.toggle("is-open");

    let description = item.querySelector(".theContent");
    if (item.classList.contains("is-open")) {
      description.style.height = "100px";
    } else {
      description.style.height = "0px";
    }

    removeOpenedContent(index);
  });
});

function removeOpenedContent(index) {
  accordionContent.forEach((item2, index2) => {
    if (index != index2) {
      item2.classList.remove("is-open");
      let descrip = item2.querySelector(".theContent");
      descrip.style.height = "0px";
    }
  });
}
