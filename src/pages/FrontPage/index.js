import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Form, Container } from "./styles";
import { Col, Row } from "shards-react"
import { handleSubmit } from "../../services/service.js";
import { createProtocolo } from "../../services/protocoloService";
import { tokenHandler } from "../../services/tokenService.js";
import Footer from "../../Components/Footer";
import protocolBox from "./protocolBox";
import typingBox from "./typingBox";
import logo from "../../images/logo.png";
import Unauthorized from "../Unauthorized/unauthorized.js";
import Buttons from "./buttons";

function FrontPage() {
  const { token } = useParams();
  const [destinatario, setDestinatario] = useState("");
  const [status, setStatus] = useState(true);
  const [temContato, setTemContato] = useState(true);
  // eslint-disable-next-line
  const [protocolo, setProtocolo] = useState(createProtocolo());
  const [checado, setChecado] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkSms, setCheckSms] = useState(false);
  const [placeholder, setPlaceholder] = useState("Digite o email de destino...");
  const [checkWhatsapp, setCheckWhatsapp] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [arquivo, setArquivo] = useState();
  const [pattern, setPattern] = useState();
  const [maxLength, setMaxLength] = useState();
  const [placeholderAnexo, setPlaceholderAnexo] = useState("");
  let teste = "";

  useEffect(() => {
    tokenHandler(token, setStatus);
  }, []);

  useEffect(() => {
    if (checado) {
      setPlaceholder("Digite o telefone do Cliente...")
      // eslint-disable-next-line
      setPattern("\d*");
      setMaxLength("11");
      setArquivo("");
      setPlaceholderAnexo("");
    } else {
      if (checkEmail) {
        setPlaceholder("Digite o email do Cliente...");
        setDestinatario("");
      } else if (checkSms) {
        setPlaceholder("Digite o telefone do cliente para envio do SMS...");
        setDestinatario("");
      } else if (checkWhatsapp) {
        setPlaceholder("Digite o Whatsapp do cliente...");
        setDestinatario("");
      }
    }
  }, [checado]);

  useEffect(() => {
    if (checkEmail) {
      setPlaceholder("Digite o email do Cliente...");
      setDestinatario("");
      setPattern("");
      setMaxLength("35");
      setMensagem("");
    }
  }, [checkEmail]);

  useEffect(() => {
    if (arquivo && arquivo.length === 1) {
      teste += arquivo[0].name + ". ";
      setPlaceholderAnexo(teste);
    } else if (arquivo && arquivo.length >= 1) {
      let i = 0;
      while (i <= arquivo.length - 1) {
        teste += arquivo[i].name + ", ";
        i++;
      }
      teste += arquivo[arquivo.length - 1].name + ". "
      setPlaceholderAnexo(teste);
    }
  }, [arquivo]);

  useEffect(() => {
    if (checkSms) {
      setPlaceholder("Digite o telefone do cliente para envio do SMS...");
      // eslint-disable-next-line
      setPattern("\d*");
      setMensagem("");
      setDestinatario("");
      setMaxLength("11");
    }
  }, [checkSms]);

  useEffect(() => {
    if (checkWhatsapp) {
      setPlaceholder("Digite o Whatsapp do cliente...");
      // eslint-disable-next-line
      setPattern("\d*");
      setMensagem("");
      setDestinatario("");
      setMaxLength("11");
    }
  }, [checkWhatsapp]);

  const handleClick = (handleSubmit, e, destinatario, protocolo,
    checado, checkSms, checkEmail, checkWhatsapp, mensagem, arquivo) => {
    e.preventDefault();
    handleSubmit(destinatario, protocolo, checado, checkSms,
      checkEmail, checkWhatsapp, mensagem, arquivo, setArquivo, setPlaceholderAnexo);
  }

  const handleChange = (temContato, setTemContato,
    checado, setChecado, setPlaceholder) => {
    if (!checado) {
      setChecado(true);
      setCheckWhatsapp(false);
      setCheckEmail(false);
      setCheckSms(false);
      setTemContato(!temContato);
      setPlaceholder("Digite o telefone do Cliente")
    } else {
      setChecado(false);
      setCheckWhatsapp(false);
      setCheckEmail(true);
      setCheckSms(false);
      setTemContato(!temContato);
    }
  }

  const handleCheckEmail = (setCheckEmail, setCheckSms,
    setPlaceholder, setCheckWhatsapp, setChecado) => {
    setCheckEmail(true);
    setCheckWhatsapp(false);
    setCheckSms(false);
    setChecado(false);
    setPlaceholder("Digite o email de destino")
  }

  const handleCheckSms = (setCheckSms, setCheckEmail, setPlaceholder,
    setCheckWhatsapp, setChecado) => {
    setCheckSms(true);
    setCheckWhatsapp(false);
    setCheckEmail(false);
    setChecado(false);
    setPlaceholder("Digite o telefone do cliente para envio do SMS");
  }

  const handleCheckWhatsapp = (setCheckWhatsapp,
    setCheckEmail, setCheckSms, setPlaceholder, setChecado) => {
    setCheckWhatsapp(true);
    setCheckEmail(false);
    setCheckSms(false);
    setChecado(false);
    setPlaceholder("Digite o Whatsapp do cliente...");
  }

  if (status === true) {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <img src={logo} alt="" style={{
                left: "157px", top: "-20px", width: "292px", height: "78px", marginTop: "20px", marginBottom: "30px"
              }} />
              {protocolBox(protocolo)}
              {typingBox(temContato, setDestinatario, checkEmail,
                setCheckEmail, checkSms, setCheckSms, handleCheckEmail, handleCheckSms,
                setPlaceholder, placeholder, checkWhatsapp, setCheckWhatsapp, handleCheckWhatsapp,
                setTemContato, checado, setChecado, handleChange, setMensagem, mensagem, pattern, maxLength, destinatario)}
              {Buttons(checado, handleSubmit, destinatario, protocolo,
                checkSms, checkEmail, checkWhatsapp, mensagem, arquivo, placeholderAnexo, setArquivo, handleClick)}
            </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  } else {
    return (
      <Unauthorized />
    );
  }
}
export default withRouter(FrontPage);