<template>

<div>

    <Page title = "Ithaca Paintball Marketing" subtitle = "The Battle Begins Here." abstract = "Ithaca Paintball is a locally owned business, a great place to host parties,
    gatherings, and more. I created a both new logo and business cards for the locale." :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Paintball",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'The Main Logo',
                abstract: 'The "Paintball" text is crafted in the style of graffiti font, one of the most ubiquitous icons of the sport.',
                src: 'paintball'},
                {title: 'Business Card - Front',
                abstract: 'The front of the business card lists all contact information necessary to find Ithaca Paintball.',
                src: 'paintball-1'},
                {title: 'Business Card - Back',
                abstract: 'The back lists the potential circumstances that would lead one to seek out Ithaca Paintball.',
                src: 'paintball-2'}
            ]
        }
    }
}

</script>

<style scoped>

</style>