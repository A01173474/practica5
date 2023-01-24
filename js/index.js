$ ('.agregar').click(function(){
    let producto = $("#newText").val()
    let elemento = $("<li>")
    elemento.text(producto)
    $(".Lista").append(elemento)
})

$(".Lista").on("click", 'li', function(){
    $(this).toggleClass('done')
  })