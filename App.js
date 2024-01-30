import { loadApp } from './js/loadVue.js'
import { createRouter } from './js/useRouter.js'


async function useApp() {

    let [_, router] = await Promise.all([
        loadApp('#app'),
        createRouter()
    ])

    const About = { template: '<div>About</div>' }
    const app = Vue.createApp({
        name: 'App',
        components: {
            About,
        }
    });

    //app.use(Vuex);

    app.use(router);

    app.mount('#app');
}

export { useApp }
