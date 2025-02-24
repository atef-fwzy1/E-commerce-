import Button from 'react-bootstrap/Button';
import "./PageNotFound.css"
import { Link } from 'react-router-dom';
let PageNotFound =()=>{
    return (
   <section Class="page_404">
	<div Class="container">
		<div Class="row">	
		<div Class="col-sm-12 ">
		<div Class="col-sm-10 col-sm-offset-1  text-center">
		<div Class="four_zero_four_bg">
			<h1 Class="text-center ">404</h1>
		
		
		</div>
		
		<div Class="contant_box_404">
		<h3 Class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/" Class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    )
}
export default PageNotFound;