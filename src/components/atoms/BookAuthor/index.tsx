import Typography from "@mui/material/Typography";
// import {makeStyles as makeStyle} from '@mui/styles'
const BookAuthor = (props: any) => {
  return (
    <Typography variant="h6" mt={2} style={{ paddingLeft: "20px" }}>
      {props.bookAuthor}
    </Typography>
  );
};

export default BookAuthor;
