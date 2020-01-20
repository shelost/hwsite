<template>



<div>

    <a :href = link>
    <img :src = "require(`../assets/${source}.png`)" alt = "">

    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <h3>{{date}}</h3>

    </a>
</div>


    
</template>

<script>
export default {
    name: "Subelem",
    props: ['title', 'subtitle', 'date', 'source', 'link'],
   
}

</script>

<style scoped>

div{

    background-color: black;
    color: white;
    display: block;
    border-radius: 20px;
    height: auto;
    box-shadow: 0px 10px 20px #A0A0A0;
    position: relative;
    bottom: 0px;
    width: 32vw;
    padding: 30px;
  
    margin: 1vw;
    margin-bottom: 4vw;

    transition-property: box-shadow, bottom;
    transition-duration: 0.1s;
    transition-timing-function: ease;
}

div:hover{

    box-shadow: 0px 20px 20px 5px gray, 0px 0px 0px 8px gold;
    bottom: 10px;

}

h1{

    font-family: Righteous, sans-serif;
    margin: 0;
    margin-top: 20px;
    font-size: 70px;
    line-height: 70px;

    transition: font-size 0.2s ease;
}

h2{

    font-family: Hammersmith One, sans-serif;
    color: gray;
}

h3{

    font-family: Hammersmith One, sans-serif;
    color: lightgray;
}

a{

    color: #B0B0B0;
    text-decoration: none;

    transition: color 0.2s ease;
}

a:hover{

    color: white;
}

img{

    width: 100%;
    border-radius: 10px;
}

</style>