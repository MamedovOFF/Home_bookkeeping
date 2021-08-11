<template>
      <ul class="sidenav app-sidenav" :class="{open: value}">
      
      <router-link
      v-for="link in links"
       :key="link.url"
       tag="li"
       active-class="active"
       :to="link.url"
       :exact="link.exact"
      >
        <a href="#" class="waves-effect waves-orange pointer">{{link.tittle}}</a>
      </router-link>
      
    </ul>
</template>
<script>
import localizeFilter from '@/Filters/localize.filter.js'
export default {
    props: [ 'value' ],
    data: () => ({
        links: [
            {tittle: localizeFilter('Menu_Bill'), url: '/', exact: true},
            {tittle: localizeFilter('Menu_History'), url: '/history'},
            {tittle: localizeFilter('Menu_Planning'), url: '/planning'},
            {tittle: localizeFilter('Menu_Record'), url: '/record'},
            {tittle: localizeFilter('Menu_Categories'), url: '/categories'}

        ]
    }) 
}
</script>