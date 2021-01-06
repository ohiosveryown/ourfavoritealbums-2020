<!-- layout -->
<template>
  <main class="scrollContainer" data-scroll-container>
    <header data-scroll-section>
      <div class="content anim--enter">
        <h1 data-scroll data-scroll-speed="-1" class="our font-alpina font-size-xl uc">
          Our
          <span class="font-steinbeck font-size-sm infrared">Preamble</span>
        </h1>
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


    <section class="preamble" data-scroll-section>
      <header>
        <h2 class="intro font-steinbeck font-size-sm uc">Albums of the Year is a communal project built around music & friendship established in 2018.</h2>
        <div class="thumbnails">
          <figure><img src="/img/classical-02.jpg" alt=""></figure>
          <figure><img src="/img/classical-03.jpg" alt=""></figure>
        </div>
      </header>
      <article>
        <p class="font-americana font-size-md">2020 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
        <p class="font-americana font-size-md">The site is built on vue, nuxt and friendship. The type is set in Respira by Sharp Type, Steinbeck by The Temporary State and Canela by Commerical Type (three faces??!)</p>
      </article>
    </section>

    <section class="spacer" data-scroll-section></section>




    <!-- <section data-scroll-section>
      <h1 data-scroll>Hey</h1>
      <p data-scroll>👋</p>
    </section>
    <section data-scroll-section>
        <h2 data-scroll data-scroll-speed="-1">What's up?</h2>
        <p data-scroll data-scroll-speed="-2">😬</p>
    </section> -->
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
    display: flex;
    // justify-content: space-between;
    @include breakpoint(md) {
      padding-left: 11.2rem;
      span { align-self: flex-start; margin-left: 56vw; }
    }
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

  .preamble {
    @include breakpoint(md) {
      margin: 12vh 20rem 0 20rem;
      white-space: normal;
      .intro { width: 46ch; }
      .thumbnails { display: flex; margin: 1.2rem 0 2rem; }
      figure { margin-right: 1.6rem; max-width: 9.6rem; width: 12vh; height: auto; }
      article { margin-left: 28vh; width: 88vh; }
      p + p { text-indent: 8vw; }
    }
  }

  .spacer { width: 40vw; height: 100%; }

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
      })
      gsap.from('.anim--enter', {
        opacity: 0,
        x: 200,
        stagger: .05,
        duration: 1,
        delay: .25,
        ease: Power2.easeInOut
      })
    }
  }
</script>