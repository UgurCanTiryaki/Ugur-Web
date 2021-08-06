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
    "
  >
    <div class="flex justify-evenly text-3xl w-1/5">
      <a href="https://github.com/UgurCanTiryaki"
        ><FontAwesomeIcon :icon="githubIcon"></FontAwesomeIcon
      ></a>
      <!--TODO: Youtube channel link will be placed here -->
      <span><FontAwesomeIcon :icon="youtubeIcon"></FontAwesomeIcon></span>
      <a href="https://stackoverflow.com/users/11957150/uğur-can"
        ><FontAwesomeIcon :icon="stackoverflowIcon"></FontAwesomeIcon
      ></a>
    </div>
    <div class="flex justify-center divide-x text-xl w-full">
      <a href="mailto:ugurctiryaki@gmail.com" class="w-1/5 text-center"
        >ugurctiryaki@gmail.com</a
      >
      <span class="w-1/5 text-center">© 2021 Uğur Can Tiryaki</span>
    </div>
    <div>
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
