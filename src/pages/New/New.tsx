import { db } from "@firestore";
import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Title } from "@components";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const New = () => {
  const [quoteCs, setQuoteCs] = useState("");
  const [quoteEn, setQuoteEn] = useState("");
  const [serious, setSerious] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const addQuote = () => {
    if (!quoteCs) {
      setError(true);
      return;
    }
    addDoc(collection(db, "quotes"), {
      quote: { cs: quoteCs, en: quoteEn },
      serious,
    });
    setError(false);
    setQuoteCs("");
    setQuoteEn("");
  };
  return (
    <Card
      variant="outlined"
      color="text.primary"
      sx={{
        mt: 8,
        mb: 6,
        p: 2,
      }}
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_FIREBASE_RECAPTCHA}
      >
        <GoogleReCaptcha onVerify={() => setVerified(true)} />
        <Title>Přidat novou hlášku</Title>
        <FormControl required error={error} fullWidth sx={{ pb: 2 }}>
          <TextField
            type="text"
            error={error}
            value={quoteCs}
            onChange={(e) => setQuoteCs(e.target.value)}
            label="Citace"
          />
        </FormControl>
        <FormControl fullWidth sx={{ pb: 2 }}>
          <TextField
            type="text"
            value={quoteEn}
            onChange={(e) => setQuoteEn(e.target.value)}
            label="Quote"
          />
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={serious}
              onChange={(e) => setSerious(e.target.checked)}
            />
          }
          label="Myslel to vážně?"
        />
        {error && (
          <Typography variant="body1" color="error" gutterBottom>
            Vyplňte prosím citaci
          </Typography>
        )}
        <Grid container justifyContent="flex-end">
          <Button variant="contained" onClick={addQuote} disabled={!verified}>
            Přidat
          </Button>
        </Grid>
      </GoogleReCaptchaProvider>
    </Card>
  );
};

export default New;
