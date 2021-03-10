const { Component,Store,mount} = owl;
const { xml } = owl.tags;


export class Footer extends Component
{
	static template = xml `
    <div>
      <footer class="bg-dark text-center text-white">
      <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
      </section>
    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
            <div class="col-auto">
                <p class="pt-2">
               
                </p>
              </div>
              <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">Email address</label>
              </div>
            </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
            Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    </div>
    </footer>
    </div>`;
}
