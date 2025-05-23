import { useRouter } from "next/router";
import { Container, Col, Row } from "react-bootstrap";

export default function CadastroEstoque() {
    const router = useRouter();
    
    const handleVoltar = () => {
        router.push("/estoque");
    };
    
    return (
        <Container fluid className="mt-1 d-flex flex-column align-items-center">
            <Row>
                <Col md={6} className="text-center">
                <p className="">Cadastro de Estoque</p>
            </Col>
                        <Col md={6} className="text-center">
                <p className="">Cadastro de Estoque</p>
            </Col>

            </Row>
            
         </Container>   

    );
    }