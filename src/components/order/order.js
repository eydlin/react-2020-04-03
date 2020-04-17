import React from 'react';
import { connect } from 'react-redux';
import { Button, Popover } from 'antd';

function Order(props) {
  const { order, restaurants } = props;
  let allDishes = {};
  restaurants.forEach(restaurant => {
    restaurant.menu.forEach(dish => {
      allDishes[dish.id] = dish;
    });
  });
  const content = (
    <div>
      {Object.entries(order).map(([key, value]) => (
        <p key={key}>{`${allDishes[key].name}: ${value} x $${
          allDishes[key].price
        } = $${value * allDishes[key].price}`}</p>
      ))}
    </div>
  );

  return (
    <div>
      <Popover content={content} title="Title">
        <Button type="primary">Корзина</Button>
      </Popover>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
  ...ownProps
});

export default connect(mapStateToProps)(Order);
// export default Order;
