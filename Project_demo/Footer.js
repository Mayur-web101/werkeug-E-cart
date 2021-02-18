const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class Footer extends Component
{
	static template = xml `
	<div class="fixed-bottom">
    	<footer class="bg-light text-center text-lg-start">
  			<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
  			</div>
		</footer>  
	</div>`;
}
