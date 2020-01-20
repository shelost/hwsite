<template>

<div>

    <Page title = "The Creation of Adam (2020)" subtitle = "Godly proportions." abstract = "It's always amusing to revisit a classic. The Creation of Adam (2020)
    is my satirical take on Michelangelo's magnum opus, depicting Adam stuck looking at his phone rather than pay any attention to his Creator. It would be more laugh-worthy
    if it weren't so true in our modern world. A T-Shirt with this design is available on Amazon." :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Adam",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'The Piece',
                abstract: 'The piece was entirely created in Adobe Illustrator, with every single shape having been manually created over several weeks.',
                src: 'adam'},
                {title: 'The T-Shirt Version',
                abstract: 'The dimensional constraints of a T-Shirt compelled me to create a condensed, circular version of my original piece.',
                src: 'adam-circle'},
              
            ]
        }
    }
}

</script>

<style scoped>

</style>