import { createApp, defineComponent, h, ref } from 'vue';
import BeforeTree from './vue-tree-before.js';
import AfterTree from './vue-tree-after.js';
const data=[{value:'P',label:'父节点 P',children:[{value:'A',label:'可用子节点 A'},{value:'B',label:'可用子节点 B'},{value:'D',label:'禁用子节点 D',disabled:true}]}];
const Variant=defineComponent({props:['mode','variant'],setup(props){const value=ref([]),last=ref('尚未操作');return ()=>h('div',{class:'variant '+props.variant,'data-mode':props.mode,'data-variant':props.variant,'aria-label':props.mode+' '+props.variant},[
 h('h3',[h('span',props.variant==='before'?'A · 修复前':'B · 修复后'),h('small',props.variant==='before'?'f307a332':'2d5d75f7')]),
 h('div',{class:'tree'},[h(props.variant==='before'?BeforeTree:AfterTree,{data,checkable:true,expandAll:true,transition:false,valueMode:props.mode,value:value.value,onChange:(next,context)=>{value.value=next;last.value='点击 '+context.node.value;}})]),
 h('div',{class:'caption'},'真实 onChange / 受控 value · '+last.value),h('pre',JSON.stringify(value.value))
]);}});
const Demo=defineComponent({setup(){const revision=ref(0),step=ref('初始未选'),root=ref(null);const clickNode=node=>{root.value.querySelectorAll('.variant [data-value="'+node+'"] input[type="checkbox"]').forEach(input=>input.click());step.value='同步点击 '+node;};return ()=>h('main',{ref:root},[
 h('div',{class:'badge'},'Vue Next 真实 Tree 组件 · 相同数据 · 公共 tree 修复前后源码'),h('h1','Vue Next Tree：三种模式 A/B 对照'),h('p',{class:'intro'},'父节点 P → 可用 A / B ＋ 禁用 D。六棵受控 Vue 树同步操作，比较实际回调和勾选状态。'),
 h('div',{class:'toolbar'},[h('button',{onClick:()=>{revision.value++;step.value='初始未选';}},'重置'),...['P','A','B'].map(node=>h('button',{onClick:()=>clickNode(node)},node==='P'?'同步点击父节点 P':'同步点击子节点 '+node)),h('span',step.value)]),
 h('div',{class:'grid',key:revision.value},['all','parentFirst','onlyLeaf'].map(mode=>h('section',{'aria-label':mode},[h('h2',[mode,h('small',mode==='all'?'全部选中节点':mode==='parentFirst'?'优先返回父节点':'仅叶子节点（默认）')]),h(Variant,{mode,variant:'before'}),h(Variant,{mode,variant:'after'})]))),
 h('div',{class:'note'},'修复前 P 半选，修复后 P 全选；onlyLeaf 仍只返回叶子节点。D 应始终禁用且未选中。')
]);}});
export function mountVueDemo(element){const app=createApp(Demo);app.mount(element);return ()=>app.unmount();}
