<template>
  <article class="container">
      <img :src="articleData.imgSrc" alt="">
      <h1>{{articleData.title}}</h1>
      <p v-html="articleData.description"></p>
  </article>
</template>

<script>
import DummyArticle from '../../dummy/article';

export default {
    data(){
        return {
            articleData:{
                title:'',
                description:'',
                imgSrc:'',
                slug:''
            }
        }
    },
    created(){
        let app = this;
        this.articleData = DummyArticle.find(item => {
            return item.slug == app.$route.params.slug
        })
        
    }
}
</script>

<style lang="scss" scoped>

    .container{
        padding-top:2rem;
    }

    img{
        width:100%;
        height:300px;
        object-fit:cover;
    }

    h1{
        font-weight:bold;
        margin-top:1rem;
        margin-bottom:1rem;
    }

    p{
        font-size:1.2rem;
    }
</style>