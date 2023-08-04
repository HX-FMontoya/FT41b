/* const button = document.getElementById("boton"); */
const PATH = "http://localhost:5000/amigos";
const button = $("#boton");
const list = $("#lista");
const image = $("#image");
//
const getFriends = (response) => {
  setTimeout(() => {
    response.forEach((element) => {
      list.append(`<li>${element.name}</li>`);
    });
    image.hide();
  }, 500);
};

const getFriend = (id, type) => {
  console.log(typeof id);
  $.get(`${PATH}/${id}`, (response) => {
    appendFriend(response.name, type);
  });
};

const appendFriend = (friend, type) => {
  console.log(friend);
  if (type === "getFriend") {
    const amigo = $("#amigo");
    amigo.empty();
    amigo.text(friend);
  } else {
    $("#success").text(`${friend} borrado con exito`);
  }
};

image.hide();

$("#boton").click(() => {
  // necesitamos hacer un get
  image.show();
  list.empty();
  $.get(PATH, getFriends);
});

const inputFriend = $("#input");
const buttonFriend = $("#search");

buttonFriend.click(() => {
  console.log("hola");
  // extraernos lo que escribio el usuario
  // buscar por medio de la url al usuario
  const id = inputFriend.val();
  getFriend(id, "getFriend");
});

const inputDelete = $("#inputDelete");
const buttonDelete = $("#delete");

buttonDelete.click(() => {
  console.log("delete");
  const id = inputDelete.val();
  const response = getFriend(id, "deleteFriend");
  $.ajax({
    url: `${PATH}/${id}`,
    type: "DELETE",
    success: function () {
      console.log("voy a eliminar");
      console.log(response);
    },
  });
});
