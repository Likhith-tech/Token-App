import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

export default function Generatetoken() {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);
  const [generatedToken, setGeneratedToken] = React.useState("");
  const [numbers, setNumbers] = React.useState("");

  const handleClick = () => {
    setOpen(true);
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  const handleChange = (event) => {
    setNumbers(numbers + event.target.value);
  };

  const callGenerateTokenApi = () => {
    axios
      .get("/generator/token?avaliableDigits=" + numbers)
      .then((response) => {
        console.log(response.data);
        setGeneratedToken(response.data.data);
      });
  };

  return (
    <>
      <Stack spacing={2} direction="column">
        <FormControl component="fieldset">
          <FormLabel component="legend">Select numbers</FormLabel>
          <FormGroup aria-label="position" row>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
              <FormControlLabel
                value={num}
                control={<Checkbox />}
                label={num}
                onChange={handleChange}
                labelPlacement="start"
              />
            ))}
          </FormGroup>
        </FormControl>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={callGenerateTokenApi}>
            Generate Token
          </Button>
          <TextField
            id="outlined-read-only-input"
            label="Token Generated"
            value={generatedToken}
            inputRef={inputRef}
          />
          <IconButton aria-label="copy" onClick={handleClick}>
            <ContentCopyIcon color="primary" />
          </IconButton>
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
        <Alert severity="success">Token copied to clipboard!</Alert>
      </Snackbar>
    </>
  );
}
