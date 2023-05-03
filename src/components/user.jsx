import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
} from "@mui/material";
import {useEffect, useState} from "react";
import {Image} from "@mui/icons-material";
import store from "../store";
import {addToList, removeAll} from "../store/actions";

function User() {

    const [users, setUsers] = useState();
    const [filteredUsers, setFilteredUsers] = useState();
    const [searchUser, setSearchUser] = useState('');


    const getApiDataUser = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/users"
        ).then((response) => response.json());

        // update the state
        setUsers(response);
        setFilteredUsers(response);
    };

    useEffect(()=>{
        getApiDataUser()
    },[])


    const handleSearchUser = (value) => {
        setSearchUser(value)
        setFilteredUsers(users?.filter(item=>{
            if (item.username.includes(value)){
                return item
            }
        }))
    };

    const addUserToList = (record) => {
        store.dispatch(addToList(record.username))
    };

    const removeAllChips = () => {
        store.dispatch(removeAll())
    };


    return (
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={5}>
                <Stack width={400} height={725} p={2} bgcolor={'white'} sx={{
                    backgroundColor: 'white',
                    overflow: 'scroll',
                }}>
                    <Box>
                        <TextField
                            id={'outlined-basic-user'}
                            variant={'outlined'}
                            placeholder={'search...'}
                            fullWidth
                            onChange={(e)=>handleSearchUser(e.target.value)}
                            value={searchUser}
                        />
                    </Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {filteredUsers?.map((item)=><ListItem key={item.id} sx={{cursor:'pointer'}} onClick={()=>addUserToList(item)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <Image/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.username} secondary={item.email}/>
                        </ListItem>)}
                    </List>
                    <Button variant="contained" onClick={removeAllChips}>Clear List</Button>
                </Stack>
            </Stack>
    );
}

export default User;
