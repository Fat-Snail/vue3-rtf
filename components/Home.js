import { loadTemplate } from '../js/loadVue.js'
import { defineComponent, defineAsyncComponent, reactive, computed, toRefs, ref, getCurrentInstance } from '../js/importVue.js'
import { ElMessage } from '../js/importElementPlus.js'

//状态及数据
const state = reactive({
    userName: '',
})

//组件定义
let componentName = "home";

function onClickTest() {
    ElMessage.success('您点击了按钮！'); 
}

async function createHome() {
    let template = await loadTemplate(componentName);

    return defineComponent({
        name: componentName,
        template: template,
        beforeCreate() {

        },
        setup(props, context) {

            return {
                ...toRefs(state),
                //方法
                ...{
                    onClickTest,

                }
            }
        }

    });
}

let Home = defineAsyncComponent(createHome)

export { Home, componentName }
