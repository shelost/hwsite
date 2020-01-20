<template>
    
    <div>
        <router-link to = '/kis' class = "noul">
            <Elem title = "KIS Course Guide" subtitle = "Official Course Selection Guide for Korea International School (KIS)" date = "4.2018" source = "kis"/>   
        </router-link>

        <router-link to = '/brain' class = "noul">
            <Elem title = "Brain Team" subtitle = "Logos + Posters" date = "10.2019" source = "brainteam" />
        </router-link>

        <router-link to = '/scioly' class = "noul">
            <Elem title = "Science Olympiad" subtitle = "Logos + T-Shirts" date = "10.2019" source = "scioly"/>
        </router-link>

        <router-link to = '/adam' class = "noul">
            <Elem title = "Creation of Adam" subtitle = "Art Piece" date = "7.2019" source = "adam" />
        </router-link>

         <router-link to = '/nybc' class = "noul">
            <Elem title = "NYBC Marketing" subtitle = "Posters + Concert Tickets" date = "8.2019" source = "nybc" />
        </router-link>

        <router-link to = '/paintball' class = "noul">
            <Elem title = "Ithaca Paintball" subtitle = "Logo + Business Card" date = "12.2019" source = "paintball" />
        </router-link>
    </div>
</template>

<script>

import Elem from './elem.vue'

export default {

    name: "Design",
    components: {
        Elem
    }
    
}
</script>

<style scoped>

.noul{

    text-decoration: none;
}

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
