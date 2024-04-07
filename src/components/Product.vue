<template>
  <a to="#" class="product group">
    <img :src="thumbnail" loading="lazy" width="400" height="200" class="h-44 group-hover:scale-105 transition ease-in-out delay-100 mb-2" :alt="title">
    <div class="w-full">
      <h1 class="font-bold">{{ title }}</h1>
      <h3 class="flex center w-fit gap-2"><ion-icon name="pricetags-outline"></ion-icon> {{ type }}</h3>
    </div>
    <div class="border-t-gray-200 w-full">
      <div>
        <h4 class="flex center w-fit gap-2 text-xl float-left font-semibold"><ion-icon name="cash-outline"></ion-icon> {{ price }}</h4>
	  <div class="star-rating">
	    <ion-icon v-for="i in Math.floor(rating)" :key="i" name="star" class="star-filled"></ion-icon>
	    <ion-icon v-if="rating - Math.floor(rating) > 0" name="star-half" class="star-half"></ion-icon>
	    <ion-icon v-for="i in 5 - Math.ceil(rating)" :key="'empty-' + i" name="star-outline" class="star-empty"></ion-icon>
	  </div>
      </div>
    </div>
  </a>
</template>

<style type="text/css" scoped>
	.product {
		@apply flex flex-col bg-white shadow rounded shadow-2xl p-4 cursor-pointer;
		user-select: none;
	}
	.star-rating {
	  color: #FFD700;
	  font-size: 24px;
	}

	.star-filled {
	  color: yellow-800;
	}

	.star-half {
	  color: yellow-800;
	}

	.star-empty {
	  color: #ccc;
	}
</style>


<script setup>
const props = defineProps({
  id: Number,
  thumbnail: String,
  title: String,
  price: Number,
  rating: Number, // Corrected prop name
  sales: Number,
  author: String,
  type: String
});
</script>
