import React from "react";
import {
  Button,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";

function NotesForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Note
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Note</DialogTitle>
          <DialogContent>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <div className="flex flex-col  mt-5">
              <label className="pb-2">Content</label>
              <textarea
                className="outline-1 p-3"
                rows={10}
                cols={50}
              ></textarea>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default NotesForm;
