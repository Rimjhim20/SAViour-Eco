import React, { Fragment } from 'react';
import {
  Container, Row, Col, Button, Card, CardImg, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import PIC from './assets/26720.jpg';
import Boy from './assets/boy.jpg';

const Home = () => {
  return (
    <>

      <Fragment>
        <main className=" ">
          <Container className="px-0">
            <Row noGutters className="position-relative">
              <Col xs={{ order: 1 }} md={{ size: 5, order: 1 }} tag="aside" className=" ">
                <Card className='m-2'>
                  <CardImg top width="100%" src={Boy} alt="boy" />
                  <CardBody >
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary"> "Preparing for Nature's Fury: Disaster Management"</CardTitle>
                    <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                      A natural disaster management system (NDMS) is a comprehensive approach to preparing for and responding to natural disasters such as hurricanes, floods, tornadoes, earthquakes, and wildfires.
                      An effective NDMS should include the following features:

                      Safety Tips: The NDMS should provide clear and concise information on what actions to take before, during, and after a natural disaster, such as how to prepare an emergency kit, how to evacuate safely, and how to protect oneself from injuries.

                      Notifications: The NDMS should have a robust system for sending out alerts and warnings to the public, using a variety of communication channels such as text, email, and social media.
                    </CardText>
                    <Button color="primary" >
                      <a href="/safety" className="font-weight-bold text-decoration-none text-white">
                        Safety Tips
                      </a>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={{ order: 1 }} md={{ size: 6, offset: 1 }} tag="section" className="mt-4 ">
              <div className='m-2'>
                <h1>SaFe-HaVeN</h1>
                <p>"Nature's wrath can be devastating, but with a well-planned natural disaster management system in place, we can minimize the damage."</p>

                <CardImg top width="100%" height="80%" src={PIC} alt="banner" />
</div>
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>

    </>
  )
}

export default Home