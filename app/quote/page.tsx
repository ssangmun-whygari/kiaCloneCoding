'use client';
import CategoryTab from "./components/CategoryTab.js";
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export default function Quote() {
  const [categories, setCategories] = useState([]);
  const [upperCategoryNo, setUpperCategoryNo] = useState(-1);
  const [categoryNo, setCategoryNo] = useState(-1);
  let temp;
  useEffect(() => {
    fetch('/categories.json').then((r) => r.json()).then((r) => setCategories(r.body));
    fetch('/vehicles.json').then((r) => r.json()).then((r) => temp = r.body);
  }, []);

  useEffect(() => {
    console.log(`debug, upperCategoryNo : ${upperCategoryNo}`)
  }, [upperCategoryNo])

  if (categoryNo == -1) { // 하위 분류가 없는 분류(예 : EV, PBV, RV)
    
  }

  return (
    <>
      <h1>견적 페이지</h1>
      <CategoryTab 
        categories={categories}
        setUpperCategoryNo={setUpperCategoryNo}
        setCategoryNo={setCategoryNo}
      />
    </>

  );
}
