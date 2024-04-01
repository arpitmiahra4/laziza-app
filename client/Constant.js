export const cardsData = [
  {
    id: 1,
    title: "Burger",
    price: "$10.00",
    reviews: 250,
    imageUrl:
      "https://mypureplants.com/wp-content/uploads/2022/01/Vegan-TVP-burger-big-mac-feat.jpg",
  },
  {
    id: 2,
    title: "Cake",
    price: "$12.00",
    reviews: 300,
    imageUrl:
      "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg?w=500&h=500&crop=1",
  },
  {
    id: 3,
    title: "Sandwich",
    price: "$10.00",
    reviews: 250,
    imageUrl:
      "https://thecococompany.com/cdn/shop/products/Chicken_club_sandwich_0a1f55fc-855e-48f3-af1a-c73d35bdcfb3_grande.jpg?v=1645627475",
  },
  {
    id: 4,
    title: "Pizza",
    price: "$12.00",
    reviews: 300,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  },
  {
    id: 5,
    title: "Momos",
    price: 12.00,
    reviews: 300,
    imageUrl:
      "https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg",
  },
  {
    id: 6,
    title: "Biryani",
    price: 12.00,
    reviews: 300,
    imageUrl:
      "https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800",
  },
  {
    id: 7,
    title: "Indian",
    price: 12.00,
    reviews: 300,
    imageUrl:
      "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/pass/GettyImages-1223580360.jpg",
  },
  {
    id: 8,
    title: "Pani-puri",
    price: 12.00,
    reviews: 300,
    imageUrl:
      "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
  },
];

export const rest = [
  {
    id: "1",
    title: "Best Restaurants in Town",
    description: "Explore the finest dining experiences in our city.",
    restaurants: [
      {
        id: "1",
        name: "Delicious Delights",
        image:
          "https://img.freepik.com/premium-psd/delight-logo-mockup-with-gold-effect-black-texture-background_534308-1818.jpg?w=360",
        description:
          "A cozy place offering a wide variety of mouth-watering dishes.",
        LNG: -73.968285,
        lat: 40.785091,
        address: "123 Main Street, Cityville",
        stars: 4.5,
        reviews: 120,
        category: "Fine Dining",
        dishes: [
          {
            id: "1",
            name: "Grilled Salmon",
            description:
              "Freshly grilled salmon served with a side of vegetables.",
            price: 20.99,
            image:
              "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
          },
          {
            id: "2",
            name: "Pasta Carbonara",
            description: "Classic pasta dish with creamy carbonara sauce.",
            price: 18.50,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgv8zb9YYjo6K9Zx_Fh2VuK14OQkPHgu5PQ&usqp=CAU",
          },
        ],
      },
      {
        id: "2",
        name: "Taste of Italy",
        image:
          "data:image/png;base64,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",
        description: "Authentic Italian cuisine served with love.",
        LNG: -73.98513,
        lat: 40.748817,
        address: "456 Oak Street, Villagetown",
        stars: 4.8,
        reviews: 200,
        category: "Italian",
        dishes: [
          {
            id: "3",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
            price: 14.99,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR08hHZtEXsEpZEwboEmE3XxNCeyV9HN1wYw&usqp=CAU",
          },
          {
            id: "4",
            name: "Ravioli al Tartufo",
            description:
              "Homemade ravioli stuffed with truffle-infused filling.",
            price: 22.50,
            image:
              "https://media-cdn.tripadvisor.com/media/photo-s/1a/2c/64/c2/ravioli-al-tartufo-nero.jpg",
          },
        ],
      },
    ],
  },
];
