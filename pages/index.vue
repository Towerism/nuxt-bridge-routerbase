<template>
  <div>
    <Tutorial>
      <div>
        Hi there: {{ counter }}
      </div>
      <div>
        <button @click="counter++">Inc</button>
      </div>
    </Tutorial>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      counter: 0
    }
  }
}
</script>
