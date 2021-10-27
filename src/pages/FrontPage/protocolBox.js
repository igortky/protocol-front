import React from "react";
import { Row, FormInput } from "shards-react"
import textoTopo from "../../images/texto_topo.svg";

export default function protocolBox(protocolo) {
    return (
        <div>
            <input type="text" className="texto-topo" value="Foi gerado um protocolo para essa ligação"/>
            <Row>
                <FormInput className="teste" value={protocolo} style={{color: '#A8A8A8'}} />
            </Row>
        </div>
    );
}