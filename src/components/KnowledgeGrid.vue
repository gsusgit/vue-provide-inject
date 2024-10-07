<template>
  <ul>
    <KnowledgeElement
        v-for="topic in topics"
        :key="topic.id"
        :topic="topic"
    />
  </ul>
</template>

<script>
  export default {
    inject: ['topics']
  }
</script>