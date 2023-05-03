import './App.css';
import {
    Avatar,
    Box,
    Button,
    Chip,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    styled,
    TextField, Typography
} from "@mui/material";
import User from "./components/user";
import {Provider} from "react-redux";
import store from "./store";
import ChipList from "./components/chipList";
import Product from "./components/product";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Box py={3} bgcolor={'primary.main'} color={'white'} width={'100%'}>
                {'Karizma-app'}
                </Box>
                <Stack mt={5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={5}>
                    <User/>
                    <Product/>
                    <ChipList />
                </Stack>
            </div>
        </Provider>
    );
}

export default App;
