<template>
  <div>
    <Header/>
    <div>
    <h1 class="font-bold text-xl"><span class="primary-dot"></span> القواب الأكثر مبيعاً</h1>
      <ul class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-2 w-full">
        <li v-for="product in products" :key="product.title">
          <Product :id="product.id" :thumbnail="product.thumbnail" :title="product.title" 
                   :price="product.price" :rating="product.rating" :type="product.type" :sales="product.sales"
                   :author="product.author"/>
        </li>
      </ul>
    </div>
  </div>
</template>


<script type="text/javascript" setup>
import Header from '../components/Header.vue'
import Product from '../components/Product.vue'
const products = [
    {
    	"id": 1,
        "thumbnail": "https://www.mgtechnologies.co.in/data/categories/images/4055e47ddbe2158dbb11b55a4.jpg",
        "title": "قالب Shopify نسخة 2.0",
        "price": 778,
        "rating": 4,
        "sales": 1472,
        "author": "theme-debug",
        "type": "wordpress"
    },
    {
    	"id": 2,
        "thumbnail": "https://www.seedprod.com/wp-content/uploads/2022/04/responsive-WordPress-themes-800x527.png",
        "title": "قالب WordPress Pro 2024",
        "price": 899,
        "rating": 5,
        "sales": 1023,
        "author": "wp-expert",
        "type": "wordpress"
    },
    {
    	"id": 3,
        "thumbnail": "https://motopress.com/wp-content/uploads/2019/05/50-Kadence.jpg",
        "title": "Shopify E-commerce Theme",
        "price": 599,
        "rating": 4,
        "sales": 1898,
        "author": "shopify-designs",
        "type": "shopify"
    },
    {
    	"id": 4,
        "thumbnail": "https://www.buywptemplates.com/wp-content/uploads/2019/12/Ecommerce-WordPress-Theme.png",
        "title": "Figma UI Kit - Modern Design",
        "price": 49,
        "rating": 4.5,
        "sales": 450,
        "author": "design-guru",
        "type": "figma"
    },
    {
    	"id": 5,
        "thumbnail": "https://athemes.com/wp-content/uploads/Kallyas-Multi-Purpose-WordPress-Theme-1-768x576.jpg",
        "title": "HTML5/CSS3 Responsive Template",
        "price": 29,
        "rating": 4,
        "sales": 786,
        "author": "web-dev-team",
        "type": "HTML"
    },
    {
    	"id": 6,
        "thumbnail": "https://b8f4g5a7.rocketcdn.me/wp-content/uploads/2023/10/inspiro-pro-premium-theme-1024x635.png",
        "title": "Premium WordPress Blog Theme",
        "price": 69,
        "rating": 4.2,
        "sales": 603,
        "author": "blog-masters",
        "type": "wordpress"
    },
    {
    	"id": 7,
        "thumbnail": "https://thimpress.com/wp-content/uploads/2022/09/banner-eduma.png",
        "title": "Shopify Fashion Store Template",
        "price": 699,
        "rating": 4.3,
        "sales": 1375,
        "author": "fashion-trendz",
        "type": "shopify"
    },
    {
    	"id": 8,
        "thumbnail": "https://www.readythemes.com/wp-content/uploads/2016/12/responsive-1.png",
        "title": "Figma Social Media Kit",
        "price": 39,
        "rating": 4.6,
        "sales": 325,
        "author": "social-media-expert",
        "type": "figma"
    }
]

</script>