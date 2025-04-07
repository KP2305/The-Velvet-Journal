// Function to save the note
function saveNote() {
  const noteContent = document.getElementById('journalNote').value; // Get the content from the textarea
  
  if (noteContent.trim() !== "") {
    // Get existing notes from localStorage
    let savedNotes = JSON.parse(localStorage.getItem("journalNotes")) || [];

    // Add the new note to the array
    savedNotes.push(noteContent);

    // Save the updated array back to localStorage
    localStorage.setItem("journalNotes", JSON.stringify(savedNotes));

    // Display success message
    document.getElementById('saveMsg').textContent = "Note saved successfully!";
    document.getElementById('saveMsg').style.color = "green";

    // Clear the textarea after saving
    document.getElementById('journalNote').value = "";

    // Display all saved notes
    displaySavedNotes();
  } else {
    // If no content, alert the user
    document.getElementById('saveMsg').textContent = "Please write something before saving.";
    document.getElementById('saveMsg').style.color = "red";
  }
}

// Function to display all saved notes
function displaySavedNotes() {
  const savedNotesList = document.getElementById('savedNotesList');
  savedNotesList.innerHTML = ""; // Clear the list before repopulating

  // Get all saved notes from localStorage
  const savedNotes = JSON.parse(localStorage.getItem("journalNotes")) || [];

  // Create list items for each saved note
  savedNotes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = note;

    // Create a delete button for each note
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteNote(index);
    };

    listItem.appendChild(deleteButton);
    savedNotesList.appendChild(listItem);
  });
}

// Function to delete a specific note
function deleteNote(index) {
  // Get existing notes from localStorage
  let savedNotes = JSON.parse(localStorage.getItem("journalNotes")) || [];

  // Remove the note at the specified index
  savedNotes.splice(index, 1);

  // Save the updated array back to localStorage
  localStorage.setItem("journalNotes", JSON.stringify(savedNotes));

  // Refresh the displayed notes
  displaySavedNotes();
}

// Load and display saved notes when the page is loaded
window.onload = function() {
  displaySavedNotes();
}
