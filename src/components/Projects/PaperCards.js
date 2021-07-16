import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function PaperCards(props) {
    return (
        <Card className="paper-card-view">
            <Card.Body>

                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                    <Button variant="primary" href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        {props.isBlog ? "View Blog" : "View Papers"}
                    </Button>
                </Card.Text>

            </Card.Body>
        </Card>
    );
}
export default PaperCards;
