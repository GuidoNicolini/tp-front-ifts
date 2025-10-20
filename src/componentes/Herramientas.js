import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import androidImagen from '../assets/img/android.webp'
import cssImagen from '../assets/img/css.webp'
import htmlImagen from '../assets/img/html.webp'
import pythonImagen from '../assets/img/python.webp'
import sqlImagen from '../assets/img/sql.avif'
import jsImagen from '../assets/img/js.webp'

function ShapeExample() {
    return (
        <Container className="justify-content-md-center">
            <Row>
                <Col>
                    <Image src={androidImagen} fluid roundedCircle />
                </Col>
                <Col>
                    <Image src={cssImagen} fluid roundedCircle />
                </Col>
                <Col>
                    <Image src={htmlImagen} fluid roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={pythonImagen} fluid roundedCircle />
                </Col>
                <Col>
                    <Image src={sqlImagen} fluid roundedCircle />
                </Col>
                <Col>
                    <Image src={jsImagen} fluid roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default ShapeExample;