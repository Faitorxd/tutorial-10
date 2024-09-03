let casas = [{
    nombre:"Casa Bonita",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://photos.zillowstatic.com/fp/50b18a1ef4c1cede4fb616e9dcb8f330-cc_ft_960.webp",
    direccion:"2001 Meridian Ave APT 101, Miami Beach, FL 33139"
},
{
    nombre:"Casa Bonita2324234",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://photos.zillowstatic.com/fp/d787e96e48083b7f9ef5fd100e16cbd3-cc_ft_768.webp",
    direccion:"2001 Meridian Ave APT 101, Miami Beach, FL 33139"
},
{
    nombre:"Casa Bonita2324234",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://photos.zillowstatic.com/fp/50b18a1ef4c1cede4fb616e9dcb8f330-cc_ft_960.webp",
    direccion:"2001 Meridian Ave APT 101, Miami Beach, FL 33139"
},
{
    nombre:"Casa Bonita2324234",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://photos.zillowstatic.com/fp/50b18a1ef4c1cede4fb616e9dcb8f330-cc_ft_960.webp",
    direccion:"2001 Meridian Ave APT 101, Miami Beach, FL 33139"
},
{
    nombre:"Casa Bonita2324234",
    precio:2000,
    banos:2,
    cuarto:3,
    foto:"https://photos.zillowstatic.com/fp/50b18a1ef4c1cede4fb616e9dcb8f330-cc_ft_960.webp",
    direccion:"2001 Meridian Ave APT 101, Miami Beach, FL 33139"
}]

$(document).ready(function(){
    $("#popup").hide()
    for(let i = 0; i < casas.length; i++){
        $("#casas").append(
            `
            <div class="casita">
                <img src=${casas[i].foto}>
                <p>${casas[i].direccion}</p>
            </div>
            
            ` 
            
        )
    }
    $(".casita").click(function(){
        let indice = $(this).index()
        $("#popup-nombre").text(casas[indice].nombre)
        $("#popup-img").attr("src" , casas[indice].foto)
        $("#popup").show()
    })
    $(".close").click(function(){
        $("#popup").hide()
    })
    
   
  
}
);
