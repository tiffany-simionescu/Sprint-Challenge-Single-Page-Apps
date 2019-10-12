import React from "react";
import {Card, CardBody, CardImg, CardText} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Card>
      <CardBody>
        <CardImg src={props.image} />
        <CardText>Name: {props.name}</CardText>
        <CardText>Status: {props.status}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Gender: {props.gender}</CardText>
      </CardBody>
    </Card>
  );
}
