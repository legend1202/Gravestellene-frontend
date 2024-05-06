import"./index-mmyIBA3o.js";import{cy as s,cz as n}from"./index-uKP6CWMZ.js";const o=async a=>{const e=await s.post(n.graveyard.create,{graveyard:a});return{searchResults:(e==null?void 0:e.data)||[]}},c=async a=>{var i,r;const e=new FormData;return a.forEach(d=>{e.append("images",d)}),(r=(i=(await s.post(n.graveyard.upload,e)).data)==null?void 0:i.result)==null?void 0:r.image_urls};function m(){return{products:[{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",name:"Graveyard 1",location:"Norway",content:"string",newsLink:"string",forecastLink:"string",approved:!0},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",name:"Graveyard 2",location:"Norway location",content:"string",newsLink:"string",forecastLink:"string",approved:!0},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",fellesraadId:"fe99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",name:"Graveyard 3",location:"Norway country",content:"string",newsLink:"string",forecastLink:"string",approved:!1}],productsLoading:!1,productsValidating:!1,productsEmpty:!1}}function u(a){return{productLoading:!1,productValidating:!1,productError:{message:"error"},product:{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",gender:"Men",publish:"published",category:"Shose",available:72,priceSale:null,taxes:10,quantity:80,sizes:["6","7","8","8.5","9","9.5","10","10.5","11","11.5","12","13"],inventoryType:"in stock",images:["https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg"],ratings:[{name:"1 Star",starCount:9911,reviewCount:1947},{name:"2 Star",starCount:1947,reviewCount:9124},{name:"3 Star",starCount:9124,reviewCount:6984},{name:"4 Star",starCount:6984,reviewCount:8488},{name:"5 Star",starCount:8488,reviewCount:2034}],reviews:[{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",name:"Jayvion Simon",postedAt:"2024-05-05T08:03:39.854Z",comment:"The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",isPurchased:!0,rating:4.2,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",helpful:9911,attachments:[]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",name:"Lucian Obrien",postedAt:"2024-05-04T07:03:39.854Z",comment:"She eagerly opened the gift, her eyes sparkling with excitement.",isPurchased:!0,rating:3.7,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",helpful:1947,attachments:["https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg"]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",name:"Deja Brady",postedAt:"2024-05-03T06:03:39.854Z",comment:"The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",isPurchased:!0,rating:4.5,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",helpful:9124,attachments:[]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",name:"Harrison Stein",postedAt:"2024-05-02T05:03:39.854Z",comment:"The aroma of freshly brewed coffee filled the air, awakening my senses.",isPurchased:!1,rating:3.5,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",helpful:6984,attachments:["https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg"]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",name:"Reece Chung",postedAt:"2024-05-01T04:03:39.854Z",comment:"The children giggled with joy as they ran through the sprinklers on a hot summer day.",isPurchased:!1,rating:.5,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",helpful:8488,attachments:[]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",name:"Lainey Davidson",postedAt:"2024-04-30T03:03:39.854Z",comment:"He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",isPurchased:!0,rating:3,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg",helpful:2034,attachments:["https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_7.jpg","https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_8.jpg"]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",name:"Cristopher Cardenas",postedAt:"2024-04-29T02:03:39.854Z",comment:"The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",isPurchased:!1,rating:2.5,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg",helpful:3364,attachments:[]},{id:"e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",name:"Melanie Noble",postedAt:"2024-04-28T01:03:39.854Z",comment:"The waves crashed against the shore, creating a soothing symphony of sound.",isPurchased:!1,rating:2.8,avatarUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",helpful:8401,attachments:[]}],tags:["Technology","Marketing","Design","Photography","Art"],code:"38BEE271",description:`
<h6>Specifications</h6>
<br/>
<ol>
  <li>Category</li>
  <li>Shoes</li>
</ol>

<br/>
<ol>
  <li>Manufacturer</li>
  <li>Nike</li>
</ol>

<br/>
<ol>
  <li>Serial Number</li>
  <li>358607726380311</li>
</ol>

<br/>
<ol>
  <li>Ships From</li>
  <li>United States</li>
</ol>

<br/>
<br/>

<h6>Product Details</h6>
<br/>
<ul>
  <li><p>The foam sockliner feels soft and comfortable</p></li>
  <li><p>Pull tab</p></li>
  <li><p>Not intended for use as Personal Protective Equipment</p></li>
  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>
  <li><p>Style: 921826-109</p></li>
  <li><p>Country/Region of Origin: China</p></li>
</ul>

<br/>
<br/>

<h6>Benefits</h6>
<br/>
<ul>
  <li>
    <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>
    and durability.
  </li>
  <li>
    <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>
    ning underfoot.
  </li>
  <li><p>The foam midsole feels springy and soft.</p></li>
  <li><p>The rubber outsole adds traction and durability.</p></li>
</ul>

<br/>
<br/>

<h6>Delivery and Returns</h6>
<br/>
<p>Your order of $200 or more gets free standard delivery.</p>
<br/>
<ul>
  <li><p>Standard delivered 4-5 Business Days</p></li>
  <li><p>Express delivered 2-4 Business Days</p></li>
</ul>
<br/>
<p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>

`,newLabel:{enabled:!0,content:"NEW"},sku:"WW75K5211YW/SV",createdAt:"2024-05-04T07:03:39.855Z",saleLabel:{enabled:!1,content:"SALE"},name:"Foundations Matte Flip Flop",price:97.14,coverUrl:"https://api-dev-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg",totalRatings:3.7,totalSold:684,totalReviews:9124,subDescription:"Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",colors:["#000000","#FFFFFF"]}}}export{u as a,m as b,o as c,c as u};
