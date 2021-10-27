import anexo from "../../images/box_anexo.svg"
import logo from "../../images/logo.png";
import React from "react";

function Buttons(checado, handleSubmit, destinatario, protocolo,
    checkSms, checkEmail, checkWhatsapp, mensagem, arquivo, placeholderAnexo, setArquivo, handleClick) {
    if (checado) {
        return (
            <div className="buttons">
                <button className="button" onClick={(e) =>
                    handleClick(handleSubmit, e, destinatario, protocolo,
                        checado, checkSms, checkEmail, checkWhatsapp, mensagem, arquivo)}>
                    <span>Enviar</span></button>
            </div>
        );
    } else {
        return (
            <div className="buttons">
                <input type="text" readOnly style={{
                    border: "none", width: "230px", height: "20px"
                }}  placeholder={placeholderAnexo} />
                <label className="anexos" for="selecao-arquivo">
                    <img src={anexo} alt="" />
                </label>
                <input id="selecao-arquivo" type="file" multiple
                    onChange={(e) => setArquivo(e.target.files)} />
                <button className="button" onClick={(e) =>
                    handleClick(handleSubmit, e, destinatario, protocolo,
                        checado, checkSms, checkEmail, checkWhatsapp, mensagem, arquivo)}>
                    <span>Enviar</span></button>
            </div>
        );
    }
}

export default Buttons;