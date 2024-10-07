import { createApp } from 'vue'
import App from './App.vue'
import NoActiveElement from "@/components/NoActiveElement.vue";
import ActiveElement from './components/ActiveElement.vue'
import KnowledgeBase from './components/KnowledgeBase.vue'
import KnowledgeGrid from './components/KnowledgeGrid.vue'
import KnowledgeElement from './components/KnowledgeElement.vue'

import '../src/assets/styles.css'

const app = createApp(App)

app.component('NoActiveElement', NoActiveElement)
app.component('ActiveElement', ActiveElement)
app.component('KnowledgeBase', KnowledgeBase)
app.component('KnowledgeGrid', KnowledgeGrid)
app.component('KnowledgeElement', KnowledgeElement)

app.mount('#app')
