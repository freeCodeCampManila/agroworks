const month = 30 * 24 * 60 * 60 * 1000;

const portfolio = [
  {
    contractId: 1,
    productId: 'rice',
    productName: 'Rice',
    price: '200',
    quantity: '400',
    fulfillmentDate: Date.now() + 3 * month
  },
  {
    contractId: 2,
    productId: 'maize',
    productName: 'Maize',
    price: '140',
    quantity: '200',
    fulfillmentDate: Date.now() + 1 * month
  },
  {
    contractId: 4,
    productId: 'rice',
    productName: 'Rice',
    price: '220',
    quantity: '300',
    fulfillmentDate: Date.now() + 4 * month
  },
];

module.exports = portfolio;
