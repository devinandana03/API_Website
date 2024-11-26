import axios from "axios";

export const customPostOperation = () => {
  axios
    .post("http://localhost:8000/text", { id: "3", name: "Hi I am a Creator" })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


};

export const customSingleGetOperation = (res) => {
    axios
      .get(`http://localhost:8000/text/${res}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    export const customUpdateOperation = () => {
        axios
          .put("http://localhost:8000/text/1",{name:"Hi i am server"})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }