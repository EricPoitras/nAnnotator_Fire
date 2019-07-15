// Functions to update UI elements based on data received and events

// Example: Show buttons for sign in 
function Controller_SignOut_Completed(){
  document.getElementById('sign_in_btn').style.display = 'inline';
  document.getElementById('sign_out_btn').style.display = "none";
    // TO DO: Any other elements - like a router to update ui view
  document.getElementById('topic_dropdown').style.display = "none";
  document.getElementById('role_dropdown').style.display = "none";
}

// Example: Hide buttons for sign in as well as show other elements in the app
function Controller_SignIn_Completed(){
  // TO DO: Sign and out buttons
  document.getElementById('sign_in_btn').style.display = 'none';
  document.getElementById('sign_out_btn').style.display = "inline";
  // TO DO: Any other elements - like a router to update ui view
  document.getElementById('topic_dropdown').style.display = "inline";
  document.getElementById('role_dropdown').style.display = "inline";
}
          
// Example: Updating discussion thread based on GET call
function update_discussion(name, role, text){
  // Test controller: console.log(name + ";" + role +";"+ text);
  // Construct discussion post divs using data passed as parameters in function
  if(role == "Teacher"){
      document.getElementById("discussion").innerHTML += `<div class="card mt-2 mb-2 ml-1" style="margin-right:50px;">
    <div class="card-body">
        <span class="font-weight-bold">${name}</span><span> - </span><span class="font-weight-light">${role}</span>
        <p class="mb-0">${text}</p>
    </div>
</div>`;

  }else{
      document.getElementById("discussion").innerHTML += `<div class="card mt-2 mb-2 mr-1" style="margin-left:50px;">
        <div class="card-body">
            <span class="font-weight-bold">${name}</span><span> - </span><span class="font-weight-light">${role}</span>
            <p class="mb-0">${text}</p>
        </div>
    </div>`;
  }

}

// Example: Updating annotation list based on GET call
function update_annotation(text){
    document.getElementById("annotation").innerHTML += `<div class="card mt-1 mb-1 mr-1 ml-1">${text}</div>`
}