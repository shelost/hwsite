<template>

<div>

    <Page title = "KIS Course Selection Guide" subtitle = "A semester-long solo commission." abstract = "In the second semester of the 2017-18 school year, the administrative body of
    Korea International School (KIS) requested that our Advanced Computer Graphics class completely revamp their dull, black-and-white, spreadsheet-based
    course selection guide. The head of the department entrusted the entire project to me, and I spent three months coordinating with teachers and
    administrators to create a more color-oriented, inviting version of the guide. My new course guide is still being used by KIS, which can be
    seen on its official website." :sections= sections />
   

</div>

</template>

<script>

import Page from './page.vue'
export default {

    name: "Kis",
    components: {Page},
    data(){

        return {
            sections:[

                {title: 'Cover + Table of Contents',
                abstract: 'The cover depicts snapshots of daily student life at KIS.',
                src: 'kis-1'},
                {title: 'Sample Pages',
                abstract: 'My new course guide is more spacious and reader-friendly than the original, which simply consisted of a printed-out Excel spreadsheet.',
                src: 'kis-2'},
                {title: 'Sample Pages II',
                abstract: 'The final guide consists of more than 50 pages, each individually coordinated with department leaders.',
                src: 'kis-3'}
            ]
        }
    }
}

</script>

<style scoped>

</style>