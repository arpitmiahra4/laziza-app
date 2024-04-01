import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the Dish in USD',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the Dish',
      validation: (rule) => rule.required(),
    },
  ],
})
