import { useState } from "react";
import "./form.css";
const Form = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    const [msg, setMsg] = useState({
        name: "",
        email: '',
        phone: ''
    });

  var message = JSON.stringify({
    token: "m7rl0v3jj5o1d0n2",
    to: "+996551244141",
    body: `*Новый клиент*: \n Имя: ${msg.name} \n Эл.почта: ${msg.email} \n Номер телефона: *_${msg.phone}_*`,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: message,
    redirect: "follow",
  };

    const handleSendMessage = (e) => {
    e.preventDefault();
    fetch(
      "https://api.ultramsg.com/instance42864/messages/chat",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result));
  };
  return (
    <form onSubmit={handleSendMessage} className="form">
      <input onChange={(e)=> setMsg({...msg, name: e.target.value})} placeholder="Имя" type="text" />
      <input onChange={(e)=> setMsg({...msg, email: e.target.value})} placeholder="эл.почта" type="email" />
      <input onChange={(e)=> setMsg({...msg, phone: e.target.value})} placeholder="Номер телефона" type="tel" />
      <button>ОСТАВИТЬ ЗАЯВКУ</button>
    </form>
  );
};
export default Form;
