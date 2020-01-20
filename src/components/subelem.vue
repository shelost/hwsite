<template>



<div>

 
    <img :src = "require(`../assets/${source}.png`)" alt = "">

    <h1>{{title}}</h1>
    <h2>{{abstract}}</h2>
    

  
</div>


    
</template>

<script>
export default {
    name: "Elem",
    props: ['title', 'abstract', 'date', 'source'],
   
}

</script>

<style scoped>

div{

    background-color: #E0E0E0;
    color: white;
    display: block;
    border-radius: 20px;
    height: auto;
    box-shadow: 0px 10px 20px #A0A0A0;
    position: relative;
    bottom: 0px;

    padding: 30px;
    width: 100%;
    margin: 2%;

    transition-property: box-shadow, bottom;
    transition-duration: 0.1s;
    transition-timing-function: ease;
}



h1{

    font-family: Righteous, sans-serif;
    margin: 0;
    margin-top: 20px;
    font-size: 70px;
    line-height: 70px;
    color: black;

}

h2{

    font-family: Hammersmith One, sans-serif;
    color: gray;
}

h3{

    font-family: Hammersmith One, sans-serif;
    color: lightgray;
}



img{

    width: 100%;
    border-radius: 10px;
}

</style>