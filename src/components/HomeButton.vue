<template>
  <router-link
    class="
      flex
      justify-center
      items-center
      w-3/12
      rounded-3xl
      bg-rose-600
      hover:bg-rose-800
    "
    :to="buttonLink"
  >
    {{ buttonText }}
  </router-link>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
