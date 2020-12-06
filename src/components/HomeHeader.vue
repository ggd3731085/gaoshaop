<template>
    <div class="home_h">
        <header class="m_header">
                <div class="m_header_box" id="my_search">
                    <a href="#" class="icon_logo"></a>
                    <form action="#">
                        <span class="icon_search"></span>
                        <input type="search" class="search" placeholder="検索" @click="goSearch($event)">
                    </form>
                    <router-link to="/login" class="logo_btn">ログイン</router-link>
                </div>
            </header>
    </div>
</template>
<script>
export default{
  methods: {
    // eslint-disable-next-line space-before-blocks
    goSearch (event){
      this.$router.push('/search')
      window.event ? window.event.returnValue = false : event.preventDefault()
    }
  }
}
</script>
<style>
@import '../assets/css/index.css';
</style>
