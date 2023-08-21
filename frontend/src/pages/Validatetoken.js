import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function Validatetoken() {
  const [open, setOpen] = React.useState(false);
  const [payload, setPayload] = React.useState({
    token: "",
  });
  const [result, setResult] = React.useState(null);

  const handleClick = () => {
    callValidateTokenApi();
    setOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload((payload) => ({ ...payload, [name]: value }));
  };

  const callValidateTokenApi = () => {
    axios.post("/validator/token", payload).then((response) => {
      console.log(response.data);
      setResult(response.data.data);
    });
  };

  return (
    <>
      <Stack spacing={2} direction="row">
      <TextField
          label="Token Generated"
          name="token"
          value={payload.token}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Validate Token
        </Button>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
       {result ? <Alert severity="success">Valid Token!</Alert> : <Alert severity="error">Invalid Token!</Alert> }
      </Snackbar>
    </>
  );
}
