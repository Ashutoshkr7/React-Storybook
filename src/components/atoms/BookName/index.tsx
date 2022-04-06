import Typography from '@mui/material/Typography';
const BookName = (props:any) => {
    return (
        <Typography variant="h5" mt={2} style={{fontWeight:900, paddingLeft:'20px'}}>
            {props.bookName}
        </Typography>
    );
}

export default BookName;