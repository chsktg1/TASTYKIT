import React, { Component } from "react";

import Cookies from "js-cookie";

import { AiFillStar } from "react-icons/ai";

import { BsFillCaretDownFill } from "react-icons/bs";

import { FcGenericSortingDesc } from "react-icons/fc";

import LoadingView from "../LoadingView";

import "./index.css";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default class Data extends Component {
  state = {
    activePage: 1,
    error: false,
    isLoading: true,
    showDrop: false,
    rating: "Lowest",
  };

  componentDidMount() {
    this.getData();
  }

  increase = () => {
    const { activePage } = this.state;
    if (activePage === 20) {
      this.setState({ activePage: 20 }, () => this.getData());
    } else {
      this.setState({ activePage: activePage + 1 }, () => this.getData());
    }
    this.getData();
  };

  decrease = () => {
    const { activePage } = this.state;
    if (activePage === 1) {
      this.setState({ activePage: 1 }, () => this.getData());
    } else {
      this.setState({ activePage: activePage - 1 }, () => this.getData());
    }
  };

  getData = async () => {
    const token = Cookies.get("jwt_token");
    const { activePage, rating } = this.state;
    const offset = (activePage - 1) * 9;
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${rating}`;
    console.log(url);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(url, options);
    if (res.ok) {
      const data = await res.json();

      this.setState({ data: data.restaurants, error: false, isLoading: false });
    } else {
      this.setState({ error: true, isLoading: false });
    }
  };

  showDropDown = () => {
    this.setState({ showDrop: true });
  };

  dropDown = (e) => {
    console.log(e.target.value);
    this.setState({ rating: e.target.value, showDrop: false }, () => {
      this.getData();
    });
  };

  render() {
    const { isLoading, data, activePage, showDrop, rating } = this.state;
    return isLoading ? (
      <LoadingView td="restaurants-list-loader" />
    ) : (
      <div>
        <div
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "space-around",
            marginTop: "60px",
          }}
        >
          <div>
            <p style={{ fontSize: "32px", paddingBottom: "20px" }}>
              Popular Restaurants
            </p>
            <p>
              Select Your favorite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "0px", marginRight: "4px" }}>
              <FcGenericSortingDesc />
            </div>

            <p>Sort by {rating}</p>

            <div style={{ marginTop: "-1px", marginRight: "4px" }}>
              <button onClick={this.showDropDown}>
                <BsFillCaretDownFill />
              </button>
              {showDrop ? (
                <select value={rating} onChange={this.dropDown}>
                  <option value="Lowest">Lowest</option>
                  <option value="Highest">Highest</option>
                </select>
              ) : null}
            </div>
          </div>
        </div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {data.map((e) => (
            <Link
              key={e.id}
              style={{ textDecoration: "none", color: "#334155" }}
              to={`/restaurant/${e.id}`}
            >
              <li
                testid="restaurant-item"
                id="box"
                style={{
                  display: "flex",
                  margin: "10px",
                  width: "30vw",
                  minWidth: "200px",
                }}
              >
                <div>
                  <img
                    src={e.image_url}
                    style={{
                      width: "160px",
                      borderRadius: "10px",
                      marginRight: "6px",
                    }}
                    alt="restaurant"
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "24px",
                    }}
                  >
                    {e.name}
                  </p>
                  <p>{e.cuisine}</p>
                  <div style={{ display: "flex" }}>
                    <AiFillStar />
                    <p>{e.user_rating.rating}</p>
                    <p>({e.user_rating.total_reviews} rating)</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <div className="navigationContainer">
          <button testid="pagination-left-button" onClick={this.decrease}>
            <BsFillArrowLeftSquareFill />
          </button>{" "}
          &nbsp; &nbsp; <span testid="active-page-number">{activePage}</span>{" "}
          &nbsp; of 20 &nbsp; &nbsp;
          <button testid="pagination-right-button" onClick={this.increase}>
            <BsFillArrowRightSquareFill />
          </button>
        </div>
      </div>
    );
  }
}
