import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Sample Title 1",
      content: `Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. dummy text of the printing and typesetting industry.`,
    },
    {
      id: 2,
      title: "Sample Title 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Sample Title 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "Sample Title 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);

  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleEdit = (id) => {
    setEditingNoteId(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSave = (id, newTitle, newContent) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, content: newContent }
          : note
      )
    );
    setEditingNoteId(null);
  };

  return (
    <div className="h-screen p-5">
      <div className="grid grid-cols-3 gap-4  overflow-auto p-3">
        {notes.map((note) => (
          <div key={note.id} className="bg-sky-700 p-5 rounded-lg shadow-lg">
            {editingNoteId === note.id ? (
              <>
                <input
                  type="text"
                  value={note.title}
                  onChange={(e) =>
                    setNotes(
                      notes.map((n) =>
                        n.id === note.id ? { ...n, title: e.target.value } : n
                      )
                    )
                  }
                  className="w-full text-xl font-bold border p-2 mb-3 rounded-lg"
                />
                <textarea
                  value={note.content}
                  onChange={(e) =>
                    setNotes(
                      notes.map((n) =>
                        n.id === note.id ? { ...n, content: e.target.value } : n
                      )
                    )
                  }
                  className="w-full h-[150px] border p-2 rounded-lg overflow-auto"
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() =>
                      handleSave(note.id, note.title, note.content)
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                <p className="h-[150px] overflow-auto p-2 rounded-lg border">
                  {note.content}
                </p>
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(note.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
