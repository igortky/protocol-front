import axios from "axios";
import Swal from "sweetalert2";
const routes = require("../config/routes.js");
var mensagemSucesso = "";
const telFilter = new RegExp(/[0-9]{11}/gm);
const emailFilter = new RegExp(/@\w+\.\w{2,3}(\.\w{2,3})?/gi);

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        }
    });
};

export const handleSubmit = async (destinatario, protocolo, salvaTelefone, checkSms,
    checkEmail, checkWhatsapp, mensagem, arquivo, setArquivo, setPlaceholderAnexo) => {
    const testResultEmail = emailFilter.test(destinatario);
    if (destinatario === "" && checkEmail) {
        Swal.fire({
            icon: "error",
            text: "Campo de e-mail deve ser preenchido.",
            timer: 5000,
            width: "539px",
            showConfirmButton: true
        })
    } else if (destinatario === "" && checkSms) {
        Swal.fire({
            icon: "error",
            text: "Campo de SMS deve ser preenchido",
            timer: 5000,
            width: "539px",
            showConfirmButton: true
        })
    } else if (destinatario === "" && checkWhatsapp) {
        Swal.fire({
            icon: "error",
            text: "Campo de Whatsapp deve ser preenchido.",
            timer: 5000,
            width: "539px",
            showConfirmButton: true
        })
    } else if (destinatario === "" && salvaTelefone) {
        Swal.fire({
            icon: "error",
            text: "Campo de telefone deve ser preenchido.",
            timer: 5000,
            width: "539px",
            showConfirmButton: true
        })
    }
    else {
        if (salvaTelefone === true) {
            mensagemSucesso = "Chamada salva com sucesso!";
        } else if (salvaTelefone === false && checkEmail === true
            && checkSms === false && checkWhatsapp === false) {
            mensagemSucesso = "Email enviado com sucesso!";
        } else if (salvaTelefone === false && checkEmail === false
            && checkSms === true && checkWhatsapp === false) {
            mensagemSucesso = "SMS enviado com sucesso!";
        } else if (salvaTelefone === false && checkEmail === false
            && checkSms === false && checkWhatsapp === true) {
            mensagemSucesso = "Mensagem de Whatsapp enviada com sucesso!";
        }

        if (salvaTelefone) {
            if (telFilter.test(destinatario) === false) {
                Swal.fire({
                    icon: "error",
                    text: "Chamada nao salva! Verifique o destinatario e sua conexao.",
                    timer: 5000,
                    width: "400px",
                    showConfirmButton: true
                })
            } else {
                try {
                    await axios.post(routes.routes.dashboard_backend + "/v1/saveData", {
                        destinatario: destinatario, protocolo: protocolo
                    }
                        // headers: {"content-type": "multipart/form-data"}
                    ).then(res => {
                        Swal.fire({
                            icon: "success",
                            text: mensagemSucesso,
                            timer: 5000,
                            width: "400px",
                            showConfirmButton: true
                        });
                    });
                } catch (err) {
                    Swal.fire({
                        icon: "error",
                        text: "Email nao enviado! Verifique o destinatario e sua conexao.",
                        timer: 5000,
                        width: "400px",
                        showConfirmButton: true
                    })
                }
            }
        } else if (destinatario && checkEmail) {
            if (testResultEmail) {
                if (arquivo) {
                    try {
                        let anexo = [];
                        for (let i = 0; i < arquivo.length; i++) {
                            const base64 = await convertBase64(arquivo[i]);
                            let type = arquivo[i].type;
                            let key = arquivo[i].name;
                            anexo.push({ data: base64, type: type, key: key })
                        }
                        await axios.post(routes.routes.dashboard_backend + "/v1/upload", {
                            anexo: anexo, protocolo
                        }).then((res) =>
                            axios.post(routes.routes.dashboard_backend + "/v1/send/mail", {
                                destinatario: destinatario, protocolo: protocolo, mensagem: mensagem,
                                anexo: res.data
                            }).finally(res => {
                                setArquivo("");
                                setPlaceholderAnexo("");
                                Swal.fire({
                                    icon: "success",
                                    text: mensagemSucesso,
                                    timer: 5000,
                                    width: "400px",
                                    showConfirmButton: true
                                });
                            }));
                    } catch (err) {
                        Swal.fire({
                            icon: "error",
                            text: "Email nao enviado! Verifique o destinatario e sua conexao.",
                            timer: 5000,
                            width: "400px",
                            showConfirmButton: true
                        })
                    }
                } else {
                    try {
                        await axios.post(routes.routes.dashboard_backend + "/v1/send/mail", {
                            destinatario: destinatario, protocolo: protocolo, mensagem: mensagem,
                        }).then(res => {
                            Swal.fire({
                                icon: "success",
                                text: mensagemSucesso,
                                timer: 5000,
                                width: "400px",
                                showConfirmButton: true
                            });
                        });
                    } catch (err) {
                        Swal.fire({
                            icon: "error",
                            text: "Email nao enviado! Verifique o destinatario e sua conexao.",
                            timer: 5000,
                            width: "400px",
                            showConfirmButton: true
                        })
                    }
                }
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Email nao enviado! Verifique o destinatario e sua conexao.",
                    timer: 5000,
                    width: "400px",
                    showConfirmButton: true
                })
            }
        } else if (destinatario && checkSms === true) {
            if (telFilter.test(destinatario) === false) {
                Swal.fire({
                    icon: "error",
                    text: "SMS nao enviado! Verifique o destinatario e sua conexao.",
                    timer: 5000,
                    width: "400px",
                    showConfirmButton: true
                })
            } else {
                try {
                    await axios.post(routes.routes.dashboard_backend + "/v1/send/sms", {
                        destinatario: destinatario, protocolo: protocolo, mensagem: mensagem
                    }).then(res => {
                        Swal.fire({
                            icon: "success",
                            text: mensagemSucesso,
                            timer: 5000,
                            width: "400px",
                            showConfirmButton: true
                        });
                    });
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        text: "SMS nao enviado! Verifique o destinatario e sua conexao.",
                        timer: 5000,
                        width: "400px",
                        showConfirmButton: true
                    })
                }
            }
        } else if (destinatario && checkWhatsapp) {
            if (arquivo) {
                try {
                    let anexo = [];
                    for (let i = 0; i < arquivo.length; i++) {
                        const base64 = await convertBase64(arquivo[i]);
                        let type = arquivo[i].type;
                        let key = arquivo[i].name;
                        anexo.push({ data: base64, type: type, key: key })
                    }
                    await axios.post(routes.routes.dashboard_backend + "/v1/upload", {
                        anexo: anexo, protocolo
                    }).then((res) => axios.post(routes.routes.dashboard_backend + "/v1/send/wpp",
                        {
                            destinatario: destinatario, protocolo: protocolo,
                            mensagem: mensagem, anexo: res.data
                        }).finally(res => {
                            setArquivo("");
                            setPlaceholderAnexo("");
                            Swal.fire({
                                icon: "success",
                                text: mensagemSucesso,
                                timer: 5000,
                                width: "400px",
                                showConfirmButton: true
                            });
                        }))
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        text: "Mensagem de Whatsapp nao enviada! Verifique o destinatario e sua conexao.",
                        timer: 5000,
                        width: "400px",
                        showConfirmButton: true
                    })
                }
            } else {
                try {
                    await axios.post(routes.routes.dashboard_backend + "/v1/send/wpp", {
                        destinatario: destinatario, protocolo: protocolo, mensagem: mensagem
                    }).then(res => {
                        Swal.fire({
                            icon: "success",
                            text: mensagemSucesso,
                            timer: 5000,
                            width: "400px",
                            showConfirmButton: true
                        });
                    })
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        text: "Mensagem de Whatsapp nao enviada! Verifique o destinatario e sua conexao.",
                        timer: 5000,
                        width: "400px",
                        showConfirmButton: true
                    })
                }
            }
        }
    }
    setArquivo("");
    setPlaceholderAnexo("");
}