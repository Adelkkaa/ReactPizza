import React from "react";

const categories = [
     'Все',
     'Мясные',
     'Вегетарианская',
     'Гриль',
     'Острые',
     'Закрытые'
]

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
}

const Categories: React.FC<CategoriesProps>= React.memo(({value, onChangeCategory}) => {
  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => {
            return (
              <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? 'active' : ''}>
        {item}
      </li>
            )
          })
        }
      </ul>
    </div>
  );
})

  export default Categories;