import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav } from 'react-bootstrap';
import WelcomeBanner from './WelcomeBanner';
import { setRegion } from "../components/countries/countrySlice";
const Header = () => {
const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.countries.selectedRegion);
  const allCountries = useSelector((state) => state.countries.all);

  const regions = ["All", ...new Set(allCountries.map((c) => c.region).filter(Boolean))];

  const handleRegionChange = (region) => {
    dispatch(setRegion(region));
  };
  return (
    <>
     <Navbar expand="md" bg="white" className="py-2">
      <Container fluid>
        <Navbar.Brand className="fw-bold m-0">Countries</Navbar.Brand>

        <Navbar.Toggle aria-controls="region-navbar" />

        <Navbar.Collapse id="region-navbar" className="justify-content-end">
          <Nav>
            {regions.map((region) => (
              <Nav.Link
                key={region}
                  onClick={() => handleRegionChange(region)}
                  active={selectedRegion === region}
                style={{
                  fontWeight: selectedRegion === region ? 'bold' : 'normal',
                  textDecoration: selectedRegion === region ? 'underline' : 'none',
                  color: '#000',
                  marginLeft: '1rem',
                }}
              >
                {region}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <WelcomeBanner/>
    </>
   
  );
};

export default Header;
