import React from "react";
import {Card, CardBody, CardText} from "reactstrap";

export default function LocationCard(props) {
  return (
    <Card>
      <CardBody>
        <CardText>Name: {props.name}</CardText>
        <CardText>Type: {props.type}</CardText>
        <CardText>Dimension: {props.dimension}</CardText>
        <CardText>Residents: {props.residents}</CardText>
      </CardBody>
    </Card>
  );
}
