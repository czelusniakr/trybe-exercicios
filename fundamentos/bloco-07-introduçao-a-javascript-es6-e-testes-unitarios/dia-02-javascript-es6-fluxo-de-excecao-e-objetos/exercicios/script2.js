const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  const customerName = order.name;
  const total = order.payment.total;

  return `Olá ${customerName}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${total},00.`;
}

orderModifier(order);