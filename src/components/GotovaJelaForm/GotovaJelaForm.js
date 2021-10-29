import { useState } from 'react';
import Input from '../sharedComponents/Input/Input';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from '../sharedComponents/Select/Select';
import DiffPriceInputs from '../sharedComponents/DiffPriceInputs/DiffPriceInputs';
import Prilozi from '../sharedComponents/Prilozi/Prilozi';

function GotovaJelaForm() {
    const [image, setImage] = useState(null)
    const [isDiffPrice, setIsDiffPrice] = useState(false)
    const [naziv, setNaziv] = useState("")

    const getImg = file => setImage(file)
    
    const getNaziv = e => setNaziv(e)
    
    const sendData = (e) => {
        e.preventDefault()
        console.log(naziv)
        console.log(image)
    }

    

  return (
    <form onSubmit={sendData}>
      <Container className="text-center">
        <Row className="mb-3 justify-content-center">  
            <Col md={4}>
                <Input type="file" placeholder="asd" getValue={getImg}/>
            </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
                <Input required placeholder="Naziv jela" getValue={getNaziv}/>
            </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
                <Input disabled={isDiffPrice} type="number" required placeholder="Cijena" getValue={getNaziv}/>
            </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
                <Input placeholder="Opis jela" getValue={getNaziv}/>
            </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
            <Select options={["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"]}/>
            </Col>
        </Row>

        <Row className="mb-3 justify-content-center">
            <Col md={4}>
            <Select options={["Kuhana jela", "Jela sa rostilja", "Pizza"]}/>
            </Col>
        </Row>

        <Row className="mb-3 justify-content-center">
            <Col md={4}>
                <span>Da li imate različite cijene za ovo jelo? </span>
                <input type="checkbox" value={isDiffPrice} onChange={() => setIsDiffPrice(!isDiffPrice)}/>
            </Col>
        </Row>

        {isDiffPrice && <DiffPriceInputs />}
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
            <button type="submit" className="w-100">kako</button>
            </Col>
        </Row>
        <Prilozi />

    </Container>
    </form>
  );
}

export default GotovaJelaForm;
