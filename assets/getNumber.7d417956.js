import{e as s}from"./app.2b9af6ff.js";const c=(t,e)=>{const[r,o]=s.exports.useState(t);return s.exports.useEffect(()=>{const n=window.setTimeout(()=>{o(t)},e);return()=>{window.clearTimeout(n)}},[t,e]),r},a=/[+-]?([0-9]*[.])?[0-9]+/,i=t=>{const e=t.trim();let r=parseFloat(e||"0");return Number.isNaN(r)||e&&!a.test(e)?{type:"error",message:"Please enter only numbers.",data:0}:r<1?{type:"error",message:"Please enter integer (over 1)",data:0}:{type:"success",data:r}};export{i as g,c as u};
