<template>
  <div>
    <label>Search query</label>
    <input v-model="query" type="text" />
  </div>
</template>

<script>
import { watch } from 'vue';
import useDebouncedRef from './composables/useDebouncedRef';
export default {
  setup() {
    const query = useDebouncedRef('', 400);

    watch(query, newQuery => {
      console.log({ newQuery });
    });

    console.log({ query });

    return {
      query,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
