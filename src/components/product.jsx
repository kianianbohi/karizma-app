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

function Product() {

    const [products, setProducts] = useState();
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');

    const getApiDataProducts = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        ).then((response) => response.json());

        // update the state
        setProducts(response);
        setFilteredProduct(response);
    };

    useEffect(()=>{
        getApiDataProducts()
    },[])

    const handleSearchProduct = (value) => {
        setSearchProduct(value)
        setFilteredProduct(products?.filter(item=>{
            if (item.title.includes(value)){
                return item
            }
        }))
    };

    const addProductToList = (record) => {
        store.dispatch(addToList(record.title))
    };

    const removeAllChips = () => {
        store.dispatch(removeAll())
    };


    return (
        <Stack width={400} height={725} p={2} bgcolor={'white'} sx={{
            backgroundColor: 'white',
            overflow: 'scroll',
        }}>
            <Box>
                <TextField
                    id={'outlined-basic-product'}
                    variant={'outlined'}
                    placeholder={'search...'}
                    fullWidth
                    onChange={(e)=>handleSearchProduct(e.target.value)}
                    value={searchProduct}
                />
            </Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {filteredProduct?.map((item)=><ListItem key={item.id}  sx={{cursor:'pointer'}} onClick={()=>addProductToList(item)}>
                    <ListItemAvatar>
                        <Avatar>
                            <Image/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.title} secondary={item.description}/>
                </ListItem>)}
            </List>
            <Button variant="contained" onClick={removeAllChips}>Clear List</Button>
        </Stack>
    );
}

export default Product;
