$ ('.agregar').click(function(e){  //Boton agregar
    e.preventDefault();
    let texto = $("#newText").val();

    if (texto != ""){
        $(".Lista").append(`
        <div clas="shopItem">
        <li class="lis">
        <p class= "itemShop">${texto}</p>
        <button class= "checar" type ="text"> Check </button>
        <button class= "del" type="text"> Delete </button>
        <p></p>
        `);
        
    }
})

$(".Lista").on('click','checar',function(event){  //Boton check
    event.preventDefault();
    $(this).parent().toggleClass('chec')
})


$(".Lista").on('click','del',function(event){  //Boton borrar
    event.preventDefault();
    $(this).parent().parent().remove();
})
