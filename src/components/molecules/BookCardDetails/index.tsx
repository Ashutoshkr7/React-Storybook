import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BookAuthor from '../../atoms/BookAuthor/index'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Icon from "../../atoms/Icon/AlarmIcon";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BookCardDetails = (props:any) => {

    return(
        <div style={{width: '350px', padding:'15px'}}>
        <Typography  mt={2}>
            <BookAuthor />
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Icon icon={<AccessAlarmIcon color="primary" />} />
                <Typography>
                    13-minute read
                </Typography>
        </Box>
        <Box sx={{display: 'flex',  justifyContent: 'flex-end', paddingRight: '30px'}}>
                <Icon icon={<MoreHorizIcon />}/>
        </Box>
    </div>
    );
    
}

export default BookCardDetails;

