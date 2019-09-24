<template>
  <main class="container py-4">
    <section class="row">
      <div class="--card-content" v-for="(item,index) in articleData" :key="index">
        <card-content class="--chupy-card-article" :title="item.title" :description="item.description" :imgSrc="item.imgSrc" :slug="item.slug"/>
      </div>
    </section>
  </main>
</template>

<script>

import CardContent from './components/card-content.vue';
import DummyArticle from '../../dummy/article';

export default {
  components:{
    CardContent
  },
  data(){
    return {
      articleData:[]
    }
  },
  methods:{
    slugGenerator(value){
      return value.toLowerCase().replace(" ","-")
    }
  },
  created(){
    this.articleData = DummyArticle;
  }
}
</script>

<style lang="scss" scoped>
  .--card-content{
    padding:0.2rem;
  }

  section.row{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>