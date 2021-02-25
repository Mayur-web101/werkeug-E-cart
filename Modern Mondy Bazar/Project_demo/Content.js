const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class Content extends Component
{
	
	static template = xml `
		<div>
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			      <img src="bootstrap4/images/img3.jpg" class="d-block w-100" alt="..."/>
			    </div>
			    <div class="carousel-item">
			      <img src="bootstrap4/images/img.jpg" class="d-block w-100" alt="..."/>
			    </div>
			    <div class="carousel-item">
			      <img src="bootstrap4/images/img2.jpg" class="d-block w-100" alt="..."/>
			    </div>
			  </div>
			</div>
		</div>`;
}
