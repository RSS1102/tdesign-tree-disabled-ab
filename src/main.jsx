import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import BeforeTree from './tree-before.js';
import AfterTree from './tree-after.js';
import './style.css';
import { mountVueDemo } from './vue-demo.js';
import './tdesign.css';
const modes=['all','parentFirst','onlyLeaf'];
const data=[{value:'P',label:'父节点 P',children:[{value:'A',label:'可用子节点 A'},{value:'B',label:'可用子节点 B'},{value:'D',label:'禁用子节点 D',disabled:true}]}];
function Variant({mode,variant}){
 const [value,setValue]=useState([]);const [last,setLast]=useState('尚未操作');const Component=variant==='before'?BeforeTree:AfterTree;
 return <div className={'variant '+variant} data-mode={mode} data-variant={variant} aria-label={mode+' '+variant}>
 <h3><span>{variant==='before'?'A · 修复前':'B · 修复后'}</span><small>{variant==='before'?'f307a332':'d4f2e934'}</small></h3>
 <div className="tree"><Component data={data} checkable expandAll transition={false} valueMode={mode} value={value} onChange={(next,ctx)=>{setValue(next);setLast('点击 '+ctx.node.value);}}/></div>
 <div className="caption">真实 onChange / 受控 value · {last}</div><pre>{JSON.stringify(value)}</pre></div>
}
function ReactDemo(){const [revision,setRevision]=useState(0);const [step,setStep]=useState('初始未选');const root=useRef(null);
 function clickNode(node){root.current.querySelectorAll('.variant input[name="'+node+'"]').forEach(input=>input.click());setStep('同步点击 '+node);}
 return <main ref={root}><div className="badge">同一 React 组件 · 相同数据 · 修复前后真实源码</div><h1>Tree 禁用子节点：三种模式 A/B 对照</h1><p className="intro">父节点 P → 可用 A / B ＋ 禁用 D。六棵树同步操作，比较全选、半选和实际回调。</p>
 <div className="toolbar"><button onClick={()=>{setRevision(x=>x+1);setStep('初始未选')}}>重置</button><button onClick={()=>clickNode('P')}>同步点击父节点 P</button><button onClick={()=>clickNode('A')}>同步点击子节点 A</button><button onClick={()=>clickNode('B')}>同步点击子节点 B</button><span>{step}</span></div>
 <div className="grid" key={revision}>{modes.map(mode=><section key={mode} aria-label={mode}><h2>{mode}<small>{mode==='all'?'全部选中节点':mode==='parentFirst'?'优先返回父节点':'仅叶子节点（默认）'}</small></h2><Variant mode={mode} variant="before"/><Variant mode={mode} variant="after"/></section>)}</div>
 <div className="note">预期差异：点击 P 或选中 A / B 后，修复前 P 仍半选，修复后 P 全选。onlyLeaf 的返回值仍只包含叶子节点。D 应始终禁用且未选中。</div></main>
}
function VueDemo(){const host=useRef(null);React.useEffect(()=>mountVueDemo(host.current),[]);return <div ref={host}/>;}
function App(){const [framework,setFramework]=useState('vue');return <><nav className="framework-switch"><button onClick={()=>setFramework('react')}>React · tree-v1</button><button onClick={()=>setFramework('vue')}>Vue Next · tree</button></nav>{framework==='react'?<ReactDemo/>:<VueDemo/>}</>;}
createRoot(document.getElementById('root')).render(<App/>);
