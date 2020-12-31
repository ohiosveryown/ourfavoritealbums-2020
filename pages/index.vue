<!-- layout -->
<template>
  <div class="scrollContainer" data-scroll-container>
    <main>
      <section data-scroll-section>
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </section>
      <section data-scroll-section>
          <h2 data-scroll data-scroll-speed="-1">What's up?</h2>
          <p data-scroll data-scroll-speed="-2">😬</p>
      </section>
    </main>
  </div>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }

  .has-scroll-smooth body {
    overflow: hidden; }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh; }

  [data-scroll-direction="horizontal"] [data-scroll-container] {
    white-space: nowrap;
    max-height: 100vh;
    display: inline-block;
    white-space: nowrap; }

  [data-scroll-direction="horizontal"] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%; }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0; }
    .c-scrollbar:hover {
      transform: scaleX(1.45); }
    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1; }
    [data-scroll-direction="horizontal"] .c-scrollbar {
      width: 100%;
      height: 10px;
      top: auto;
      bottom: 0;
      transform: scaleY(1); }
      [data-scroll-direction="horizontal"] .c-scrollbar:hover {
        transform: scaleY(1.3); }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab; }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing; }
    [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
      right: auto;
      bottom: 0; }

      /* ***** */
      body {
        margin: 0;
        max-height: 100vh;
        overflow: hidden;
      }

      .scrollContainer {
        margin: 0;
        // border: 4px solid green;
        max-height: 100vh;
        /* width: 80vw;
        overflow: hidden; */
      }

      main {
        // border: 4px solid yellow;
        width: 100%;
        max-height: 100vh;
        /* display: flex; */
        /* border: 4px solid red; */
        /* width: 70vw; height: 100vh;
        overflow: scroll; */
      }

      section {
        /* display: grid;
        place-items: center; */
        margin: 20px;
        width: 100vw; min-height: 80vh;
        background: pink;
        /* flex-shrink: 0; */
      }

      .in-view { background: red; }
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