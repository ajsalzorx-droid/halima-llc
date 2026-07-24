export const formatCurrency=(value:number|null)=>value===null?"Contact for Price":new Intl.NumberFormat("en-AE",{style:"currency",currency:"AED",maximumFractionDigits:0}).format(value);
