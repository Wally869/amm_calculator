<script lang="ts">
	let balance_a = 100000;
	let balance_b = 100000;

	let k = balance_a * balance_b;
	let delta_a = 100;

	let new_balance_a = balance_a + delta_a;

	let delta_b = k / new_balance_a - balance_b;
	let new_balance_b = balance_b + delta_b;

	let slippage = (new_balance_a / new_balance_b) / (balance_a / balance_b) - 1.0;

	function on_change_balance_a() {
		k = balance_a * balance_b;
		if (delta_a < 0) {
			delta_a = k / new_balance_b - balance_a;
		} else {
			delta_b = k / new_balance_a - balance_b;
		}
		new_balance_b = balance_b - delta_b;

		slippage = (new_balance_a / new_balance_b) / (balance_a / balance_b) - 1.0;
	}

	function on_change_balance_b() {
		k = balance_a * balance_b;
		if (delta_a < 0) {
			delta_a = k / new_balance_b - balance_a;
		} else {
			delta_b = k / new_balance_a - balance_b;
		}
		new_balance_b = balance_b - delta_b;

		slippage = (new_balance_a / new_balance_b) / (balance_a / balance_b) - 1.0;
	}

	function on_change_delta_a() {
		k = balance_a * balance_b;
		new_balance_a = balance_a + delta_a;
		delta_b = k / new_balance_a - balance_b;
		new_balance_b = balance_b + delta_b;

		slippage = (new_balance_a / new_balance_b) / (balance_a / balance_b) - 1.0;
	}

	function on_change_delta_b() {
		k = balance_a * balance_b;
		new_balance_b = balance_b + delta_b;
		delta_a = k / new_balance_b - balance_a;
		new_balance_a = balance_a + delta_a;

		slippage = (new_balance_a / new_balance_b) / (balance_a / balance_b) - 1.0;
	}


	$: displayed_slippage = (slippage * 100.0).toFixed(2);
</script>

<svelte:head>
	<title>Amm Functions</title>
	<meta name="description" content="Constant Product calculations for Automated Market Makers" />
</svelte:head>


<div class="grid h-screen place-items-center bg-indigo-100">
	<div class="grid border border-t-8 border-4 border-indigo-200  px-8 pb-6 pt-4 rounded-lg bg-gray-50">
		<h1 class="text-3xl font-bold text-slate-600 pb-8 text-center">Constant Product Simulation</h1>
		<!--
		<div class="grid grid-cols-2 gap-32">
		-->
			<div>
				<h2 class="text-md font-semibold text-slate-400">Inputs</h2>
				<div class="grid grid-cols-2 gap-x-8 gap-y-2 pb-8">
					<div>
						<h3 class="text-md font-semibold text-slate-400">Amount Token A</h3>
						<input class="w-full bg-indigo-50 border border-indigo-200 text-slate-600" type="number" bind:value={balance_a} on:input={() => on_change_balance_a()} />
					</div>
					<div>
						<h3 class="text-md font-semibold text-slate-400">Amount Token B</h3>
						<input class="w-full bg-indigo-50 border border-indigo-200 text-slate-600" type="number" bind:value={balance_b} on:input={() => on_change_balance_b()} />
					</div>
					<div class="item-center">
						<h3 class="text-md font-semibold text-slate-400">Change Token A</h3>
						<input class="w-full bg-indigo-50 border border-indigo-200 text-slate-600" type="number" bind:value={delta_a} on:input={() => on_change_delta_a()} />
					</div>
					<div class="item-center">
						<h3 class="text-md font-semibold text-slate-400">Change Token B</h3>
						<input class="w-full bg-indigo-50 border border-indigo-200 text-slate-600" type="number" bind:value={delta_b} on:input={() => on_change_delta_b()}/>
					</div>
				</div>

				<h2 class="text-md font-semibold text-slate-400">Result</h2>
				<div class="grid grid-cols-2 gap-x-8 gap-y-2">
					<div>
						<h3 class="text-md font-semibold text-slate-400">New Balance Token A</h3>
						<p class="w-full bg-indigo-50 border border-indigo-200 text-slate-600">{new_balance_a}</p>
					</div>
					<div>
						<h3 class="text-md font-semibold text-slate-400">New Balance Token B</h3>
						<p class="w-full bg-indigo-50 border border-indigo-200 text-slate-600">{new_balance_b}</p>
					</div>

					<div class="item-center">
						<h3 class="text-md font-semibold text-slate-400">Slippage</h3>
						<p class="w-full bg-indigo-50 border border-indigo-200 text-slate-600">{displayed_slippage}%</p>
					</div>
				</div>
			</div>
			<!--
			<div>
				<p>placeholder chart</p>
			</div>
			-->
		<!--
		</div>
		-->
	</div>
</div>

<style lang="postcss">
	/*
	:global(html) {
		background-color: theme(colors.gray.100);
	}
	*/
</style>
