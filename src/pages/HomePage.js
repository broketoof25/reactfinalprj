import { Container, Row} from 'reactstrap';
import HomeImg from '../../src/app/assets/img/homepage.png'


const HomePage = () => {
    return (
        <Container>
            
            <Row>
                <img src={HomeImg}/>
            </Row>  
        </Container>
    );
};

export default HomePage;