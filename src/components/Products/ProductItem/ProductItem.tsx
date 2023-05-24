import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Rating from '@mui/material/Rating';
import c from './ProductItem.module.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from '../../../redux/store-redux';
import {addToCartThunk, updateQuantityThunk} from '../../Cart/cartReducer';

type ProductPropsType = {
    productId: number
    image: string
    height: string
    alt: string
    title: string
    description: string
    category: number
}

export const ProductItem = (props: ProductPropsType) => {
    const {alt, height, image, title, description} = props
    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState<number>(0);

    const handleAddToCart = () => {
        dispatch(addToCartThunk(props.category, props.productId, quantity));
    };

    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    };
    const handleMinusClick = () => {
        if (quantity >=1) {
            setQuantity(quantity - 1);
        }
    };
    const handleQuantityChange = (event:any) => {
        setQuantity(Number(event.target.value));
    };


    return <Card sx={{
        width: 280,
        // height: 310,
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '3px'
    }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height={height}
                image={image}
                alt={alt}
            />

            <CardContent sx={{paddingBottom: '5px'}}>
                <div className={c.itemTitle}>{title}</div>
                <div className={c.itemDescription}>{description ? description : 'описание'}</div>
            </CardContent>

        </CardActionArea>

        <CardActions sx={{width: '100%', justifyContent:'center'}}>
            <Button size="small" color="primary"
                    onClick={handleAddToCart}
                    variant='outlined'
            >
                <span style={{fontWeight: 'bold'}}>В корзину</span>
            </Button>
            <div className={c.numericInput}>
                <IconButton aria-label="remove quantity" onClick={handleMinusClick}>
                    <RemoveIcon/>
                </IconButton>
                <input value={quantity} onChange={handleQuantityChange} />
                <IconButton aria-label="add quantity" onClick={handlePlusClick}>
                    <AddIcon/>
                </IconButton>
            </div>
        </CardActions>

        {/*<Rating*/}
        {/*    name="simple-controlled"*/}
        {/*    value={value}*/}
        {/*    size={'small'}*/}
        {/*    onChange={(event, newValue) => {*/}
        {/*        setValue(newValue);*/}
        {/*    }}*/}
        {/*/>*/}
    </Card>
};