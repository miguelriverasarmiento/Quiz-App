import React from 'react'
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>

      <CategoryCard 
        category={categories.ciencia} 
        src={imgCiencia} 
        alt={`categoria ${categories.ciencia}`}
        gradientColor='from-purple-500 to-pink-500'
      />

      <CategoryCard 
        category={categories.deportes} 
        src={imgDeportes} 
        alt={`categoria ${categories.deportes}`}
        gradientColor='from-lime-400 to-teal-700'
      />

      <CategoryCard 
        category={categories.filosofia} 
        src={imgFilosofia} 
        alt={`categoria ${categories.filosofia}`}
        gradientColor='from-red-400 to-zinc-400'
      />

      <CategoryCard 
        category={categories.geografia} 
        src={imgGeografia} 
        alt={`categoria ${categories.geografia}`}
        gradientColor='from-cyan-200 to-lime-200'
      />

      <CategoryCard 
        category={categories.historia} 
        src={imgHistoria} 
        alt={`categoria ${categories.historia}`}
        gradientColor='from-sky-300 to-indigo-900'
      />

      <CategoryCard 
        category={categories.literatura} 
        src={imgLiteratura} 
        alt={`categoria ${categories.literatura}`}
        gradientColor='from-amber-400 to-emerald-600'
      />

      <CategoryCard 
        category={categories.tecnologia} 
        src={imgTecnologia} 
        alt={`categoria ${categories.tecnologia}`}
        gradientColor='from-violet-900 to-rose-500'
      />
    </div>
  )
}

