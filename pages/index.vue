<!-- layout -->
<template>
  <main class="scrollContainer" data-scroll-container>
    <header data-scroll-section>
      <div class="content">
        <h1 data-scroll data-scroll-speed="-1" class="our font-alpina font-size-xl uc">Our</h1>
        <h1 data-scroll data-scroll-speed="-2" class="favorite font-saol font-size-xl uc">
          <div class="logo-wrapper"><Logotype class="outline-light"/></div>
          <span>Favorite</span>
        </h1>
        <h1 data-scroll data-scroll-speed="-1.5" class="albums font-alpina font-size-xl uc">
          Albums
          <span class="established font-saol font-size-lg">Est. 2018</span>
        </h1>
      </div>
    </header>






    <section data-scroll-section>
      <h1 data-scroll>Hey</h1>
      <p data-scroll>👋</p>
    </section>
    <section data-scroll-section>
        <h2 data-scroll data-scroll-speed="-1">What's up?</h2>
        <p data-scroll data-scroll-speed="-2">😬</p>
    </section>
  </main>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  .logo-wrapper {
    position: absolute;
    top: -10%; left: 16vh;
    width: 30vh; height: 30vh;
  }

  .logotype {
    left: 8rem; top: -4.4rem;
    width: 100%; height: 100%;
    transform: scale(1.5);
  }

  .content {
    display: flex;
    flex-direction: column;
    background: url('/img/classical-01.jpg') no-repeat 72% center;
    background-size: auto 64%;

    @include breakpoint(md) {
      justify-content: center;
      height: 100%;
    }
  }

  .our {
    @include breakpoint(md) { padding-left: 11.2rem; }
  }

  .favorite {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @include breakpoint(md) {
      padding-top: 2rem;
      span { margin-left: 50vh; }
    }
  }

  .albums {
    @include breakpoint(md) { margin-top: -1.2rem; }
  }

  .established {
    text-transform: none;
    @include breakpoint(md) { margin-left: 34.8rem; }
  }

</style>

<!-- logic -->
<script>
  import Logotype from '~/components/Logotype'
  export default {
    head: () => ({
      title: 'home',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }),
    async asyncData({ $content }) {
      const posts = await $content("entries").fetch();
      return {
        posts,
      }
    },
    components: { Logotype, },
    mounted() {
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".scrollContainer"),
        smooth: true,
        lerp: .1,  // smoothness
        direction: 'horizontal',
        multiplier: 1,
      });
    }
  }
</script>