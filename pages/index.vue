<!-- layout -->
<template>
  <main class="scrollContainer" data-scroll-container>
    <header data-scroll-section>
      <div class="content">
        <h1 data-scroll data-scroll-speed="-1" class="our font-alpina font-size-xl uc">Our</h1>
        <h1 data-scroll data-scroll-speed="-2" class="favorite font-saol font-size-xl uc">Favorite</h1>
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
    @include breakpoint(md) { padding: 2rem 0 0 34.4rem; }
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
  import Article from '~/components/Article'
  export default {
    head: () => ({
      title: 'home',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }),
    async asyncData({ $content }) {
      const posts = await $content("entries").fetch();

      return {
        posts,
      };
    },
    components: { Article, },
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