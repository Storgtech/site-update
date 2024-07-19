function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serviceID = "YOUR_SERVICE_ID";
  const templateID = "YOUR_TEMPLETE_ID";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Sua Mensagem foi enviado com sucesso")

    })
    .catch(err=>console.log(err));

}
