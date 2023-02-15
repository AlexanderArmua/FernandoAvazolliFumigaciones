const formulario = document.querySelector("#form");

formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const $buttonMailto = document.createElement("a");
  const form = new FormData(this);
  $buttonMailto.setAttribute("href", `mailto:fvcontroldeplagas@gmail.com?subject=${form.get("name")} - Tel: ${form.get("telefono")} - Email: ${form.get("email")} &body=${form.get("message")}`);
  $buttonMailto.click();
  
}