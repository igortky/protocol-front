import React from "react";
import logo from "../../images/logo.png"
import { Container } from "shards-react";
import Footer from "../../Components/Footer"
import "./styles.css";

function Unauthorized() {
    return (
        <Container>
            <div class="wrapper">
                <img id="logo" src={logo} alt="logo hconnect" />
                <div class="content">
                    <p class="permition">No momento, você não tem permissão
                        para acessar esta página.</p>
                    <p class="acess">Para solicitar acesso, entre em contato com a <span class="dixhealth">DixHealth.</span></p>
                    <p class="contact">contato@dixhealth.com.br</p>
                    <p class="contact">+55 (55) 99698 0112</p>
                    <p class="contact">+55 (51) 98598 0078</p>
                </div>
            </div>
            <Footer />
        </Container>
    )
};

export default Unauthorized;