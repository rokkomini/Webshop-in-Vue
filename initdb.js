console.log('db script starting');
const db = new Mongo().getDB('webshop');

const products = db.createCollection('products', { capped: false });
console.log('Created products collection.');

db.products.insertMany([
  {
    name: 'A single balloon',
    description: 'lorem ipsum blablablabla',
    category: ['Fun'],
    brand: 'Pretty Balloons',
    price: 199,
    mainImage: {
      url: 'https://images.unsplash.com/photo-1519400197429-404ae1a1e184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      alt: 'blue balloon',
    },
    moreImages: [
      {
        url: '',
        alt: '',
      },
    ],
    slug: 'a-single-balloon',
    __v: 0,
    options: {
      size: [],
      color: [
        {
          name: 'blue balloon',
          image: {
            url: 'https://images.unsplash.com/photo-1519400197429-404ae1a1e184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            alt: 'blue balloon',
          },
          _id: "6442bada1c23ebf1b2912712"
        },
        {
          name: 'pink balloon',
          image: {
            url: 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            alt: 'pink balloon',
          },
          _id: "6442bada1c23ebf1b2912713"   
        },
      ],
    },
  },
  {
    name: 'Candle Holder',
    description: 'Candle holder is made of porcelain and is 10 x 3.7 cm',
    options: {
      size: [],
      color: [
        {
          name: 'white',
          colorCode: '#FFFFFF',
          image: {
            url: '/assets/images/products/512355/138542-1-512355-003_pack_a.jpg',
            alt: 'white candle holder',
          },
          _id: "644a4672874f392abb3dd9ac"

        },
        {
          name: 'light blue',
          colorCode: '#72abe0',
          image: {
            url: '/assets/images/products/512355/138551-1-512355-002_pack_a.jpg',
            alt: 'light blue candle holder',
          },
          _id: "644a4672874f392abb3dd9ad"         
        },
        {
          name: 'Navy blue',
          colorCode: '#202A44',
          image: {
            url: '/assets/images/products/512355/138543-1-512355-001_pack_a.jpg',
            alt: 'navy blue candle holder',
          },
          _id: "644a4672874f392abb3dd9ae"
        },
      ],
    },
    category: ['Decorations', 'Home'],
    brand: 'Sister Forever',
    price: 49,
    mainImage: {
      url: '/assets/images/products/512355/138551-1-512355-002_pack_a.jpg',
      alt: 'light blue candle holder',
    },
    moreImages: [
      {
        url: '',
        alt: '',
      },
    ],
    slug: 'candle-holder',
    __v: 0,
  },
  {
    name: 'Plant Pot',
    description:
      'Ceramic plant pot. Be aware that condensation may form. Therefore, do not place the product on surfaces that cannot withstand moisture. 1,3 kg and Ø 17 x 15 cm.',
    options: {
      size: [],
      color: [
        {
          name: 'Yellow Ochre',
          colorCode: '#CC7722',
          image: {
            url: '/assets/images/products/512313/135664-1-512313-002_pack_a.jpg',
            alt: 'Yellow Ochre Plant Pot',
          },
          _id: "645df49b26097bab2f194372"
        },
        {
          name: 'Forest Green',
          colorCode: '#014421',
          image: {
            url: '/assets/images/products/512313/135665-1-512313-001_pack_a.jpg',
            alt: 'Forest Green Plant Pot',
          },
          "_id": "645df49b26097bab2f194371"         
        },
      ],
    },
    category: ['Decorations', 'Home', 'Garden'],
    brand: 'Sister Forever',
    price: 129,
    mainImage: {
      url: '/assets/images/products/512313/135664-1-512313-002_pack_a.jpg',
      alt: 'Yellow Ochre Plant Pot',
    },
    moreImages: [
      {
        url: '',
        alt: '',
      },
    ],
    slug: 'plant-pot',
    __v: 0,
  },
  {
    name: 'Dotted Plant Pot',
    description:
      'Ceramic plant pot. Be aware that condensation may form. Therefore, do not place the product on surfaces that cannot withstand moisture.',
    options: {
      size: [
        {
          name: '15,3 x 12,5 cm',
          _id: "64649182b82d4f9f8e6c8939"
        },
        {
          name: '17 x 14 cm',
          _id: "64649182b82d4f9f8e6c893a"
        },
      ],
      color: [],
    },
    category: ['Decorations', 'Home', 'Garden'],
    brand: 'Dots and dats',
    price: 159,
    mainImage: {
      url: '/assets/images/products/508855/115749-1-508855-001_pack_a.jpg',
      alt: 'Dotted plant pot',
    },
    moreImages: [
      {
        url: '/assets/images/products/508855/115749-1-508855-001_miljo_a.jpg',
        alt: 'Sunflower in pot',
        _id: "64649182b82d4f9f8e6c893b"

      },
    ],
    slug: 'dotted-plant-pot',
    __v: 0,
  },
]);
