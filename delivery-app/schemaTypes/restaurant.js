import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the category',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lng',
      type: 'number',
      title: 'longitude of the restaurant',
      validation: (rule) => rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter Number between 1 to 5',
      validation: (rule) =>
        rule.required().min(1).max(5).error('please Enter Number between 1 to 5'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
      name: 'type',
      title: 'Category',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      validation: (rule) => rule.required(),
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
