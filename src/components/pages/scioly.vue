<template>

<div>

    <Page title = "Science Olympiad Logos" subtitle = "All-Ithacan." abstract = "Ithaca High School's Science Olympiad team did, in fact, have a logo when
    I joined the team. However, per a personal request by the officers, I created a more modern, distinctive design for official use. My new logo is prominently
    featured on our team shirts." :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Scioly",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'The Main Logo',
                abstract: 'The logo was designed to be instantly recognizable from any distance, a prerequisite which gave birth to its unique typography and striking color scheme.',
                src: 'scioly'},
                {title: 'The Condensed Logo',
                abstract: 'In order for the logo to fit onto documents with linear text, I reworked its individual elements into more manageable dimensions.',
                src: 'scioly-mini'},
        
            ]
        }
    }
}

</script>

<style scoped>

</style>