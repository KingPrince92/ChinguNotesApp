const userNotes = [
  {
    title: "My Very First Note",
    notetext: "it's incredible!",
  },
  {
    title: "my second note",
    notetext: "feed my dogs",
  },
];

const notesContainer = document.querySelector(".notes-container");
const notesForm = document.querySelector(".notes-form");
const modal = document.querySelector(".modal");
const editText = document.getElementById("#edittext");
const edittitle = document.getElementById("#edittitle");
const editButton = document.querySelector("submitEdit");

const createNote = () => {
  notesContainer.innerHTML = "";
  userNotes.forEach((note, i) => {
    const newNote = document.createElement("div");
    newNote.classList.add("note");
    const noteTitle = document.createElement("div");
    const notesContent = document.createElement("div");
    const trash = document.createElement("button");
    const edit = document.createElement("button");
    trash.classList.add("fa-solid", "fa-trash");
    edit.classList.add("fa-solid", "fa-pen");
    trash.setAttribute("data-index", i);
    edit.setAttribute("data-index", i);
    noteTitle.textContent = note.title;
    notesContent.textContent = note.notetext;
    newNote.append(noteTitle, notesContent, trash, edit);
    notesContainer.append(newNote);
  });
};

notesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const notetext = document.querySelector("#note-input").value;
  const newNote = {
    title,
    notetext,
  };
  userNotes.push(newNote);
  createNote();
});

const toggleHide = () => {
  modal.classList.toggle("hide");
};

//removing a note
notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index");
    userNotes.splice(index, 1);
    createNote();
  }
});

//editing text
notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen")) {
    const index = e.target.getAttribute("data-index");
    toggleHide();
    editNote(index);
  }
});

const editNote = (cardIndex) => {
  const title = document.querySelector("#edittitle").value;
  const notetext = document.querySelector("#edittext").value;
  note[cardIndex].title = title;
  note[cardIndex].notetext = notetext;
  createNote();
};

editButton.addEventListener("click", editNote);

createNote();

// notesContainer.addEventListener("click", (e) => {
//   if (e.target.classList.contains("fa-pen")) {
//     const changingNote = e.target.parentElement;
//     console.log(e.target.parentElement);
//     toggleHide();
//   }
// });

// //editing text
// editButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const title = document.querySelector("#edittitle").value;
//   const notetext = document.querySelector("#edittext").value;
//   openEdit[0].title = title;
//   openEdit[0].notetext = notetext;
//   toggleHide();
//   createNote();
//   openEdit = [];
// });
// createNote();
