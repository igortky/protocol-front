import React from "react";
import { Col, Row, FormInput, FormCheckbox } from "shards-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: false 
    //[ 'bold', 'italic', 'underline', 'strike']
}

const formats = [
    'bold', 'italic', 'underline', 'strike'
]

export default function typingBox(temContato, setDestinatario, checkEmail,
    setCheckEmail, checkSms, setCheckSms, handleCheckEmail, handleCheckSms,
    setPlaceholder, placeholder, checkWhatsapp, setCheckWhatsapp, handleCheckWhatsapp,
    setTemContato, checado, setChecado, handleChange, setMensagem, mensagem, pattern, maxLength, destinatario) {
    if (checado === true) {
        return (
            <div>
                <FormInput style={{
                    left: "109px", top: "214px", width: "387px", height: "18px",
                    fontFamily: "Open Sans, sans-serif", fontSize: "12px",
                    // borderColor: "rgba(62, 62, 62, 0.38)", borderWidth: "1px", borderRadius: "5px",
                }} type="text" maxLength={maxLength} pattern={pattern} value={destinatario}
                    className="teste" placeholder={placeholder}
                    onChange={e => setDestinatario(e.target.value)}
                /> 
            </div>
        );
    } else {
        if (checkEmail) {
            return (
                <div>
                    <div className="wrap">
                        <FormInput style={{
                            left: "109px", top: "214px", width: "387px", height: "18px",
                            fontFamily: "Open Sans, sans-serif", fontSize: "12px",
                            // borderColor: "rgba(62, 62, 62, 0.38)", borderWidth: "1px", borderRadius: "5px",
                        }} type="text" maxLength={maxLength} pattern={pattern}
                            className="teste" placeholder={placeholder} value={destinatario}
                            onChange={e => setDestinatario(e.target.value)}
                        />
                         <p>
                                <FormCheckbox id="email"
                                    onChange={(e) => handleCheckEmail(setCheckEmail, setCheckSms,
                                        setPlaceholder, setCheckWhatsapp, setChecado)}
                                    checked={checkEmail}
                                    style={{
                                        left: "0px", borderColor: "rgba(62, 62, 62, 0.38)",
                                        borderWidth: "1px",
                                    }} />
                                <label for="email" className="label-checkbox">E-mail</label>
                                <FormCheckbox id="whatsapp"
                                    onChange={(e) => handleCheckWhatsapp(setCheckWhatsapp,
                                        setCheckEmail, setCheckSms, setPlaceholder, setChecado)}
                                    checked={checkWhatsapp} />
                                <label for="whatsapp" className="label-checkbox">Whatsapp</label>
                                {/* <FormCheckbox id="sms" checked={checkSms}
                                    onChange={(e) => handleCheckSmssetCheckSms, setCheckEmail, setPlaceholder,
                                        setCheckWhatsapp, setChecado)} />
                                <label for="sms" className="label-checkbox sms">SMS</label> */}
                                <FormCheckbox checked={checado} id="sem-contato"
                                    onChange={(e) =>
                                        handleChange(temContato, setTemContato,
                                            checado, setChecado, setPlaceholder)} />
                                <label for="sem-contato" class="label-checkbox">Nenhum</label>
                            </p>
                        <ReactQuill theme="snow" value={mensagem} onChange={(e) => setMensagem(e)}
                            formats={formats} modules={modules} className="mail-box"
                            placeholder="Digite uma mensagem..." style={{
                                fontWeight: "100", height: "88px", width: "421px", marginBottom: "8px",backgroundColor:"#F6F6F6"
                            }} />
                    </div>
                
                    <Row>
                        <Col>
                           
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="wrap">
                        <FormInput style={{
                            left: "109px", top: "214px", width: "387px", height: "18px",
                            fontFamily: "Open Sans, sans-serif", fontSize: "12px",
                            // borderColor: "rgba(62, 62, 62, 0.38)", borderWidth: "1px", borderRadius: "5px",
                        }} type="text" maxLength={maxLength} pattern={pattern}
                            className="teste" placeholder={placeholder} value={destinatario}
                            onChange={e => setDestinatario(e.target.value)}
                        />
                         <p>
                                <FormCheckbox id="email"
                                    onChange={(e) => handleCheckEmail(setCheckEmail, setCheckSms,
                                        setPlaceholder, setCheckWhatsapp, setChecado)}
                                    checked={checkEmail}
                                    style={{
                                        left: "0px", borderColor: "rgba(62, 62, 62, 0.38)",
                                        borderWidth: "1px",
                                    }} />
                                <label for="email" className="label-checkbox">E-mail</label>
                                <FormCheckbox id="whatsapp"
                                    onChange={(e) => handleCheckWhatsapp(setCheckWhatsapp,
                                        setCheckEmail, setCheckSms, setPlaceholder, setChecado)}
                                    checked={checkWhatsapp} />
                                <label for="whatsapp" className="label-checkbox">Whatsapp</label>
                                {/* <FormCheckbox id="sms" checked={checkSms}
                                    onChange={(e) => handleCheckSmssetCheckSms, setCheckEmail, setPlaceholder,
                                        setCheckWhatsapp, setChecado)} />
                                <label for="sms" className="label-checkbox sms">SMS</label> */}
                                <FormCheckbox checked={checado} id="sem-contato"
                                    onChange={(e) =>
                                        handleChange(temContato, setTemContato,
                                            checado, setChecado, setPlaceholder)} />
                                <label for="sem-contato" class="label-checkbox">Nenhum</label>
                            </p>
                        <textarea name="textarea" rows="5" cols="30" value={mensagem}
                            className="mensagem-usuario" placeholder="Digite uma mensagem..."
                            onChange={(e) => setMensagem(e.target.value)} />
                    </div>
                    <Row>
                        <Col>
                           
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}