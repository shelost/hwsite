<template>

<div class = "main">

    <h1> {{title}} </h1>
    <h2> {{subtitle}}</h2>
    <p> {{abstract}} </p>

    <div v-for="sect in sections" class = "elems" :key='sect.id'>
     <Subelem :title = sect.title :abstract= sect.abstract date = "1.2020" :source = sect.src link = "https://shelost.github.io/platformr/"/>
     </div>
</div>

</template>

<script>

import Subelem from '../subelem.vue'

export default {

    name: "Page",
    props: ["title", "subtitle","abstract","sections"],
    components: {Subelem},
   
}

</script>

<style scoped>

.main{
    margin-left: 250px;

   
}
h1{
    font-family: Righteous, sans-serif;
    font-size: 100px;
    margin: 0;
    color: black;

}

h2{

    font-family: Hammersmith One, sans-serif;
    font-size: 40px;
    margin: 0;
    color: gray;
    margin-bottom: 20px;
}

p{

    font-family: Hammersmith One, sans-serif;

    width: 90%;
    margin: auto;
    font-size: 20px;
}

.elems{
    display: flex;
    flex-wrap: wrap;

}

</style>