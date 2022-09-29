

const acButton = document.querySelectorAll(".btn");

for(let i = 0; i < acButton.length; i++) {
  acButton[i].addEventListener("click", () => {
    if (acButton[i].style.backgroundColor !== "white") {
      acButton.forEach(button => {
        button.style.backgroundColor = "rgb(99, 109, 129)";
      })
      acButton[i].style.backgroundColor = "white";

    };
  })
};

function changeDiv(topDiv, underDiv, topDivC, underDivC) {
  if (document.getElementById(underDiv).style.display !== 'block') {
    document.getElementById(topDiv).style.display = 'none';
    document.getElementById(underDiv).style.display = 'block';
    document.getElementById(topDivC).style.display = 'none';
    document.getElementById(underDivC).style.display = 'block';
    // console.log("UnderDiv should be showing");
  } else {
    document.getElementById(topDiv).style.display = 'block';
    document.getElementById(underDiv).style.display = 'none';
    document.getElementById(topDivC).style.display = 'block';
    document.getElementById(underDivC).style.display = 'none';
    // console.log("TopDiv should be showing");
  };
}

function showMenuButton(divID) {
  if (document.getElementById(divID).style.width < "1266px") {
    document.getElementById('menuButton').style.display = 'block';
  } else {
    document.getElementById('menuButton').style.display = 'none';
  }
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

function revealMenu(divId) {
  if (document.getElementById(divId).style.display === "block") {
    document.getElementById(divId).style.display = "none";
  } else {
    document.getElementById(divId).style.display = "block";
  }
}




// function active2Button() {
//   buttonID.style.color = "white";
// }

// function active3Button() {
//   buttonID.style.color = "white";
// }
