import Carousel from 'react-bootstrap/Carousel';
import loki from '../images/loki.jpg'
import flash from '../images/flash.jpg'
import spidy from '../images/spidy.jpg'


function Carroussel() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>

                <img src={flash} alt="" className='endgame' />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                   <img src={loki} alt=""  className='endgame' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={spidy} alt="" className='endgame' />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carroussel;