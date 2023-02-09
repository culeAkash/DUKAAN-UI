import React from 'react'
import {Card, Col, Container, Row} from 'reactstrap'
import img from "../../Static/images/home.jpg"
import style from "../../Static/Styles/Home-Pages/Home.module.css"



export default function Home() {
  return (
    <Container>
        <Card
        className='mt-auto'
        >
            <Row
            md={{
                size : 10,
                offset : 1  
            }}>

                <Col
                md={{
                    size: 6,
                }}
                className={`${style.landing} p-0`}>
                Akash
                </Col>

                {/* <div className="divider"></div> */}

                <Col
                md={{
                    size : 6
                }}
                className="p-0"
                >
                    <img className={style.homeImage} src={img} alt="" />
                </Col>

            </Row>

        </Card>
    </Container>
  )
}
