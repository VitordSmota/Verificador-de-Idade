function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade < 4) {
        //bebe
        img.setAttribute("src", "bebeman.png");
      } else if (idade >= 4 && idade < 18) {
        //criança
        img.setAttribute("src", "criancaman.png");
      } else if (idade >= 18 && idade < 50) {
        //adulto
        img.setAttribute("src", "adulto.png");
      } else {
        //idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 4) {
        //bebe
        img.setAttribute("src", "bebeWoman.png");
      } else if (idade >= 4 && idade < 18) {
        //criança
        img.setAttribute("src", "criancawoman.png");
      } else if (idade >= 18 && idade < 50) {
        //adulto
        img.setAttribute("src", "adulta.png");
      } else {
        //idoso
        img.setAttribute("src", "idosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. `;
    res.appendChild(img);
  }
}
