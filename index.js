function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serviceID = "service_4zb8hpt";
  const templateID = "template_uzhzgwh";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("email").value = "";
        console.log(res);
        alert("Sua Mensagem foi enviado com sucesso")

    })
    .catch(err=>console.log(err));

}
