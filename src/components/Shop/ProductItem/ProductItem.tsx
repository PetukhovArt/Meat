import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

type ProductPropsType = {
    image: string
    height: string
    alt: string
    title: string
    description: string
}

export const ProductItem = (props: ProductPropsType) => {
    const {alt, height,image,title,description}=props

    return (
        <Card sx={{ width: 280 , height:280 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height}
                    image={image}
                    alt={alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description? description : 'описание'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Купить
                </Button>
            </CardActions>
        </Card>
    );
};