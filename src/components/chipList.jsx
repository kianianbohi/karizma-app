import {
    Box,
    Chip,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import store from "../store";
import {removeItem} from "../store/actions";
import {useSelector} from "react-redux";

function ChipList() {
    const ListItemChip = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const chipList = useSelector(state=>state)


    const handleDeleteFromList = (index) => {
        store.dispatch(removeItem(index))
    };


    return (
        <Box
            p={2}
            width={400}
            height={725}
            bgcolor={'white'}
        >
            <Typography textAlign={'start'}  variant="h6" component="div">
                Tap to delete
            </Typography>
            <Stack

                direction={'row'}
                justifyContent={'start'}
                alignContent={'start'}
                flexWrap={'wrap'}
                sx={{
                    overflow: 'scroll',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipList?.map((data,index)=><ListItemChip key={index}>
                    <Chip
                        label={data.label}
                        color={'primary'}
                        onClick={()=>handleDeleteFromList(index)}
                    />
                </ListItemChip>)}
            </Stack>
        </Box>
    );
}

export default ChipList;
