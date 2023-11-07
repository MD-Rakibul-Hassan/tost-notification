

const tostMessage = document.getElementById("tostMessage");
const successMessate = "Successfully Submited✅";
const errorMessage = "Please Fixed The Error ❌";
const invalidMessage = "Invalid Input !"

function showTostMessage(msg) {
      const div = document.createElement("div");
      div.classList.add("tost");
      div.innerHTML = msg;
      tostMessage.appendChild(div);
      if (msg.includes("Error")) {
            div.classList.add("error");
      }
      if (msg.includes("Invalid")) {
            div.classList.add("invalid");
      }
      setTimeout ( ()=> div.remove(),3000)
}