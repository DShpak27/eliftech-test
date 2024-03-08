import{n as i,N as p,j as e,s as c,r as a,B as x,C as l,O as h}from"./index-Vmo74IvF.js";import{P as n}from"./index-DKT9sSpB.js";const u=i.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media screen and (min-width: 768px) {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: row;
        column-gap: 16px;
    }
`,f=i.aside`
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    flex-shrink: 0;

    width: 100%;
    padding: 20px 25px;
    border-radius: 10px;

    background-color: #e0e8f6;

    @media screen and (min-width: 768px) {
        width: 260px;
    }
    @media screen and (min-width: 1024px) {
        width: 360px;
    }
    @media screen and (min-width: 1440px) {
        width: 320px;
    }
`,m=i.h2`
    padding-top: 6px;
    padding-bottom: 6px;

    text-align: center;
    font-size: 18px;
`,g=i.ul`
    display: flex;

    flex-direction: column;
    row-gap: 14px;
`,w=i.li`
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    overflow: hidden;
`,j=i(p)`
    display: block;
    width: 100%;

    padding: 12px 16px;

    color: white;
    background-color: #4a83bc;

    text-align: center;
    text-decoration: none;

    font-size: 18px;

    transition: all 250ms ease;
    &:hover {
        background-color: #285c98;
    }

    &.active {
        background-color: #285c98;

        &:hover {
            background-color: #285c98;
        }
    }
`;function d({shops:s}){return e.jsxs(f,{children:[e.jsx(m,{children:"Choose Your Pharmacy:"}),e.jsx(g,{children:s.map(({id:r,name:o})=>e.jsx(w,{children:e.jsx(j,{to:r,state:{storeId:r,store:o},children:o})},r))})]})}d.propTypes={shops:n.arrayOf(n.shape({id:n.string.isRequired,name:n.string.isRequired})).isRequired};function k(){const{data:s,isSuccess:r,isError:o,error:t}=c.useGetShopsQuery();return a.useEffect(()=>{o&&x.error(`(${t.status}) ${t.data}`)},[o,t]),e.jsxs(e.Fragment,{children:[r&&e.jsx(l,{style:{height:"100%",overflowY:"auto"},children:e.jsxs(u,{children:[e.jsx(d,{shops:s}),e.jsx(a.Suspense,{children:e.jsx(h,{})})]})}),!r&&null]})}export{k as default};
