<template>
    
    <div>
        
        <Elem title = "PlatFORMR" subtitle = "Forge your own path." date = "1.2020" source = "platformr" link = "https://shelost.github.io/platformr/"/>
        <Elem title = "11 Rooms" subtitle = "Door-to-door fun." date = "1.2020" source = "rooms" link = "https://shelost.github.io/11rooms/"/>
        <Elem title = "Just Orbiting By" subtitle = "The Circle of Life." date = "12.2019" source = "orbiting" link = "https://shelost.github.io/orbiting/"/>
        <Elem title = "Super Pong" subtitle = "The Epic Duel Continues." date = "11.2019" source = "pong" link = "https://shelost.github.io/superpong/"/>
    </div>
</template>

<script>

import Elem from './elem.vue'

export default {

    name: "Code",
    components: {
        Elem
    }
    
}
</script>

<style scoped>

div{
    margin-left: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

img{

    width: 100%;
}
</style>
