import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayed_slippage;
  let balance_a = 1e5;
  let balance_b = 1e5;
  let k = balance_a * balance_b;
  let delta_a = 100;
  let new_balance_a = balance_a + delta_a;
  let delta_b = k / new_balance_a - balance_b;
  let new_balance_b = balance_b + delta_b;
  let slippage = new_balance_a / new_balance_b / (balance_a / balance_b) - 1;
  $$result.css.add(css);
  displayed_slippage = (slippage * 100).toFixed(2);
  return `${$$result.head += `<!-- HEAD_svelte-t9fl96_START -->${$$result.title = `<title>Amm Functions</title>`, ""}<meta name="${"description"}" content="${"Constant Product calculations for Automated Market Makers"}"><!-- HEAD_svelte-t9fl96_END -->`, ""}


<div class="${"grid h-screen place-items-center"}"><div class="${"grid "}"><h1 class="${"text-3xl font-bold underline p-8 text-center"}">Constant Product Simulation</h1>
		
			<div><h2 class="${"text-md font-semibold underline pb-2"}">Inputs</h2>
				<div class="${"grid grid-cols-2 gap-8 pb-16"}"><div><h3 class="${"text-md font-semibold"}">Amount Token A</h3>
						<input class="${"w-full"}" type="${"number"}"${add_attribute("value", balance_a, 0)}></div>
					<div><h3 class="${"text-md font-semibold"}">Amount Token B</h3>
						<input class="${"w-full"}" type="${"number"}"${add_attribute("value", balance_b, 0)}></div>
					<div class="${"item-center"}"><h3 class="${"text-md font-semibold"}">Change Token A</h3>
						<input class="${"w-full"}" type="${"number"}"${add_attribute("value", delta_a, 0)}></div>
					<div class="${"item-center"}"><h3 class="${"text-md font-semibold"}">Change Token B</h3>
						<input class="${"w-full"}" type="${"number"}"${add_attribute("value", delta_b, 0)}></div></div>

				<h2 class="${"text-md font-semibold underline pb-2"}">Result</h2>
				<div class="${"grid grid-cols-2 gap-8"}"><div><h3 class="${"text-md font-semibold"}">New Balance Token A</h3>
						<p>${escape(new_balance_a)}</p></div>
					<div><h3 class="${"text-md font-semibold"}">New Balance Token B</h3>
						<p>${escape(new_balance_b)}</p></div>

					<div class="${"item-center"}"><h3 class="${"text-md font-semibold"}">Slippage</h3>
						<p>${escape(displayed_slippage)}%</p></div></div></div>
			
		</div>
</div>`;
});
export {
  Page as default
};
