<template>
    <main>
        <navbar></navbar>

        <section>
            <router-view></router-view>
        </section>

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

<style lang="scss" scoped>

</style>