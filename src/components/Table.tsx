import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, styled } from "@mui/material";
import { tableRows } from "../data";

const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const Bold = styled("span")({
  fontWeight: "bold",
  marginBottom: 7,
});
const SecondaryText = styled("span")({
  color: "#A4A6A8",
  marginBottom: 7,
  fontSize: 13,
});

export default function BasicTable() {
  return (
    <>
      <TableContainer
        sx={{
          marginTop: 5,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        component={Paper}
      >
        <Typography variant="h4">Refferals - 345</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Referal event</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Advocate</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Friend</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Referal Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow
                key={row.advocate}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box>
                    <Bold>Purchase</Bold>
                    <SecondaryText>{row.referal.date}</SecondaryText>
                    <Bold>{row.referal.amount}</Bold>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Bold>{row.advocate}</Bold>
                    <span>Advocate</span>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Bold>{row.friend}</Bold>
                    <span>Friend</span>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Bold>{row.status.code}</Bold>
                    {row.status.checking ? (
                      <SecondaryText>Passed fraud checks</SecondaryText>
                    ) : (
                      <SecondaryText style={{ color: "red" }}>
                        Marked as fraud
                      </SecondaryText>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
