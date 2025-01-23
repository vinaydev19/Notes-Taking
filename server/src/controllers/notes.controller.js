import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import verifyJWT from "../middlewares/auth.middleware.js";
import { Note } from "../models/note.model.js";

const createNote = asyncHandler(async (req, res) => {
  // get data for user (title, content)
  // validate the data
  // we take user id for verifyJWT that return the user in user we have userid
  // create notes using Note model
  // return res

  const { title, content } = req.body;

  if (!title || !content) {
    throw new ApiError(403, "all field is required");
  }

  const note = await Note.create({
    title,
    content,
    userId: req.user._id,
  });

  console.log(note);

  return res
    .status(200)
    .json(new ApiResponse(200, { note }, "note create successfully"));
});

const getAllUserNotes = asyncHandler(async (req, res) => {
  // we take user id for verifyJWT that return the user in user we have userid
  // then using userid can i get note data from db
  // return the res

  const userId = req.user._id;

  const Allnotes = await Note.find({ userId });

  return res
    .status(200)
    .json(new ApiResponse(200, { Allnotes }, "successfully fatch all notes"));
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const noteId = req.params.noteId;

  if (!title || !content) {
    throw new ApiError(403, "all field are required");
  }

  const note = await Note.findByIdAndUpdate(
    noteId,
    {
      $set: {
        title,
        content,
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, note, "note updated successfully"));
});

const deleteNote = asyncHandler(async (req, res) => {
  const noteId = req.params.noteId;

  const note = await Note.findByIdAndUpdate(noteId);

  return res
    .status(200)
    .json(new ApiResponse(200, note, "note delete successfully"));
});

export { createNote, getAllUserNotes, updateNote, deleteNote };
