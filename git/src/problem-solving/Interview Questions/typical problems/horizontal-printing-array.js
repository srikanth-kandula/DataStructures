console.clear();

let resource = [
  {
    brand: 'Parle',
    products: [
      {
        brand: 'Parle Agro',
        products: [
          {
            brand: 'Frooti',
            products: []
          },
          {
            brand: 'Bailey',
            products: []
          }
        ]
      }
    ]
  },
  {
    brand: 'Pepsico',
    products: [
      {
        brand: 'VB',
        products: [
          {
            brand: 'Lays',
            products: []
          },
          {
            brand: 'Kurkure',
            products: [
              {
                brand: 'Mad Angles',
                products: []
              }
            ]
          }
        ]
      },
      {
        brand: 'Pepsi',
        products: []
      }
    ]
  },
  {
    brand: 'Cadbury',
    products: []
  }
];

/**
 * for the above object or a similar one, print all the brand names in the first level, followed by brand names in the second level,
 * and so on
 * e.g.Parle, Pepsico, Cadbury, Parle Agro, VB, Pepsi, Frooti, Bailey, Lays, Kurkure, Mad Angles
 */

function printBrandNames(brandCollection) {
  let products = [];

  if (brandCollection.length > 0) {
    for (let brandDetail of brandCollection) {
      console.log(brandDetail['brand']);
      if (brandDetail['products'])
        products.push(...brandDetail['products']);
    }
    printBrandNames(products)
  }
}

printBrandNames(resource);