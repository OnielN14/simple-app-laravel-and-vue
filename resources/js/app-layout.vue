<template>
    <main>
        <navbar></navbar>
        <router-view></router-view>
    </main>
</template>

<script>
import Navbar from './components/navbar';

export default {
    components:{
        Navbar
    }
}
</script>

<style>

</style>