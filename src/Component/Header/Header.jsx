import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<section className="header_section">
			<div className=" paddings innerWidth header_container">
			{/* logo */}
					<img src="./logo.png" alt="header logo" width={100}/>

{/* Menu */}
				<div className="header_menu  ">
					<Link className="link" to={"/"}>Home</Link>
					<Link className="link" to={"/About"}>About us</Link>  
					<Link className="link" to={"/Profile"}>Profile</Link>  
					<Link className="link" to={"/SignIn"}>SignIn</Link>
					<button className="Button">Contact</button>
				</div>
			</div>
		</section>
	)
}

export default Header
