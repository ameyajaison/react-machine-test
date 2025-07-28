import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, loadMore, setRegion } from "./countrySlice";
import { Button, Spinner, Card, Row, Col, Container } from "react-bootstrap";

const CountryList = () => {
  const dispatch = useDispatch();
  const { all, visibleCount, status, error, selectedRegion } = useSelector(
    (state) => state.countries
  );
  const filteredCountries =
    selectedRegion === "All"
      ? all
      : all.filter((country) => country.region === selectedRegion);
      
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  if (status === "loading")
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  if (status === "failed") return <p className="text-danger">Error: {error}</p>;

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={2} lg={2} className="g-4">
        {filteredCountries.slice(0, visibleCount).map((country, idx) => (
          <Col key={idx}>
            <Card
              className="flex-row align-items-center h-100"
              style={{ borderRadius: "0", border: "2px solid #000" ,boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.4)"}}
            >
              <Card.Img
                src={country.flag}
                alt={country.name}
                style={{ width: "150px", height: "100px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text> {country.region}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {visibleCount < all.length && (
        <div className="text-center mt-4" >
          <Button variant="dark" onClick={() => dispatch(loadMore())} style={{borderRadius: 0}}>
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CountryList;
