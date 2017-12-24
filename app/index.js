
import vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import appContainer from './components/app-container.vue'
import demoPage from './components/demo-page.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

vue.use(VueMaterial)
vue.use(vueResource)
vue.use(vueRouter)
vue.config.devtools = false

{
  window.cssGridManager = {
    bootstrap() {
      if (!this.isLoading) {
        this.isLoading = true

        document.addEventListener("DOMContentLoaded", () => {
            
          this.isLoading = false
      
          var router = new vueRouter({
            base: __dirname,
            routes: [
              {
                path: '/',
                name: 'demo',
                component: demoPage
              },
              {path: '*', redirect: {path: '/'}}
            ],
          })
      
          new vue({
            el: '#app',
            components: {
              appContainer,
              demoPage
            },
            router: router
          })
        })
      }
    } 
  }

  window.cssGridManager.bootstrap()
}