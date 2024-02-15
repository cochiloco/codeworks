//function to validate form in jQuery
$('#main-form').submit(function(event){
   event.preventDefault();
   let errorMessage=''
   //Function taken from https://stackoverflow.com/questions/2507030/how-can-one-use-jquery-to-validate-email-addresses
   function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  if(!isValidEmail($('#email').val())) {
    errorMessage = errorMessage + '<br> Please enter a valid email address'
    $('#error-message').html(errorMessage)
  }
  if (!$.isNumeric($('#mobile').val())){
    errorMessage = errorMessage +'<br> Please enter a valid phone number'
    $('#error-message').html(errorMessage)
  }

  else if (errorMessage=''){
    
//function to capture form data and add new contacts into table
document.getElementById("main-form").addEventListener("submit", function(event) {
    // AI assisted to review and understand this 'preventDefault' concept:
    event.preventDefault();
    const formData = new FormData(document.getElementById("main-form"));
    const data={};
    // Convert FormData to object
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    
    // Populate table data 
    const tableBody = document.querySelector('#formDataTable tbody');
    const newRow = document.createElement('tr')
        
    //AI assisted with the construction of this for lopp to create td's in table
    for (const field in data) {
        if (Object.hasOwnProperty.call(data, field)) { //This condition checks if the current property being iterated over (field) is a direct property of the data object
          const cell = document.createElement("td");
          cell.textContent = data[field];
          newRow.appendChild(cell);
        }
      }

    //Create a new Delete button with the creation of the row 
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteRow(newRow);
    });
    deleteButtonCell.appendChild(deleteButton);
    newRow.appendChild(deleteButtonCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });

//function to delete the row
function deleteRow(row) {
    row.remove(); // Remove the row from the table
}
  
//function to Search and clear table
document.getElementById("search-form").addEventListener("submit", function(event) {
// Prevent default form submission
    event.preventDefault();

// Get the search query
    const searchQuery = document.querySelector('.search-container').value.toLowerCase();

// Get all table rows
    const rows = document.querySelectorAll('#formDataTable tbody tr');
// AI assistance required to loop through all rows and hide those that don't match the search query
    let contactFound = false;
    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(1)').textContent.toLowerCase(); // Assuming the name is in the 1st column
        if (name.includes(searchQuery)) {
            row.style.display = ''; // Show row if name matches search query
            contactFound = true; 
        } else {
            row.style.display = 'none'; // Hide row if name doesn't match search query
        }
    });
});


  }

});


/////////////////////////////////////////////////////////////////////////////
//function to capture form data and add new contacts into table
document.getElementById("main-form").addEventListener("submit", function(event) {
    // AI assisted to review and understand this 'preventDefault' concept:
    event.preventDefault();
    const formData = new FormData(document.getElementById("main-form"));
    const data={};
    // Convert FormData to object
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    
    // Populate table data 
    const tableBody = document.querySelector('#formDataTable tbody');
    const newRow = document.createElement('tr')
        
    //AI assisted with the construction of this for lopp to create td's in table
    for (const field in data) {
        if (Object.hasOwnProperty.call(data, field)) { //This condition checks if the current property being iterated over (field) is a direct property of the data object
          const cell = document.createElement("td");
          cell.textContent = data[field];
          newRow.appendChild(cell);
        }
      }

    //Create a new Delete button with the creation of the row 
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteRow(newRow);
    });
    deleteButtonCell.appendChild(deleteButton);
    newRow.appendChild(deleteButtonCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });

//function to delete the row
function deleteRow(row) {
    row.remove(); // Remove the row from the table
}
  
//function to Search and clear table
document.getElementById("search-form").addEventListener("submit", function(event) {
// Prevent default form submission
    event.preventDefault();

// Get the search query
    const searchQuery = document.querySelector('.search-container').value.toLowerCase();

// Get all table rows
    const rows = document.querySelectorAll('#formDataTable tbody tr');
// AI assistance required to loop through all rows and hide those that don't match the search query
    let contactFound = false;
    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(1)').textContent.toLowerCase(); // Assuming the name is in the 1st column
        if (name.includes(searchQuery)) {
            row.style.display = ''; // Show row if name matches search query
            contactFound = true; 
        } else {
            row.style.display = 'none'; // Hide row if name doesn't match search query
        }
    });
});