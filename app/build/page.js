'use client';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Quote() {
  // json 패치해오기


  // useEffect(() => {
  //   fetch('/categories.json').then((r) => r.json()).then((r) => setCategories(r.body));
  //   fetch('/vehicles.json').then((r) => r.json()).then((r) => makeVehicles(r));
  // }, []);

  // 쿼리스트링 얻어오기
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = new URLSearchParams(searchParams);
  const param = q.get("rcCode")

  return (
    <>
      <h1>hello!</h1>
      <p>{'pathname : ' + pathname}</p>
      <p>{'searchParams : ' + searchParams}</p>
      <p>{'param : ' + param}</p>
    </>

  );
}
