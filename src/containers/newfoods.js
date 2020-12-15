import React from 'react';
import { Card } from '../components/index';
import { Bowls } from '../products/pokibowls';

export function NewFoods() {
  return (
    <>
      <Card>
        {Bowls.map((foodItem) => {
          return (
            <Card.Item key={foodItem.id}>
              <Card.Title>{foodItem.name}</Card.Title>
              {/* <Card.Text>{foodItem.text}</Card.Text> */}
            </Card.Item>
          );
        })}
      </Card>
    </>
  );
}
