import Input from "../Input/Input";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function DiffPriceInputs({placeholder, getValue, type, required}) {

  return (
    <>
<Row className="mb-3 justify-content-center">  
            <Col md={4} className="mb-5">
                <Row className="mb-3 justify-content-center">  
                    <Col md={8} className="mb-3">
                        <Input  placeholder="Naziv veličine" />
                    </Col>
                    <Col md={4} className="mb-5">
                        <Input type="number" placeholder="Cijena" />
                    </Col>
                </Row>
            </Col>

            <Col md={4} className="mb-5">
                <Row className="mb-3 justify-content-center">  
                    <Col md={8} className="mb-3">
                        <Input  placeholder="Naziv veličine" />
                    </Col>
                    <Col md={4} className="mb-5">
                        <Input type="number" placeholder="Cijena" />
                    </Col>
                </Row>
            </Col>

            <Col md={4} className="mb-5">
                <Row className="mb-3 justify-content-center">  
                    <Col md={8} className="mb-3">
                        <Input  placeholder="Naziv veličine" />
                    </Col>
                    <Col md={4} className="mb-5">
                        <Input type="number" placeholder="Cijena" />
                    </Col>
                </Row>
            </Col>
            
        </Row>
    </>
  );
}

export default DiffPriceInputs;
