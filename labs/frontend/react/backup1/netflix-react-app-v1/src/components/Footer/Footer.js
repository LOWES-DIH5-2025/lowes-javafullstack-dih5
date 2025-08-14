import MenuList from "../MenuList/MenuList";

// fn comp with arrow fn
const Footer = () => {
  // any js here 
  const copyrightYear = 2024;
  const devName = "Kumar";
  
  // return JSX
  return (
    <footer className="bottom pt-3 mt-3">
        <ul className="nav justify-content-center border-bottom pb-1 mb-1 fs-15 link-secondary">
          {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> */}
          <MenuList />
        </ul> 
        <p className="text-center text-body-secondary">© {copyrightYear} | {devName}</p>
    </footer>
  );
}

export default Footer;