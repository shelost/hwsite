<template>
    
    <div class = "main">
        <h1> Heewon Ahn</h1>
      
        <h3> <span class = "bullet">>></span> Most of my work revolves around web programming (JS, Vue) and graphic design (Adobe Photoshop, Illustrator). Many are official 
        commisions, while others are personal passion projects. </h3>
        <h3> <span class = "bullet">>></span> Enjoy! </h3>
         <h3> <span class = "bullet">>></span> My personal favorites: </h3>

        <div class = "elems">

         <Elem title = "PlatFORMR" subtitle = "Forge your own path." date = "1.2020" source = "platformr" link = "https://shelost.github.io/platformr/"/>
         <Elem title = "11 Rooms" subtitle = "Door-to-door fun." date = "1.2020" source = "rooms" link = "https://shelost.github.io/11rooms/"/>

         </div>
       
    </div>
</template>

<script>

import Elem from './elem'

export default {
    name: "Home",
    components: {Elem}
    
}
</script>


<style scoped>

.main{
    margin-left: 300px;
    text-align: left;
    margin: none;
    
}

.elems{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
}

h1{

    font-family: Righteous, sans-serif;
    font-size: 120px;
    color: black;
    margin: none;
    padding: none;
    line-height: 30px;

}

h2{

    font-family: Righteous, sans-serif;
    font-size: 40px;
    line-height: 40px;
}

h3{

    font-family: Hammersmith One, sans-serif;
    font-size: 30px;
    width: 95%;

}

.bullet{

    font-family: Righteous, sans-serif;
    color: red;
}

</style>