import Image from "../../atoms/Image/image-book-cover/index";
import BookName from "../../atoms/BookName/index";
import BookAuthor from "../../atoms/BookAuthor/index";
import BookCardDetails from "../../molecules/BookCardDetails/index"
import Paper from "@mui/material/Paper"

const Card = (props:any) => {
    return(
        <Paper variant="outlined" style={{width: '350px', borderRadius :'15px', margin:'10px'}}>
            <Image imageURL={props.imageURL} />
            <BookName bookName={props.bookName} />
            <BookAuthor bookAuthor={props.author} />
            <BookCardDetails />
        </Paper>
    );
}

export default Card;
