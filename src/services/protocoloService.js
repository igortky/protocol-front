module.exports = {
    createProtocolo() {
        const now = new Date();
        const protocolo = now.getFullYear() + "" + (now.getMonth() + 1) + "" +
            + now.getDate() + "" + now.getSeconds() + "" + now.getMinutes() + "" +
            + now.getHours() + "" + Math.floor(Math.random() * 10) + "" +
            + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) +
            + "" + Math.floor(Math.random() * 10);
        return protocolo;
    }
}