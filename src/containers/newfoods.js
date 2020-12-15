import React from 'react';
import { Card } from '../components/index';
import { Bowls } from '../products/pokibowls';
import fef from "./fef.jpg"

export function NewFoods() {
  const showItems = Bowls.slice(0, 2);
  return (
    <>
      <Card>
        {showItems.map((foodItem) => {
          return (
            <Card.Item key={foodItem.id}>
              <Card.Picture
                // src={`/products/pics/${foodItem.pictureId}.jpg`}
                src={fef}
                alt={`${foodItem.name}`}
              />
              <Card.Title>{foodItem.name}</Card.Title>
              {/* <Card.Text>{foodItem.text}</Card.Text> */}
            </Card.Item>
          );
        })}
      </Card>
    </>
  );
}
