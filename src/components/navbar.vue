<template>
    <div class = "navbar">

    <router-link to="./">

        <img src = '../assets/hwa-logo.png'>
    </router-link>

    <div class = "btns">
    <router-link to="/code" class = "noul"><h1 @click = 'reload' class = "navbtn green">Games </h1></router-link>
    <router-link to="/design" class = "noul"><h1 @click = 'reload' class = "navbtn purple">Design </h1></router-link>
    </div>

    </div>

</template>

<script>
export default {
    name: 'Navbar', 
    methods: {

      reload: function(event){

        setTimeout(()=> {

          location.reload()
        },1)
        
      }
    }
    
}


</script>

<style scoped>


.navbar{

  position: fixed;
  width: 200px;
  margin: 20px;
  top: 0px;
  left: 0px;

}

img{

    width: 200px;
    margin: 10px;

    transition-property: width, margin;
    transition-duration: 0.2s;
    transition-timing-function: ease;
}

img:hover{


    width: 220px;
    margin: 5px;
    
}

.btns{
    position: fixed;
    padding-top: 30px;
    justify-content: left;
    display: flex;
    flex-wrap: wrap;
  
}

.noul{

    text-decoration: none;
    margin: none;
}

.navbtn{


  font-family: Righteous, sans-serif;
  color: black;
  font-size: 50px;
  padding-left: 10px;
  text-decoration: none;
  border-left: 15px solid black;
  position: relative;
  margin: 0;
  margin-right: 100vw;
  margin-bottom: 2vh;


  transition-property: border;
  transition-duration: 0.2s;
  transition-timing-function: ease;

}

.navbtn:hover{

  border-left: 35px solid black;

}

.purple{

  border-color: #B200FF;

}

.purple:hover{

  border-color: #B200FF;
  color: #B200FF;
}

.green{
  border-color: green;

}

.green:hover{

  color: green;
  border-color: green;
 
}

</style>