import React from 'react';

const Tags = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold text-center my-10">Tags</h2>
			<div className="mb-4 ml-80">
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">SALAD</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">RECIPE</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">PLACES</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">TIPS</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">FRIENDS</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">TRAVEL</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">EXERCISE</button>
			
			</div>
			<div className="mb-24 ml-80">
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 ml-20 rounded">READING</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">RUNNING</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">SELF-HELP</button>
			<button class="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 rounded">VACATION</button>
			</div>
		</div>
	);
};

export default Tags;