// GET and POST functions to read and write to the database

// Example - GET call to Firebase to read data discussion forum
function Firebase_GET_Call(){ 
    // TO DO: Define parameters for GET call that are defined by user input elements
    var topic = document.getElementById("topic_dropdown").value;
    // TO DO: Define GET call, including parameters for collection, filter, and order 
    db.collection("discussion").where("topic","==",topic).orderBy("date").get().then(function(querySnapshot) {
        // TO DO: Reset the element HTML content - ready to update
        document.getElementById("discussion").innerHTML = "";
        //Iterates through array data
        querySnapshot.forEach(function(doc) {
            //Test GET call results: console.log(doc.id, " => ", doc.data());
            // TO DO: Pass the data to a controller to set HTML element data
            update_discussion(doc.data().name,doc.data().role,doc.data().text);
        });
    });
}

// Example - POST call to Firebase to add data discussion forum
function Firebase_POST_Call(){
    // TO DO: Define parameters for POST call that are defined by user input elements
    var topic = document.getElementById("topic_dropdown").value;
    var response_text_entry = document.getElementById("response_text").value;
    var role = document.getElementById("role_dropdown").value;
    // TO DO: Define other parameters for POST call such as current time to order inputs 
    var username = firebase.auth().currentUser.displayName;
    var d = new Date();
    var time = d.getTime().toString();
      
    // TO DO: Define POST call, including all column values for a new document called "discussion"
    db.collection("discussion").add({
        date: time,
        name: username,
        role: role,
        topic: topic,
        text: response_text_entry
    })
    .then(function() {
        // TO DO: If post is successful, then initiate a GET call to Firebase to set data in HTML elements (if necessary)
        // Test POST call: console.log("Document successfully written!");
        Firebase_GET_Call();
    })
    .catch(function(error) {
        // Test POST call: console.error("Error writing document: ", error);
    });    
}

// Example - GET call to Firebase to read data annotations
function Firebase_GET_Call_2(){
    // TODO: Reset the element HTML content - ready to update
    var annotations = document.getElementById("annotation").innerHTML = "";
    // TO DO: Define other parameters for POST call such as current time to order inputs 
    var username = firebase.auth().currentUser.displayName;
    // TODO: Define the GET call, including parameters for collection, filter, and order
    db.collection("annotation").where("name","==",username).orderBy("date").get().then(function(querySnapshot){
       querySnapshot.forEach(function(doc){
           console.log(doc.id, " => ", doc.data());
           update_annotation(doc.data().text);
       }) 
    });
}

// Example - POST call to Firebase to add data annotations
function Firebase_POST_Call_2(){
    var annotation_text = document.getElementById("textarea_input").value;
    var role = document.getElementById("role_dropdown").value;
    var username = firebase.auth().currentUser.displayName;
    var d = new Date(); 
    var time = d.getTime().toString();
    
    db.collection("annotation").add({
        date: time,
        name: username,
        role: role, 
        text:annotation_text
    }).then(function(){
        Firebase_GET_Call_2();
        console.log("Document successfully written!");
    }).catch(function(error){
       console.error("Error writing document: ", error); 
    });
}