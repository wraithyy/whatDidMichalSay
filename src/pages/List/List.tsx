import { Title } from "@components";
import { db } from "@firestore";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
} from "@mui/material";
import { Quote } from "@types";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const List = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  useEffect(() => {
    getDocs(collection(db, "quotes")).then((snapshot) => {
      setQuotes(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Quote))
      );
    });
  }, []);
  return (
    <Box textAlign="center">
      <Title>Michalova moudra</Title>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Moudro</TableCell>
            <TableCell>Quote</TableCell>
            <TableCell align="right">Myslel to vážně</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow
              key={quote.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {quote.quote.cs}
              </TableCell>
              <TableCell>{quote.quote.en}</TableCell>
              <TableCell align="right">
                {quote.serious && <CheckIcon />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
export default List;
