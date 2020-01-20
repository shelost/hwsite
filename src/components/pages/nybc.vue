<template>

<div>

    <Page title = "NYBC Marketing" subtitle = "An annual treat." abstract = "Every year, four to five churches from the upper regions of New York gather to
    share three days of praise, worship, and communion during the New York Bible Conference (NYBC). Having been a regular attendee for over a decade by 2020, I was
    entrusted with the task of creating a) a poster for the main conference, b) a poster for the accompanying fundraising concert, and c) tickets for said concert." 
    :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Nybc",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'Concert Poster',
                abstract: 'The cover depicts snapshots of daily student life at KIS.',
                src: 'nybc-1'},
                {title: 'Concert Tickets',
                abstract: 'The tickets were designed so that people would be compelled to bring a friend along, in order to complete the image.',
                src: 'nybc-2'},
                {title: 'The Main Poster',
                abstract: 'The theme for the 2020 conference was "Heaven and the Fisher\`s Net", which led me to go with an aquatic motif for the design.',
                src: 'nybc-3'}
            ]
        }
    }
}

</script>

<style scoped>

</style>