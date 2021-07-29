<template>
  <div
    class="
      h-64
      bg-gray-900
      opacity-90
      flex flex-col
      justify-evenly
      items-center
      px-16
      text-white
    "
  >
    <div class="flex justify-evenly text-3xl w-1/5">
      <router-link :to="{ name: 'home' }"
        ><FontAwesomeIcon :icon="githubIcon"></FontAwesomeIcon
      ></router-link>
      <router-link to="/about"
        ><FontAwesomeIcon :icon="youtubeIcon"></FontAwesomeIcon
      ></router-link>
      <router-link to="/contact"
        ><FontAwesomeIcon :icon="stackoverflowIcon"></FontAwesomeIcon
      ></router-link>
    </div>
    <div class="">
      <span class="text-4xl">🆄🅲🆃 </span>
      <span class="text-2xl align-top">Uğur Can Tiryaki</span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      githubIcon: faGithub,
      stackoverflowIcon: faStackOverflow,
      youtubeIcon: faYoutube,
    };
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>
