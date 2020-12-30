<!-- layout -->
<template>
  <main>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post.slug">
          <h1>{{ post.title }}</h1>
          <h2>{{ post.description }}</h2>
        </NuxtLink>
      </li>
    </ul>
    <!-- <h1 class="anim--enter mb-4 font-prim">
    Hello World – with nuxt and gsap</h1>
    <Article class="anim--enter"/> -->
  </main>
</template>

<!-- style -->
<style lang="scss" scoped>
  @import '~/static/style/grid.scss';

  h1 {
    color: pink;
    @include breakpoint(mdl) { color: tan; }
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
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .15,
        duration: 1,
        ease: Power4.easeInOut
      })
    }
  }
</script>