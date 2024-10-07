<template>
  <li>
    <h3>{{ topic.title }}</h3>
    <p>{{ topic.description }}</p>
    <button @click="selectTopic(topic.id)">Learn More</button>
  </li>
</template>

<script>
  export default {
    props: ['topic'],
    inject: ['selectTopic']
  }
</script>