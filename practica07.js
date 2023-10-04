const app = document.getElementById("app");
const Fieldset = (params) => {
  return `<fieldset>
        <legend>${params.nombreFieldset}</legend>
          <label>${params.label1}</label>
          <input type="text" id="nombre"></input>
          <label>${params.label2}</label>
          <input type="text" id="email"></input>
        </fieldset>`;
};
app.innerHTML = Fieldset({
  nombreFieldset: "Información personal",
  label1: "Nombre:",
  label2: "Correo electrónico:",
});
app.innerHTML += Fieldset({
  nombreFieldset: "Información de dirección",
  label1: "Dirección:",
  label2: "Ciudad:",
});

const formulario = document.getElementById("envio");
formulario.addEventListener("click", (evento) => {
  evento.preventDefault();
  let n = document.getElementById("nombre").value;
  let e = document.getElementById("email").value;
  let d = document.getElementById("dierccion").value;
  let c = document.getElementById("ciudad").value;
  alert(n + e + d + c);
});
