<template>
  <router-link :to="{name:'post', params:{'slug':slug}}">
        <card>
            <img class="card-img-top" :src="imgSrc" :alt="title">
            <main class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <!-- <p class="card-text">{{description}}</p> -->
            </main>
        </card>
  </router-link>
</template>

<script>
import Card from '../../../components/card.vue';

export default {
    props:['title','description','imgSrc', 'slug'],
    components:{
        Card
    }
}
</script>

<style scoped>
    img{
        max-height:300px;
        object-fit:cover;
    }
</style>