import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(4);
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const pageURL = `&page=${page}`;
    const queryURL = `&query=${query}`;
    if (query) {
      url = `${searchURL}${clientID}${pageURL}${queryURL}`;
    } else {
      url = `${mainURL}${clientID}${pageURL}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          setPage(2);
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
      <Jumbotron fluid>
        <Navbar className="py-1 mb-5">
          <Navbar.Brand>
            <a className="logo" href="/">
              <i class="fas fa-camera-retro text-white"></i>
            </a>
          </Navbar.Brand>
        </Navbar>
        <Container className="px-2 py-3 w-50">
          <h1 className="font-weight-bold text-white">SnapSplash</h1>
          <p className="mb-0 text-white">
            The internet's source of high-quality images.
          </p>
          <p className="text-white">Powered by creators everywhere.</p>
          <InputGroup className="my-3" size="lg">
            <FormControl
              placeholder="Search photos"
              aria-label="Search photos"
              aria-describedby="basic-addon2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroup.Append>
              <Button
                variant="outline-light"
                type="submit"
                onClick={handleSubmit}
              >
                <i class="fas fa-search text-white"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </>
  );
}

export default App;
