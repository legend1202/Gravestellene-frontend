import{u as n}from"./index-oYV4_ElG.js";import{cG as a,r as l,o as u}from"./index-tv0ZIiTC.js";function g(){const r=u.post.list,{data:o,isLoading:s,error:t,isValidating:e}=n(r,a);return l.useMemo(()=>({posts:(o==null?void 0:o.posts)||[],postsLoading:s,postsError:t,postsValidating:e,postsEmpty:!s&&!(o!=null&&o.posts.length)}),[o==null?void 0:o.posts,t,s,e])}function V(r){const o=r?[u.post.details,{params:{title:r}}]:"",{data:s,isLoading:t,error:e,isValidating:i}=n(o,a);return l.useMemo(()=>({post:s==null?void 0:s.post,postLoading:t,postError:e,postValidating:i}),[s==null?void 0:s.post,e,t,i])}function L(r){const o=r?[u.post.latest,{params:{title:r}}]:"",{data:s,isLoading:t,error:e,isValidating:i}=n(o,a);return l.useMemo(()=>({latestPosts:(s==null?void 0:s.latestPosts)||[],latestPostsLoading:t,latestPostsError:e,latestPostsValidating:i,latestPostsEmpty:!t&&!(s!=null&&s.latestPosts.length)}),[s==null?void 0:s.latestPosts,e,t,i])}function P(r){const o=r?[u.post.search,{params:{query:r}}]:"",{data:s,isLoading:t,error:e,isValidating:i}=n(o,a,{keepPreviousData:!0});return l.useMemo(()=>({searchResults:(s==null?void 0:s.results)||[],searchLoading:t,searchError:e,searchValidating:i,searchEmpty:!t&&!(s!=null&&s.results.length)}),[s==null?void 0:s.results,e,t,i])}export{P as a,V as b,L as c,g as u};
