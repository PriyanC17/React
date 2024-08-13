import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const init_URL = "https://media.istockphoto.com/id/624719836/photo/sandstorm-approaching-merzouga-settlement-in-erg-chebbi-desert-morocco-africa.webp?b=1&s=170667a&w=0&k=20&c=5MLdP_w9t3pu4UyjSV2RJzY-RCHhyq50vk4Xn9KmPEM=";
    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const COLD_URL = "https://media.istockphoto.com/id/660587298/photo/snowcapped-himalayan-mountain.webp?b=1&s=170667a&w=0&k=20&c=WY416IyCCHLOvxfT8Y8XIu1uJ7c3_ANb4dVeJ4aKFlE=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    return ( 
        <div className="info-box">
            <div style={{display:"flex",justifyContent:"center"}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL
                            : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;{ 
                                info.humidity > 80 
                                ? <ThunderstormIcon/> 
                                : info.temp > 15 
                                ? <WbSunnyIcon/>
                                : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.minTemp}&deg;C</div>
                        <div>Max Temp= {info.maxTemp}&deg;C</div>
                        <div>The weather can be described as <i>{info.weather}</i> & feelsLike {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}