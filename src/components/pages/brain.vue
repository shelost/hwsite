<template>

<div>

    <Page title = "IHS Brain Team Branding" subtitle = "Team spirit." abstract = "The IHS Brain Team is Ithaca's very own Quiz Bowl team,
    an amalgamation of experts on a truly random array of topics. The team did not have a logo (or any sort of branding, for that matter) when
    I joined, so - after some consulting with our coach - I created several versions of potential logos to be put up to an internal vote. The following
    designs are all the winners of their respective categories." :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Brain",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'The Main Logo',
                abstract: 'Our team\'s primary logo proudly features the classic red-and-gold Ithaca colors.',
                src: 'brainteam'},
                {title: 'The Twitter/IG Logo',
                abstract: 'The circular constraints of social media gave birth to this abbreviated version of our primary logo.',
                src: 'brainteam-circle'},
                {title: 'Ithaca Fall Logo',
                abstract: 'IHS hosts a Quiz Bowl tournament on its very own grounds every November, and I wanted to make sure that 2019 was the first that could boast its very own branding.',
                src: 'brainteam-ift'}
            ]
        }
    }
}

</script>

<style scoped>

</style>