//1. Create a function with validInput to trigger click

//2. get value from input

//3. check condition whether value id empty or not

//4. put element for message below the input and if empty then set message.


document.addEventListener("DOMContentLoaded", () => {
  console.log(localStorage.getItem("input"));
  if (localStorage.getItem("input")) {
    names = JSON.parse(localStorage.getItem("input"));
    renderNames();
  }
});
let names = [];

//let editIndex = undefined;


function validInput() {
  let element = document.getElementById("demo"); //id p
  console.log(element);
  let input = document.getElementById("myInput"); //search input
  console.log(input);
  let demo = input.value; //blank value msg
  if (input.value == "") {
    element.innerHTML = "This field is required"
    // alert("This field is required!!")
  } else {
    element.innerHTML = ""

    names.push(input.value);
    storeNames();
    renderNames();
    input.value = "";
    console.log(demo);
  }

};

function renderNames() { //todo box
  let data = "";
  names.forEach((name, index) => {
    data += `
      <div class="box" id="box1">
            <div class="todo-item-header">
                <div class="pencil"id="myDIV"  onclick="myFunction('${name}', ${index})">
                    <i class="fa fa-pencil fa-x" > </i>
                </div>
      
                <div class="time" id="remove" onclick="removeFunction(${index})"  >
                    <i class="fa fa-times fa-x"></i>
                </div>
              
            </div>
            <div class="todo-item-footer">
                <button>${name}</button>
            </div>
        </div>
      `;
  });

  document.getElementById("todoSection").innerHTML = data; // todo section
}

function inputVal() { //
  let input = document.getElementById("myInput");
  if (input.innerHTML == "") {
    input.innerHTML = "update";
  } else {
    input.innerHTML = "";
  }
};

function myFunction(val, index) { //add value and button update

  let upbutton = document.getElementById("demo1"); //msg
  upbutton.innerHTML = "UPDATE";

  let input = document.getElementById("myInput"); //input value
  input.value = val;

  upbutton.setAttribute("onclick", `updateName(${index})`);
  // editIndex = index;
}

function updateName(index) { //update input value
  console.log(index);

  let input = document.getElementById("myInput");
  names[index] = input.value;                                                                     ML = "ADD";
let upbutton = document.getElementById("demo1"); //msg
  upbutton.innerHTML = "ADD";

  upbutton.setAttribute("onclick", `validInput({})`);
  input.value = "";

  this.renderNames();
}

function removeFunction(index) { //close button for index remove 
  console.log(index);
  // $(document).ready(function () {
  //   $(".box").click(function () {
      $(".box").remove();

  //   });
  // });
     let text;                                                                                                            
   if (window.confirm("Do you want to Remove?")) {
      names.splice(index, 1);
     renderNames();
   storeNames();
   }
}

function storeNames() {
  localStorage.setItem("input", JSON.stringify(names))
}