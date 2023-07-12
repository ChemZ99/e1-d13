const addtask = SubmitEvent => {
  SubmitEvent.preventDefault();

  const targetform = SubmitEvent.target;
  const taskelem = targetform.elements;

  console.log("target", targetform);
  console.log("elements", taskelem);

  let task = taskelem[0].value;

  console.log("empty value", task);

  console.log("value", task);

  const taskrep = document.getElementById("regtasks");

  let removebutton = document.createElement("button");
  removebutton.innerText = "delete";
  removebutton.classList.add("button-49");
  let taskcontainer = document.createElement("ul");
  let taskstring = document.createElement("li");
  taskstring.innerText = task;
  taskstring.appendChild(removebutton);
  taskcontainer.appendChild(taskstring);
  taskrep.appendChild(taskcontainer);
  removebutton.onclick = () => taskcontainer.remove();
  console.log(taskcontainer);
  console.log(taskrep);
  taskstring.addEventListener("click", () => {
    taskstring.classList.toggle("lining");
  });
};

const personalbutton = document.querySelector("form a");
const formtarget = document.querySelector("form");

console.log(personalbutton);

personalbutton.onclick = () => formtarget.submit();
