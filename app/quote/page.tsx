'use client';
import CategoryTab from "./components/CategoryTab.js";
import CarCardList from "./components/CarCardList.js"
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export default function Quote() {
  console.log("변수 초기화됨")
  const [categories, setCategories] = useState([]);
  const [categoryNo, setCategoryNo] = useState(-1);
  const [carList, setCarList] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesByCategory, setVehiclesByCategory] = useState([]);

  const makeVehicles = (data) => {
    const fieldsNeeded = ["rcCode", "basicPrice", "replaceTxt", "sidePcImg", "d45PcImg", "categoryNo"]
    let vehicles = data.map((entry) => {
      let newEntry = {}
      for (let field of fieldsNeeded) {
        newEntry[field] = entry[field];
      }
      return newEntry;
    })
    console.log("vehicles : ")
    console.log(vehicles)
    console.log("vehicles end")
    setVehicles(vehicles);
  }

  const filterVehicleByCategory = (vehicles, no) => {
    let filtered = vehicles.filter((v) => {
      return v.categoryNo === no
    })
    // TODO : 서브카테고리항목에 대해서는 filtered가 제대로 작동 안함
    // 서브카테고리마다 각자의 categoryNo를 가지기 때문임
    // console.log("filtered : ")
    // console.log(filtered)
    // console.log("filtered end")
    return filtered
  }

  useEffect(() => {
    fetch('/categories.json').then((r) => r.json()).then((r) => setCategories(r.body));
    fetch('/vehicles.json').then((r) => r.json()).then((r) => makeVehicles(r));
  }, []);

  useEffect(() => {
    console.log(`debug, categoryNo : ${categoryNo}`)
    if (categoryNo != -1 && vehicles.length > 0) { // 선택된 카테고리가 있으면
      setVehiclesByCategory(filterVehicleByCategory(vehicles, categoryNo));
    }
  }, [categoryNo])

  return (
    <>
      <h1>견적 페이지</h1>
      <CategoryTab 
        categories={categories}
        setCategoryNo={setCategoryNo}
      />
      <div>
        <CarCardList
          carList={vehiclesByCategory}
        />
      </div>
      
    </>

  );
}
