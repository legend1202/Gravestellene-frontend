import{cK as n,cL as a,r as l,cI as u}from"./index-A5RRZfYH.js";function m(){const r=u.post.list,{data:o,isLoading:s,error:e,isValidating:t}=n(r,a);return l.useMemo(()=>({posts:(o==null?void 0:o.posts)||[],postsLoading:s,postsError:e,postsValidating:t,postsEmpty:!s&&!(o!=null&&o.posts.length)}),[o==null?void 0:o.posts,e,s,t])}function g(r){const o=r?[u.post.details,{params:{title:r}}]:"",{data:s,isLoading:e,error:t,isValidating:i}=n(o,a);return l.useMemo(()=>({post:s==null?void 0:s.post,postLoading:e,postError:t,postValidating:i}),[s==null?void 0:s.post,t,e,i])}function V(r){const o=r?[u.post.latest,{params:{title:r}}]:"",{data:s,isLoading:e,error:t,isValidating:i}=n(o,a);return l.useMemo(()=>({latestPosts:(s==null?void 0:s.latestPosts)||[],latestPostsLoading:e,latestPostsError:t,latestPostsValidating:i,latestPostsEmpty:!e&&!(s!=null&&s.latestPosts.length)}),[s==null?void 0:s.latestPosts,t,e,i])}function L(r){const o=r?[u.post.search,{params:{query:r}}]:"",{data:s,isLoading:e,error:t,isValidating:i}=n(o,a,{keepPreviousData:!0});return l.useMemo(()=>({searchResults:(s==null?void 0:s.results)||[],searchLoading:e,searchError:t,searchValidating:i,searchEmpty:!e&&!(s!=null&&s.results.length)}),[s==null?void 0:s.results,t,e,i])}export{L as a,g as b,V as c,m as u};
