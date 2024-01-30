import { loadTemplate } from '../js/loadVue.js'
import { defineComponent, defineAsyncComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../js/importVue.js'

//组件定义
let componentName = "home";

async function createTestAsync() {
    let template = await loadTemplate(componentName);

    return defineComponent({
        name: componentName,
        template: template,
        beforeCreate() {

        },
        setup(props, context) {

            return {

            }
        }

    });
}

let Home = defineAsyncComponent(createTestAsync)

export { Home, componentName }
