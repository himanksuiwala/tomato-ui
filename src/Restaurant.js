import React, { useEffect } from "react";
// import _ from "underscore";
import {
  fetchAsyncStoreData,
  getAllStore,
  getStoreData,
} from "./features/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Restaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAsyncStoreData(id));
  }, []);
  const data = useSelector(getStoreData);
  return <h1>H</h1>;
};

export default Restaurant;
