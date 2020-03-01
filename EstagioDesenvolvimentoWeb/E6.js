import axios from "axios";

const getAddress = (cep) => {
    const address = "https://viacep.com.br/ws/";
    const url = `${address}${cep}/json/`;
    axios
      .get(url)
      .then(response => {
        if (response.data) {
          console.log(`${response.data.logradouro},
           ${response.data.localidade}/${response.data.uf}`);
        }
      })
      .catch(error => console.log(error));
  }

  getAddress(96010610)

