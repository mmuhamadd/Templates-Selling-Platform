<template>
	<header class="flex flex-col items-center">
		<div class="p-5 w-full">
			<Navbar/>
		</div>
		<div class="mt-10 w-[70%] flex center">
			<SearchForm/>
		</div>
		<section class="flex center flex-col mt-5 mb-5">
			<h1 class="font-bold text-xl flex gap-2 center w-fit"><span class="primary-dot"></span>عملائنا المتميزون</h1>
			<ul class="mt-5 grid grid-cols-4 lg:grid-cols-8 gap-2">
				<li class="p-2 flex center rounded shadow opacity-90 hover:opacity-100" 
				v-for="customer in customers" :name="customer.name" :title="customer.name">
					<img width="60" height="44" class="rounded-xl lg:w-22 object-cover" 
					:src="customer.icon">
				</li>
			</ul>
		</section>
	</header>
</template>

<style type="text/css" scoped>
	header {
		@apply w-full;
		background-image: url(./src/assets/wave.svg);
		background-size: cover;
		background-position: center center;
	}
</style>

<script type="text/javascript" setup>
import Navbar from './Navbar.vue'
import SearchForm from './SearchForm.vue'
const customers = [
{
	name: 'chat gpt',
	icon: 'https://static.vecteezy.com/system/resources/previews/021/608/795/original/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg'
},
{
	name: 'linkedin',
	icon: 'https://cdn-icons-png.flaticon.com/256/174/174857.png'
},
{
	name: 'Nvidia',
	icon: 'https://cdn-icons-png.flaticon.com/512/732/732230.png'
},
{
	name: 'Epic Games',
	icon: 'https://1000marcas.net/wp-content/uploads/2020/11/Epic-Games-logo.png'
},
{
	name: 'Mostaql',
	icon: 'https://mostaql.hsoubcdn.com/public/assets/cards/facebook@2x.png'
},
{
	name: 'ion-icons',
	icon: 'https://pbs.twimg.com/profile_images/1354140697054609408/SMjDJmYg_400x400.png'
},
{
	name: 'Wordpress',
	icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png'
},
{
	name: 'PL',
	icon: 'https://dorve.com/wp-content/uploads/2023/08/premierleague-1024x1024.png'
},
]
</script>