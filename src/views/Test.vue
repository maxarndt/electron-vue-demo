<template>
  <div class="test">
    <h1>Another new page</h1>
    <div>
      <p>{{ counter }}</p>
      <button @click="incCounter">++</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  computed: {
    counter () {
      return this.$store.getters.getCounter
    }
  },
  methods: {
    incCounter () {
      this.$store.commit('addCounter', 1)
    }
  }
}
</script>
