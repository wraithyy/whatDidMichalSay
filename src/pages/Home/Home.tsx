import { Title } from "@components";
import { db } from "@firestore";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Quote } from "@types";
import {
  collection,
  onSnapshot,
  DocumentSnapshot,
  DocumentData,
  QuerySnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Home = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showIndex, setShowIndex] = useState(0);
  useEffect(() => {
    getDocs(collection(db, "quotes")).then((snapshot) => {
      setQuotes(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Quote))
      );
    });
  }, []);

  useEffect(() => {
    randomQuote();
  }, [quotes]);

  const randomQuote = () => {
    setShowIndex(Math.floor(Math.random() * quotes.length));
  };

  if (!quotes || quotes.length <= 0) return <CircularProgress />;
  return (
    <Box textAlign="center">
      <Title>Náhodné Michalovo moudro</Title>
      <Card
        variant="outlined"
        color="text.primary"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          mt: 8,
          mb: 6,
        }}
      >
        <CardHeader title={quotes[showIndex].quote.cs} />
        {quotes[showIndex].serious && (
          <CardContent>
            <Typography
              component="p"
              variant="subtitle2"
              align="center"
              color="lightgray"
              gutterBottom
            >
              Ano, opravdu to myslel vážně
            </Typography>
          </CardContent>
        )}
      </Card>
      <Button variant="contained" onClick={randomQuote}>
        Náhodné moudro
      </Button>
    </Box>
  );
};

export default Home;
