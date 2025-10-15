'use client';
import styles from './CategoryTab.module.css'
import CategoryTabItem from './CategoryTabItem.js'
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export default function CategoryTab({categories, setCategoryNo}) {
  // console.log(categories)
  const [activeItemId, setActiveItemId] = useState(-1); // categories 배열에서 선택된 인덱스(0부터 시작)
  console.log("CategoryTab : ")
  console.log(categories)

  // setCategoryNo
  if (activeItemId !== -1) {
    setCategoryNo(categories[activeItemId].code);
  }

  return (
    <ul className={styles.categoryTab}>
      {
        categories.map((category, id) => {
          return (
            <CategoryTabItem 
              text={category.name.replaceAll('&amp;', '&')}
              setActiveItemId={setActiveItemId}
              itemId={id}
              acitveStyle={(activeItemId == id) ? styles.activeItem : ""}
            />
          )
        })
      }
    </ul>
    );
}